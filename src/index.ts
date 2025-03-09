export enum WordBattleFunctionName {
  GET_USER = "GET_USER",
  REGISTER_USER = "REGISTER_USER",
}

/* GetUser */
export interface GetUserRequest {
  uuid: string;
}
export interface GetUserResponse {
  uuid: string;
  username: string;
  word: string;
}
export type GetUserFunction = (
  data: GetUserRequest
) => Promise<GetUserResponse>;

/* RegisterUser */
export interface RegisterUserRequest {
  username: string;
  word: string;
}
export interface RegisterUserResponse {
  uuid: string;
  username: string;
  word: string;
}
export type RegisterUserFunction = (
  data: RegisterUserRequest
) => Promise<RegisterUserResponse>;

export type WordBattleFunction = GetUserFunction | RegisterUserFunction;

export type WordBattleRequestData = GetUserRequest | RegisterUserRequest;
export interface WordBattleRequest {
  funcName: WordBattleFunctionName;
  data: WordBattleRequestData;
}
