export type AccountType = {
  id: number;
  email: string;
  password: string;
  role: 'intern' | 'admin';
  isActivated: boolean;
};
