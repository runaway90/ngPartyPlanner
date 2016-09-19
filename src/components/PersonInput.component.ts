import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "person-input",
  template: `
    <input #personName [formControl]="inputField" type="test" />
    <button (click)="add(personName)">Add Person</button>
  `
})

export class PersonInput {
  @Output() addPerson = new EventEmitter();
  inputField = new FormControl();

  ngOnInit () {
    this.inputField.valueChanges.subscribe(val => console.log(val));
  }

  add (personInput) {
    this.addPerson.emit(personInput.value);
    personInput.value = "";
  }
}
