import { UserRecord } from "./user";

export interface BattleRequest {
  uuid: string;
}
export interface BattleResponse {
  userRecord: UserRecord;
  otherUserRecord: UserRecord;
  winnerUserRecord: UserRecord;
  loserUserRecord: UserRecord;
  message: string;
}
export type BattleFunction = (data: BattleRequest) => Promise<BattleResponse>;
