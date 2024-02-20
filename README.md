# Voiceflow Interview Fullstack Project 💬

Welcome to Voiceflow's Frontend Project!

Congrats on making it to this part of the interview process. 🥳

The goal of this project is to look into an existing codebase and understanding how to optimize and improve it in terms of performance and code quality.

The frontend and backend were intentionally written with many issues. Please be opinionated and make as many drastic changes as you want as long as requirements are met.

The state of this codebase does not at all represent the standard and quality of the actual Voiceflow codebase 😅.

## Setup 📦

Make sure you have [Node.js](https://nodejs.org/) and [yarn](https://yarnpkg.com/) on your computer.

Clone this repository **(keep your repo private)**.

> to install all dependencies (node_modules) :

```
yarn install
```

> to start the frontend and backend servers :

```
yarn dev
```

# Overview ℹ️


# Requirements

- do not write tests or add test suites (keep the scope of the project down)
- you can add any third party libraries
- the types in core-lib can not be changed, they represent the database format

### frontend
- must use exclusively react as framework
- CSS styling can change, but all functionality must be preserved. No extra points for looking nice!
- all intent state must be reflected in redux as source of truth
- redux heartbeat interval and action must be preserved

### backend
- must use nestJS + express as framework
- must read/write data to the `*.database.json` file as source of truth
	- assume there are other clients interacting with the same data
- the format of the `*.database.json` must be preserved, typings must stay the same
- do not commit any changes to `*.database.json`

# Tips 📝

Unless you get fancy and go off the rails (which isn't a bad thing 👍) this project takes around ~1-3 hours if you are familiar with the stack. Keep in mind this isn't a race to get it done - it's about getting it done well.

- use Typescript proficiently
- use repeatable, scalable patterns
- make modular, nicely separated components
- account for edge cases
- manage sensitive data securely
- manage data passing properly
- set up a good build process

# Submission

Send the link to your working repository to your recruiter's email. 

--- 

Credit to [nishkohli96/react-node-ts-monorepo](https://github.com/nishkohli96/react-node-ts-monorepo) for providing the base template.
