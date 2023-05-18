## Dev-Social

#### By: Jacob Maier
[Live-Site]() 
<hr>

### Description 

This is a social media site where you can create a profile and update the info by creating a bio and add a profile and banner image. Post ideas and interact with other users post via likes, comments and following users or your choice. Additionally when someone interacts with your post or follows, you will recieve notifications. All posts are track in order by time posted and Users by join date.

### Technologies

- Nextjs
- TypeScript
- Tailwind CSS
- Prisma
- NextAuth
- MongoDB
- Node

<hr>

## Project MVP Features

- User Authentication ✔️
- POST / GET / PUT w/comments, replies and likes ✔️
- User can create an account with custom bio, user image and banner ✔️

<hr>

## Stretch Goals

- DELETE functionality (BUG: Some exists but errors keep showing up after other changes)
- Error Handling (react-hot-toast) ✔️
- Follow users ✔️
- Auth for creating new content and interacting with other users ✔️
- Add images to posts
- Add Following tags to certain topics
- Have dedicated page for help requests/offers
- Add A learning section linking to lessons based on different subjects
- Order certain topics based on user interaction
<hr>

## Setup Requirements

Clone this repo to your local machine by inputting the following into your terminal.
* _NOTE:_ If you do not already have git installed you can follow [THIS](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) tutorial.
```shell
`git clone https://github.com/jamaier/Capstone.git`
```

Next - Install packages:
```shell
npm install
# or
npm i
```
* _NOTE:_ If you do not already have Node installed you can do so [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
 
<hr>

## Getting Started

Setup your database and connection URL via MongoDB [HERE](https://www.mongodb.com/atlas/database).

In the Root folder create your environment variable file named `.env`.
```bash
# optionally, use terminal command to create env file from root folder
touch .env
``` 

Initialize Prisma
```bash
npx prisma generate
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

#### _NOTE: Routes with file names contained in brackets are dynamic routing so you will need to know the IDs of the route you are trying to reach._

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on -

- [http://localhost:3000/api/register](http://localhost:3000/api/register). This endpoint can be edited in `pages/api/register.ts`.
- [http://localhost:3000/api/current](http://localhost:3000/api/current). This endpoint can be edited in `pages/api/current.ts`.
- [http://localhost:3000/api/edit](http://localhost:3000/api/edit). This endpoint can be edited in `pages/api/edit.ts`.
- [http://localhost:3000/api/comments](http://localhost:3000/api/comments). This endpoint can be edited in `pages/api/comments.ts`.
- [http://localhost:3000/api/follow](http://localhost:3000/api/follow). This endpoint can be edited in `pages/api/follow.ts`.
- [http://localhost:3000/api/like](http://localhost:3000/api/like). This endpoint can be edited in `pages/api/like.ts`.
- [http://localhost:3000/api/users/index](http://localhost:3000/api/users/index). This endpoint can be edited in `pages/api/users/index.ts`.
- [http://localhost:3000/api/posts/index](http://localhost:3000/api/posts/index). This endpoint can be edited in `pages/api/posts/index.ts`.
- [http://localhost:3000/api/users/notifications/[userID]](http://localhost:3000/api/users/notifications/[userID]). This endpoint can be edited in `pages/api/users/notifications/[userID].ts`. <= (Example of dynamic rout)


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Known Bugs

- _Can only show one user your following but DB has linkedIds_
- _Cannot remove like from post once liked_
- _Cannot remove follow from user_

If any more bugs are found please feel free to contact me a [jacobamaier@gmail.com](mailto:jacobamaier@gmail.com)

## Licence

_MIT_ 

_Copyright_ _Jacob Maier_ _2023_