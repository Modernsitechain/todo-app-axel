import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LocalStorageKey } from '@core/enums';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  /**
   * Sets a key in the local storage
   */
  public set(key: LocalStorageKey, value: unknown): void {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  /**
   * Gets a item out of the local storage
   */
  get<T>(key: LocalStorageKey): T | undefined {
    if (!this.isBrowser) return undefined;

    const value = localStorage.getItem(key);

    switch (value?.toLocaleLowerCase()) {
      case 'true':
        return true as unknown as T;
      case 'false':
        return false as unknown as T;
      default:
        return value ? (JSON.parse(value) as T) : undefined;
    }
  }

  /**
   * Removes a key from the local storage
   */
  remove(key: LocalStorageKey): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  /**
   * Clears the whole local storage
   */
  clear(): void {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }
}
