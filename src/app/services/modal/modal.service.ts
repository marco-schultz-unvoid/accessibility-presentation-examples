import { ConfigurableFocusTrapFactory } from '@angular/cdk/a11y';
import type { OverlayRef } from '@angular/cdk/overlay';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import type { OnDestroy, Type, ViewContainerRef } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { MODAL_DATA_TOKEN } from '../../constants/modals.constants';
import { ModalReference } from '../modal-reference';
import type { Observable } from 'rxjs';
import { filter, first, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class ModalService implements OnDestroy {
  /** It's initialize in the `AppComponent` initialization */
  private _viewContainerReference!: ViewContainerRef;

  private readonly _unsubscribe$ = new Subject<void>();

  constructor(
    private readonly _overlay: Overlay,
    private readonly _focusTrapFactory: ConfigurableFocusTrapFactory
  ) {}

  public ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  /**
   * We can't inject `setRootViewContainerRef` directly inside a service provided by the 'root',
   * so to work around that we're injecting this inside `app.component` and calling this function there
   */
  public setViewContainerReference(
    viewContainerReference: ViewContainerRef
  ): void {
    this._viewContainerReference = viewContainerReference;
  }

  /**
   * Will instantiate a component modal and attach to the view
   *
   * @param component - The component to use as a modal
   * @param data - The optional data to inject inside modal
   * @returns A subscription that will emit after the close action be triggered
   */
  public open<ModalOutputData, ModalInputData>(
    component: Type<unknown>,
    data?: ModalInputData
  ): {
    readonly data$: Observable<ModalOutputData | null>;
  } {
    // * Initialize overlay
    const overlayReference = this._overlay.create(this._getOverlayConfig());

    // * Create focus trap, so the user can't tab outside the modal
    const focusTrap = this._focusTrapFactory.create(
      overlayReference.overlayElement
    );

    focusTrap.focusFirstTabbableElementWhenReady();

    // * Inject all the given modal's data
    const modalReference = new ModalReference<ModalOutputData>();
    const injector = Injector.create({
      providers: [
        {
          provide: MODAL_DATA_TOKEN,
          useValue: data,
        },
        {
          provide: ModalReference,
          useValue: modalReference,
        },
        { provide: Overlay, useValue: this._overlay },
        {
          provide: ConfigurableFocusTrapFactory,
          useValue: this._focusTrapFactory,
        },
      ],
    });
    // * Create component portal
    const componentPortal = new ComponentPortal(
      component,
      this._viewContainerReference,
      injector
    );

    // * Attach to the view
    const componentReference = overlayReference.attach(componentPortal);

    // * Get the backdrop click and escape keydown events
    const backdropClick$ = overlayReference.backdropClick();
    const escapeKeydown$ = overlayReference
      .keydownEvents()
      .pipe(filter((event) => event.key === 'Escape'));

    // * Close the modal when the user either clicks outside the modal or press the escape key
    const backdropSubscription = backdropClick$
      .pipe(
        first(),
        // Completes when the user press the `Escape` key
        takeUntil(escapeKeydown$),
        // Completes if clicked outside the component
        takeUntil(this._listenCustomBackdropClick(overlayReference)),
        takeUntil(this._unsubscribe$)
      )
      .subscribe({
        complete: () => {
          modalReference.close();
        },
      });

    modalReference.close$
      .pipe(first(), takeUntil(this._unsubscribe$))
      .subscribe({
        complete: () => {
          // TODO: may have a better option to fix that later
          backdropSubscription.unsubscribe();

          // * Destroy all modal related values
          componentReference.destroy();
          focusTrap.destroy();
          overlayReference.detach();
          overlayReference.dispose();
        },
      });

    // * Returns the data
    return {
      data$: modalReference.close$,
    };
  }

  private _listenCustomBackdropClick(
    overlayReference: OverlayRef
  ): Observable<void> {
    const customDropdownClicked$ = new Subject<void>();

    // The container element from the component that we're using as modal (e.g: `<app-tech-talk-modal>...`)
    const containerElement = overlayReference.overlayElement;

    /** We need that because the scroll modal design has the `scroll` bar in the corner of the screen, but to achieve that we need to use add some styles that overlay the default overlay `Backdrop`, and we need to verify when we're clicking outside the modal to close that  */
    overlayReference.hostElement.addEventListener('click', (event) => {
      // * Check if the user had clicked at the container element (P.S: it'll be true in case the click happens in the container, none children or parents are valid)
      if (event.target === containerElement) {
        customDropdownClicked$.next();
        customDropdownClicked$.complete();
      }
    });

    return customDropdownClicked$.asObservable();
  }

  /**
   * Init a `OverlayConfig` with default options
   *
   * @returns A standalone config for overlay
   */
  private _getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      // * Setup
      hasBackdrop: true,
      disposeOnNavigation: true,

      // * Custom CSS classes
      backdropClass: 'modal-backdrop',
      panelClass: 'modal-panel',

      // * Strategy
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
  }
}
