import {SAVE_TOKEN, TOGGLE_MENU} from "./actions";
const initState = {
  visibleMenu: false,
  access_token: null,
};
function appReducer(state = initState, action: any) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        visibleMenu: action.data?.visible,
      };
    case SAVE_TOKEN:
      return {
        ...state,
        access_token: action.data?.token,
      };
    default:
      return state;
  }
}

export default appReducer;
