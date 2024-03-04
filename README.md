# Voiceflow Interview Fullstack Project 💬

Welcome to Voiceflow's Fullstack Project!

Congrats on making it to this part of the interview process. 🥳

The goal of this project is to look into an existing codebase and understanding how to optimize and improve it in terms of performance and code quality.

The frontend and backend were intentionally written with many issues and poor performance. Please be VERY opinionated and make as many drastic changes as you want as long as requirements are met.

The state of this codebase does not at all represent the standard and quality of the actual Voiceflow codebase 😅. I apologize ahead of time for the application being so ugly and badly written.

Please try to aim for around 3 hours to complete this task, if you feel strongly about anything you can take the additional time that you are comfortable with.

<img width="812" alt="Screenshot 2024-02-20 at 4 33 56 PM" src="https://github.com/voiceflow/creator-app/assets/5643574/a2a2afa5-c4d0-4115-9b06-b8747092401f" />

## Setup 📦

Make sure you have [Node.js](https://nodejs.org/) and [yarn](https://yarnpkg.com/) on your computer.

Clone this repository **(keep your repo private)**.

> to install all dependencies (node_modules), and build typings :

```
yarn install

cd packages/core-lib
yarn lib:build
```

> to start the frontend and backend servers :

```
yarn dev
```

# Overview ℹ️
You are creating an content management system for intents, which are actions a customer could take.
Each action comes with a name, description, and utterances - which are example phrases for the intent.

You are inheriting a project created by a previous developer.
Unfortunately, it is mandated from higher powers that your database HAS to be a static JSON file, and the format has to stay the same.
The frontend function has to remain the same:
- be able to view all intents in a single, scrollable, list
- be able to edit intent name and description
- perform CRUD operation on intent utterances

However users are reporting massive issues with the app:
- It is very slow to load
- It lags their computer when they scroll
- Editing anything is laggy, sometimes the text is inconsistent when typing in the middle
- Larger sets of intents are causing the entire app to crash

Your job is to take this existing codebase and optimize it for a better user experience.
You are free to edit anything in the frontend and backend, as long as the requirements are met.

There are two data sets in `apps/backend`: `db-small` (1000 intents) and `db-large` (100000 intents).
Once `db-small` is working it is recommended that you try and see if you can optimize for `db-large` as well.
To switch over, just edit `apps/backend/config.ts`.

# Requirements

- tests *are not* required (keep the scope of the project down)
- you can add or use any third party libraries
- the types in core-lib can not be changed, they represent the database format

### frontend
- must use exclusively react as framework
- CSS styling can change, but the existing HTML DOM element structure of all list items must be preserved. No extra points for looking nice!
	- this does not apply to the React Virtual DOM, feel free to compose React however you want
	- functionality should stay consistent, such as infinite scrolling.
- all intent state must be reflected in **redux** at some point as source of truth, even if you decide to use other state management.
	- it is okay if the update to the redux state is delayed or deferred, but it must be eventually consistent
	- pretend there is a library that syncs your redux state with others for realtime collaboration
	- the typing/shape of the Redux state can not change, but anything else including reducers, thunks, actions, etc can be changed.

### backend
- must use nestJS + express as framework
- must read/write data to the `*.database.json` file as source of truth
	- assume there are other clients interacting with the same data
- the format of the `*.database.json` must be preserved, typings must stay the same
- do not commit any changes to `*.database.json`

# Submission

Send the link to your working repository to your recruiter's email. 

Add the following Github accounts to your private repo:
- **decathectzero**
- **effervescentia**
- **z4o4z**

--- 

Credit to [nishkohli96/react-node-ts-monorepo](https://github.com/nishkohli96/react-node-ts-monorepo) for providing the base template.
