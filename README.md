# Computer Education Backend

A Node.js backend API for managing users, tasks, subtasks, questions, options, and user scores, using Express and MongoDB (Mongoose).

## Folder Architecture

```
computer-education-backend/
├── server.js
├── package.json
├── .env.example
├── .gitignore
├── src/
│   ├── app.js
│   ├── config/
│   │   └── dbConnect.js
│   ├── controllers/
│   │   ├── optionsController.js
│   │   ├── questionsController.js
│   │   ├── subtasksController.js
│   │   ├── tasksController.js
│   │   ├── userScoresController.js
│   │   └── usersController.js
│   ├── models/
│   │   ├── Option.js
│   │   ├── Question.js
│   │   ├── SubTask.js
│   │   ├── Task.js
│   │   ├── User.js
│   │   └── UserScore.js
│   └── routes/
│       ├── index.js
│       ├── optionsRoutes.js
│       ├── questionsRoutes.js
│       ├── subtasksRoutes.js
│       ├── tasksRoutes.js
│       ├── userScoresRoutes.js
│       └── usersRoutes.js
```

## Main Libraries Used

- [express](https://www.npmjs.com/package/express): Web framework for Node.js
- [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool
- [cors](https://www.npmjs.com/package/cors): Middleware for enabling CORS
- [nodemon](https://www.npmjs.com/package/nodemon): Development utility for auto-restarting the server
- [side-channel](https://www.npmjs.com/package/side-channel): Utility for side-channel data (dependency)

## Getting Started

1. Copy `.env.example` to `.env` and set your MongoDB connection string.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm run dev
   ```
   or
   ```
   npm start
   ```

## API Structure

The API exposes endpoints for:
- Users (`/users`)
- Tasks (`/tasks`)
- Subtasks (`/subtasks`)
- Questions (`/questions`)
- Options (`/options`)
- User Scores (`/userScores`)

Each resource supports standard CRUD operations.

---