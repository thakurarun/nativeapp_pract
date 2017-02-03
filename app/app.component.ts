import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App"></ActionBar>
    <Label class="h1">This is a big heading</Label>
<Label class="h6">This is a small heading</Label>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    Image {
      animation-name: spin; animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `]
})
export class AppComponent {
  // Your TypeScript logic goes here
}
