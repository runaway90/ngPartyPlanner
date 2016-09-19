import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Store, StoreModule } from "@ngrx/store";
import { ReactiveFormsModule } from "@angular/forms";
import { partyPlannerApp } from "../reducers/index.reducer";
import { AppComponent } from "../components/App.component";
import { PersonInput } from "../components/PersonInput.component";
import { PersonList } from "../Components/PersonList.component";

@NgModule({
  declarations: [AppComponent, PersonInput, PersonList],
  imports: [
    BrowserModule,
    StoreModule.provideStore(partyPlannerApp),
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
