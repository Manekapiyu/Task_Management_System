import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DemoAngularMaterailModule } from "./DemoAngularMaterailModule";

@Component({
  selector: 'app-root',
  imports: [DemoAngularMaterailModule, RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('task_manage_angular');
}
