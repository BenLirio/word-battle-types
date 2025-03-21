import { BattleFunction, BattleRequest } from "./battle";
import { GetBattleFunction, GetBattleRequest } from "./getBattle";
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
  GET_BATTLE = "GET_BATTLE",
}

export type WordBattleFunction =
  | GetUserFunction
  | RegisterUserFunction
  | ListTopUsersFunction
  | BattleFunction
  | GetBattleFunction;

export type WordBattleRequestData =
  | GetUserRequest
  | RegisterUserRequest
  | ListTopUsersRequest
  | BattleRequest
  | GetBattleRequest;
export interface WordBattleRequest {
  funcName: WordBattleFunctionName;
  data: WordBattleRequestData;
}
