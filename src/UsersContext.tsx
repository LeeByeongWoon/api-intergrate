import React, { createContext, useReducer, useContext } from "react";
import { initialStateType, initialAction } from "./type";
import ceateAyncDispatcher, {
  initialAsyncState,
  createAsyncHandler,
} from "./asyncActionUtiles";
import * as api from "./api";

const initialState = {
  users: initialAsyncState,
  user: initialAsyncState,
};

const usersHandler = createAsyncHandler("GET_USERS", "users");
const userHandler = createAsyncHandler("GET_USER", "user");

function userRedcuer(
  state: initialStateType,
  action: initialAction
): initialStateType {
  switch (action.type) {
    case "GET_USERS":
    case "GET_USERS_SUCCESS":
    case "GET_USERS_ERROR":
      return usersHandler(state, action);
    // users reducer
    case "GET_USER":
    case "GET_USER_SUCCESS":
    case "GET_USER_ERROR":
      return userHandler(state, action);
    default:
      throw new Error("Unhandled action type");
  }
}

const UsersStateContext = createContext<null | initialStateType>(null);
const UsersDispatchContext = createContext<any>(null);

export function UsersProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(userRedcuer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

export function useUsersState() {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error("Cannot find UserStateProvider");
  }
  return state;
}
export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find UserStateProvider");
  }
  return dispatch;
}

export const getUsers = ceateAyncDispatcher("GET_USERS", api.getUsers);
export const getUser = ceateAyncDispatcher("GET_USER", api.getUser);
