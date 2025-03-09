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
