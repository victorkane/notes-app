# Note taking app with Pocketbase

## Ref

- [YT Beyond Fireship 2022-11-01 Next.js 13 - The Basics](https://youtu.be/__mSgDEOyv8?si=VicSUiR8K0Mcpib2)
- [GH Completed Course Code fireship-io / next13-pocketbase-demo](https://github.com/fireship-io/next13-pocketbase-demo)
- [PocketBase](https://pocketbase.io/)

## 2023-10-07 09:45

### Create project

```bash
ictor@victorpc:dev$ npx create-next-app@latest --ts notes-app
Need to install the following packages:
  create-next-app@13.5.4
Ok to proceed? (y) y
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /home/victor/Work/Learn/NextJS/NextJS-2023/Fireship/2023/2022-11-01-next-13-the-basics/dev/notes-app.

Using npm.

Initializing project with template: app


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next


added 279 packages, and audited 280 packages in 23s

105 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Initialized a git repository.

Success! Created notes-app at /home/victor/Work/Learn/NextJS/NextJS-2023/Fireship/2023/2022-11-01-next-13-the-basics/dev/notes-app

victor@victorpc:dev$ pwd
/home/victor/Work/Learn/NextJS/NextJS-2023/Fireship/2023/2022-11-01-next-13-the-basics/dev
```

### Install and run PocketBase

- Go to [PocketBase Docs](https://pocketbase.io/docs/) and [download for Linux in my case](https://github.com/pocketbase/pocketbase/releases/download/v0.18.9/pocketbase_0.18.9_linux_amd64.zip) the executable and place it in the project document root

```bash
victor@victorpc:notes-app$ chmod +x pocketbase
victor@victorpc:notes-app$ ls -l
total 45520
drwxrwxr-x   2 victor victor     4096 Oct  7 09:42 app
-rw-rw-r--   1 victor victor       92 Oct  7 09:42 next.config.js
-rw-rw-r--   1 victor victor      201 Oct  7 09:42 next-env.d.ts
drwxrwxr-x 254 victor victor    12288 Oct  7 09:42 node_modules
-rw-rw-r--   1 victor victor      469 Oct  7 09:42 package.json
-rw-rw-r--   1 victor victor   131557 Oct  7 09:42 package-lock.json
-rwxr-xr-x   1 victor victor 46436352 Sep 30 03:44 pocketbase
drwxrwxr-x   2 victor victor     4096 Oct  7 09:42 public
-rw-rw-r--   1 victor victor     3192 Oct  7 09:53 README.md
-rw-rw-r--   1 victor victor      595 Oct  7 09:42 tsconfig.json

```

- Run pocketbase in a vs code terminal (probably, or a separate one)

```bash
victor@victorpc:notes-app$ ./pocketbase serve
2023/10/07 09:59:43 Server started at http://127.0.0.1:8090
├─ REST API: http://127.0.0.1:8090/api/
└─ Admin UI: http://127.0.0.1:8090/_/
```

- Point the browser to [Admin UI](http://127.0.0.1:8090/_/)
- Provide admin user email and password
- Add a new collection
  - collection `posts`
  - text field: title
  - text field: content
- Since the database is secure by default, we need to goto API permissions and make all the operations public for now
- Click on Create to create the collection

### Atomic commits

- Step by step commits follow the development of the note-taking app

### Additional notes

#### Components are Server Components by default

> Components are `Server Components` by default... they are rendered on the server... we can do data fetching directly inside of them with asynchronous functions

- right in the component itself (example is the `notes/page.tsx` component `NotesPage`!
  ``

#### ISR

- On individual page routing with `next: { revalidate: 10 }`
- See commit

```bash
commit 5a0a7ae2dbb3efb0a80f21c70b99b830c3aadc0a (HEAD -> main, origin/main)
Author: victorkane <victorkane@gmail.com>
Date:   Sat Oct 7 14:38:22 2023 -0300

    add additional routing to parameterized individual note page

 app/notes/[id]/page.tsx | 27 +++++++++++++++++++++++++++
 1 file changed, 27 insertions(+)
```

- To pre-render pages use the `generateStaticParams()` function, which replaces pre-Next.js 13 `getStaticPaths`.

#### Manage Loading State and UI between routes

- use a `loading.tsx` page
- in a similar vein, use an `error.tsx` page to show errors occurring while navigating to a route.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
