import { UserRecord } from "./user";

export interface ListTopUsersRequest {}
export interface ListTopUsersResponse {
  userRecords: UserRecord[];
}
export type ListTopUsersFunction = (
  data: ListTopUsersRequest
) => Promise<ListTopUsersResponse>;
