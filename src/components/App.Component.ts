import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
const uuid = require("node-uuid");

@Component({
  selector: "app",
  template: `
    <h1>Hello, Angular</h1>
    <person-input
      (addPerson)="addPerson($event)"
    >
    </person-input>
    <person-list
      [people]="people"
    ></person-list>
  `
})

export class AppComponent {
  public people;
  public id = 0;
  constructor (private store: Store<any>) {
    store.select("people")
      .subscribe(people => this.people = people);
  }

  addPerson (name) {
    this.store.dispatch({type: "ADD_PERSON", payload: {
      id: uuid.v4(),
      name,
      guests: 0,
      attending: false
    }});
  }
}
