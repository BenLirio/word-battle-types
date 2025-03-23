import { UserRecord } from "./user";

export interface ListTopUsersRequest {
  leaderboard?: string;
}
export interface ListTopUsersResponse {
  userRecords: UserRecord[];
}
export type ListTopUsersFunction = (
  data: ListTopUsersRequest
) => Promise<ListTopUsersResponse>;
