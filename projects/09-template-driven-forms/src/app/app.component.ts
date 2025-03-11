import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  standalone: true,
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <input type="text" id="title" [(ngModel)]="title" />

        <label for="body">Post Body</label>
        <input type="textarea" id="body" [(ngModel)]="body" />
      </section>

      <section>
        <p>{{title}}</p>
        <p>{{body}}</p>
      </section>
    </article>
  `,
})
export class AppComponent {
  title = '';
  body = '';
}
