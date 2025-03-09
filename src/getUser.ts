import { UserRecord } from "./user";

export interface GetUserRequest {
  uuid: string;
}
export interface GetUserResponse {
  userRecord: UserRecord;
}
export type GetUserFunction = (
  data: GetUserRequest
) => Promise<GetUserResponse>;
