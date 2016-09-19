import { Component, Input } from "@angular/core";

@Component({
  selector: "person-list",
  template: `
    <ul>
      <li
        *ngFor="let p of people"
        [class.attending]="p.attending"
        >
        {{p.name}} - Guests: {{p.guests}}
      </li>
    </ul>

  `
})

export class PersonList {
  @Input() people;
}
