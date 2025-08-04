import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { BasePortalOutlet, ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: Dialog) {}

  /**
   * Open a custom dialog by providing a component
   */
  public open<T, R = T>(
    component: ComponentType<unknown>,
    data?: T,
    disableClose = false,
    center = false
  ): Observable<R> {
    const config = this.getConfig({ data, disableClose });
    if (center) {
      config.panelClass = 'dialog-container-center';
    }
    const dialog = this.dialog.open(component, config);

    return dialog.closed as Observable<R>;
  }

  /**
   * Returns the default dialog config
   */
  private getConfig(
    config?: Partial<
      DialogConfig<unknown, DialogRef<unknown, unknown>, BasePortalOutlet>
    >
  ): DialogConfig<unknown, DialogRef<unknown, unknown>, BasePortalOutlet> {
    return {
      autoFocus: false,
      restoreFocus: true,
      panelClass: 'dialog-container',
      backdropClass: 'dialog-backdrop',
      disableClose: false,
      maxHeight: '100%',
      maxWidth: '100%',
      ...config
    };
  }
}
