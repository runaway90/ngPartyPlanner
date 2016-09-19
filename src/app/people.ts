export function people (state = [], action) {
  switch (action.type) {
    case "ADD_PERSON":
      return [
        ...state,
        Object.assign({}, {
          id: action.payload.id,
          name: action.payload.name,
          guests: 0,
          attending: false
        })
      ];
    default:
      return state;
  }
}
