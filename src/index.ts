import { BattleFunction, BattleRequest } from "./battle";
import { GetUserFunction, GetUserRequest } from "./getUser";
import { ListTopUsersFunction, ListTopUsersRequest } from "./listTopUsers";
import { RegisterUserFunction, RegisterUserRequest } from "./registerUser";
export * from "./getUser";
export * from "./registerUser";
export * from "./listTopUsers";
export * from "./user";

export enum WordBattleFunctionName {
  GET_USER = "GET_USER",
  REGISTER_USER = "REGISTER_USER",
  LIST_TOP_USERS = "LIST_TOP_USERS",
  BATTLE = "BATTLE",
}

export type WordBattleFunction =
  | GetUserFunction
  | RegisterUserFunction
  | ListTopUsersFunction
  | BattleFunction;

export type WordBattleRequestData =
  | GetUserRequest
  | RegisterUserRequest
  | ListTopUsersRequest
  | BattleRequest;
export interface WordBattleRequest {
  funcName: WordBattleFunctionName;
  data: WordBattleRequestData;
}
