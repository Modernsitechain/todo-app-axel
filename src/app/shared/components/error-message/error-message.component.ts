import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorMessageComponent {
  public readonly show = input<boolean>(true);
  public readonly message = input<string | undefined>(undefined);
}
