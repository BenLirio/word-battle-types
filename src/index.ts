// User related types
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Authentication related types
export interface AuthToken {
  token: string;
  expiresAt: Date;
}

export interface LoginResponse {
  user: User;
  auth: AuthToken;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}
