export interface User {
  firstName: string;
  email: string;
  photoURL?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}