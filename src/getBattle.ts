import { UserRecord } from "./user";

export interface GetBattleRequest {
  uuid: string;
}
export interface GetBattleResponse {
  userRecord: UserRecord;
  otherUserRecord: UserRecord;
  winnerUserRecord: UserRecord;
  loserUserRecord: UserRecord;
  eloChange: number;
  message: string;
}
export type GetBattleFunction = (
  data: GetBattleRequest
) => Promise<GetBattleResponse>;
