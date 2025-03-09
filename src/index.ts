export enum WordBattleFunctionName {
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
export type GetUserFunction = (
  data: GetUserRequest
) => Promise<GetUserResponse>;

export type WordBattleFunction = GetUserFunction;

export type WordBattleRequestData = GetUserRequest;
export interface WordBattleRequest {
  funcName: WordBattleFunctionName;
  data: WordBattleRequestData;
}
