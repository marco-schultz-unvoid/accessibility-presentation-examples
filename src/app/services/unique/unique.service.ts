import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UniqueService {
  private readonly _idsByPrefix: { [prefix: string]: number | undefined } = {}

  public id(prefix = ''): string {
    const n = (this._idsByPrefix[prefix] ?? 0) + 1
    this._idsByPrefix[prefix] = n
    return prefix + n.toString()
  }
}
