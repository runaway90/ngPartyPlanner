import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Store, StoreModule } from "@ngrx/store";
import { ReactiveFormsModule } from "@angular/forms";
import { people } from "./people";
import { AppComponent } from "../components/App.component";
import { PersonInput } from "../components/PersonInput.component";
import { PersonList } from "../Components/PersonList.component";

@NgModule({
  declarations: [AppComponent, PersonInput, PersonList],
  imports: [
    BrowserModule,
    StoreModule.provideStore({people}),
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
