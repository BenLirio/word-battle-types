import { UserRecord } from "./user";

export interface RegisterUserRequest {
  username: string;
  word: string;
  leaderboard?: string;
}
export interface RegisterUserResponse {
  userRecord: UserRecord;
}
export type RegisterUserFunction = (
  data: RegisterUserRequest
) => Promise<RegisterUserResponse>;
