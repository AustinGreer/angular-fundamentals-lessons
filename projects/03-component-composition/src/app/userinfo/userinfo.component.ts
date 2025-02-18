import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userinfo', // this selector will be how the component is referred to in the parent template
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      userinfo works!
    </p>
  `,
  styles: ``
})
export class UserinfoComponent {

}
