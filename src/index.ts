import { GetUserFunction, GetUserRequest } from "./getUser";
import { RegisterUserFunction, RegisterUserRequest } from "./registerUser";
export * from "./getUser";
export * from "./registerUser";
export * from "./user";

export enum WordBattleFunctionName {
  GET_USER = "GET_USER",
  REGISTER_USER = "REGISTER_USER",
}

export type WordBattleFunction = GetUserFunction | RegisterUserFunction;

export type WordBattleRequestData = GetUserRequest | RegisterUserRequest;
export interface WordBattleRequest {
  funcName: WordBattleFunctionName;
  data: WordBattleRequestData;
}
