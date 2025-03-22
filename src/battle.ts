import { UserRecord } from "./user";

export interface BattleRequest {
  uuid: string;
}
export interface BattleResponse {
  userRecord: UserRecord;
  otherUserRecord: UserRecord;
  winnerUserRecord: UserRecord;
  loserUserRecord: UserRecord;
  eloChange: number;
  message: string;
  timestamp: number;
}
export type BattleFunction = (data: BattleRequest) => Promise<BattleResponse>;
