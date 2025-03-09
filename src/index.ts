export enum WordBattleFunction {
  GET_USER = "GET_USER",
}

export interface GetUserRequest {
  uuid: string;
}
export interface GetUserResponse {
  uuid: string;
  username: string;
  word: string;
}

export type WordBattleRequestData = GetUserRequest;
export interface WordBattleRequest {
  function: WordBattleFunction;
  data: WordBattleRequestData;
}
