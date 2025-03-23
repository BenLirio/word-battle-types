export interface UserRecord {
  uuid: string;
  username: string;
  word: string;
  elo: number;
  leaderboard?: string;
}
