import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputBaseClass } from '@core/classes/input-base.class';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends InputBaseClass {
  public readonly type = input<'text' | 'number' | 'date'>('text');
  public readonly min = input<string | undefined>(undefined);
  public readonly max = input<string | undefined>(undefined);
  public readonly paddingRight = input<number>(1.25);
  public readonly autocomplete = input<string>('no-autocomplete');
  public readonly preventEnter = input<boolean>(false);
  public readonly split = input<'left' | 'right' | undefined>(undefined);
  public readonly disabled = input<boolean>(false);

  public onPaste(): void {
    this.control.updateValueAndValidity();
  }

  public override get isDisabled(): boolean {
    return this.disabled();
  }
}
