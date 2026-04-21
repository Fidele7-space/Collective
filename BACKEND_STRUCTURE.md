# Backend File Structure for Collective Intelligence Dashboard

This directory contains the backend for the Collective Intelligence Dashboard, organized into models, routes, middleware, and services.

## Structure:

```
collective/
│
├── models/
│   ├── userModel.js
│   ├── postModel.js
│   └── commentModel.js
│
├── routes/
│   ├── userRoutes.js
│   ├── postRoutes.js
│   └── commentRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
└── services/
    ├── userService.js
    ├── postService.js
    └── commentService.js
```

### Description:
- **models/**: Contains Mongoose models for database schemas.
- **routes/**: Contains route definitions for handling API requests.
- **middleware/**: Custom middleware for authentication and error handling.
- **services/**: Contains business logic and interactions with the models.