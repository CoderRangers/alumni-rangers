export type TokenType = {
    access_token: string
};

export type TokenInfoType = {
    id: number;
    email: string;
    internId: string;
    iat?: number;
    exp?: number;
  };