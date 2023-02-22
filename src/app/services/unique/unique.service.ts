import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UniqueService {
  private static readonly _idsByPrefix: {
    [prefix: string]: number | undefined;
  } = {};

  public id(prefix = ''): string {
    const n = (UniqueService._idsByPrefix[prefix] ?? 0) + 1;
    UniqueService._idsByPrefix[prefix] = n;
    return prefix + n.toString();
  }
}
