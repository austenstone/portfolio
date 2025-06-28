---
slug: highlight-js-test
title: Testing Highlight.js Integration
authors: [austen]
tags: [test, syntax-highlighting, highlight.js]
---

# Testing Dual Syntax Highlighting

This blog post demonstrates the dual syntax highlighting system: Prism (default) and Highlight.js (with `hljs` flag).

## Prism (Default) - TypeScript Example

```ts title="example.ts"
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserService {
  private users: User[] = [];

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      id: Math.random(),
      ...userData
    };
    
    this.users.push(newUser);
    return newUser;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}

export { UserService, type User };
```

## Highlight.js (with hljs flag) - TypeScript Example

```ts hljs title="example-hljs.ts"
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserService {
  private users: User[] = [];

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      id: Math.random(),
      ...userData
    };
    
    this.users.push(newUser);
    return newUser;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}

export { UserService, type User };
```

## Prism - JavaScript Example

```javascript title="component.js"
import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h2>{user?.name || 'Unknown User'}</h2>
      <p>Email: {user?.email}</p>
      <span className={`status ${user?.isActive ? 'active' : 'inactive'}`}>
        {user?.isActive ? 'Active' : 'Inactive'}
      </span>
    </div>
  );
};

export default UserProfile;
```

## Highlight.js - JavaScript Example

```javascript hljs title="component-hljs.js"
import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h2>{user?.name || 'Unknown User'}</h2>
      <p>Email: {user?.email}</p>
      <span className={`status ${user?.isActive ? 'active' : 'inactive'}`}>
        {user?.isActive ? 'Active' : 'Inactive'}
      </span>
    </div>
  );
};

export default UserProfile;
```

## Comparison

- **Prism (default)**: All code blocks without the `hljs` flag use Prism
- **Highlight.js**: Only code blocks with the `hljs` flag use Highlight.js with GitHub styling
- Both support light/dark theme switching
- You can choose the best highlighter for each specific code block
