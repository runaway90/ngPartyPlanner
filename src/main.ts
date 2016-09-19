import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/App.module";
import { Store, provideStore} from "@ngrx/store";
import { people } from "./app/people";

platformBrowserDynamic().bootstrapModule(AppModule);
