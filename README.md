# Requirement
 - [FullStackEngineerChallenge](https://github.com/dang1412/FullStackEngineerChallenge)

# Features
 - Login client side only with username in localStorage
 - Admin accessible without login, be able to
   - View list of employees
   - Add new employee
   - Assign/remove reviewers to a specific employee, and check review results in the same page
 - View and update (comment, star rating) list of needed feedback reviews assigned to current employee (require login)

# Techs
 - [Typescript](https://www.typescriptlang.org/)
 - Use [NextJs](https://nextjs.org/) as fullstack nodejs framework:
   - [Mongoose](https://mongoosejs.com/) mongodb object modeling for nodejs
   - Express like restful api at backend
   - React with functional component and hook at frontend
   - Use [material-ui](https://material-ui.com/) as UI framework
- MongoDB

# Database
 - users: (list of employees)
   - name: string (unique)
   - role: 'Frontend' | 'Backend' | 'Ios' | 'Android'
   - des: string
   - isAdmin: boolean
 - reviews: (list of reviews)
   - reviewee: string (receive feedback employee)
   - reviewer: string (provide feedback employee)
   - point: number (1-5, star rating)
   - comment: string

# Implementation
Folder structure
 - components: client side reusable react component
 - fetch: client side api request functions using [isomorphic-unfetch](https://github.com/developit/unfetch)
 - page: special folder by nextjs one-file/one-route (1 page)
   - admin/reviewer/[name].tsx: `/admin/reviewer/[name]` page, assign reviewers and view reviews for `[name]` employee
   - admin/[userId].tsx: `/admin/userId`, update employee info
   - admin/add.tsx: `/admin/add`, add new employee
   - admin/index.tsx: `/admin`, list employees
   - index.tsx: `/`, home page
   - login.tsx: `/login`, login page
   - review.tsx: `/review`, list and update needed feedback reviews for current user (employee)
   - **api**: another special folder by NextJs, defines server restful api one-file/one-api
 - server
   - index.js: run next custom server with mongoose
   - handlers: server handler implementation for *page/api/*
   - models: defines mongoose model for *user* and *review*
 - types: defines interface for *user* and *review*, used both by client and server

# Run
```
npm i
npm run dev
```

# TODO
 - Unit test with [Jest]()
 - React component isolated test with [storyBook]()
 - e2e test with [TestCafe]()
 - ci