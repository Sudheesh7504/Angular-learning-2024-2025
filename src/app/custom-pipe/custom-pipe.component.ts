import { Component } from '@angular/core';
import { PersonPipe } from "../person.pipe";

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.scss',
})
export class CustomPipeComponent {
  person = { name: 'sudeesh', gender: 'male' };
  wish = "Good Evening"
}
