import { combineReducers } from "@ngrx/store";
import { people } from "./people.reducer";

export const partyPlannerApp = combineReducers({
  people
});
