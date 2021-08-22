import { ADMIN_MODE, USER_MODE } from "./actions";
import { ActionType } from "../../types/types";

type initialStateType = {
  role: string;
};

const initialState: initialStateType = {
  role: "user",
};

export const AccountReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADMIN_MODE:
      return {
        role: "admin",
      };
    case USER_MODE:
      return {
        role: "user",
      };
    default:
      return state;
  }
};
