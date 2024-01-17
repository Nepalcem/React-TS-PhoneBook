export interface ContactObject {
    id?: number;
    name: string;
    number: string;
}

export interface AuthorizationInterface {
  user: { name: string | null; email: string | null };
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}