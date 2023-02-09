import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'accessibily-presentation-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  currentExample = 0;

  public isFirstExample = (): boolean => this.currentExample === 0;
  public isLastExample = (): boolean => this.currentExample === 1;

  public previousExample = (): void => {
    this.currentExample -= 1;
  };

  public nextExample = (): void => {
    this.currentExample += 1;
  };
}
