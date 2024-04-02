export interface CheckRefreshToken {
  execute: (userId: string, refreshToken: string) => Promise<boolean>;
}
