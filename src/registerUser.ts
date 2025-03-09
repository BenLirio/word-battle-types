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
