import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MylibComponent } from '@ng-rspack/mylib';

@Component({
  imports: [MylibComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shell';
}
