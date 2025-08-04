import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import * as IconsaxOutline from '@ng-icons/iconsax/outline';
import * as IconsaxBold from '@ng-icons/iconsax/bold';

export type IconName = keyof typeof IconsaxOutline | keyof typeof IconsaxBold;

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [NgIconComponent],
  template: `<ng-icon [name]="name()" />`,
  styles: `
    :host {
      line-height: 0;
      font-size: inherit;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideIcons({
      ...IconsaxOutline,
      ...IconsaxBold
    })
  ]
})
export class IconComponent {
  public readonly name = input.required<IconName>();
}
