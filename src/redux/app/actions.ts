export const TOGGLE_MENU = "TOGGLE_MENU";
export const SAVE_TOKEN = "SAVE_TOKEN";
const toggleMenu = (visible: boolean) => {
  return {
    type: TOGGLE_MENU,
    data: {
      visible: visible,
    },
  };
};
const saveToken = (token: string) => {
  return {
    type: SAVE_TOKEN,
    data: {
      token: token,
    },
  };
};

const AppActions = {
  toggleMenu,
  saveToken,
};
export default AppActions;
