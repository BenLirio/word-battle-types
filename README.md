# Shared TypeScript Types

This package contains shared TypeScript types for use in both frontend and backend applications.

## Installation

```bash
npm install your-package-name
```

## Usage

```typescript
import { User, LoginResponse, ApiResponse } from 'your-package-name';

// Use the types in your code
const user: User = {
  id: '123',
  email: 'user@example.com',
  createdAt: new Date(),
  updatedAt: new Date()
};
```

## Available Types

- `User`: User profile information
- `AuthToken`: Authentication token details
- `LoginResponse`: Response from login endpoint
- `ApiResponse<T>`: Generic API response wrapper

## Development

1. Make changes to types in `src/`
2. Build: `npm run build`
3. Publish: `npm publish`
