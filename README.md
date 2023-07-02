# NEST - Suport web

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
> Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You also can run the components library:

```bash
npm storybook
# or
yarn storybook
# or
pnpm storybook
```
> Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

And also can run Prisma (database) client:

```bash
npm prisma studio
# or
yarn prisma studio
# or
pnpm prisma studio
```
> Open [http://localhost:5555/](http://localhost:5555/) with your browser to see the result.

## Utils
Check for lint errors:
```bash
npm lint-check
# or
yarn lint-check
# or
pnpm lint-check
```
Lint the code:
```bash
npm lint-run
# or
yarn lint-run
# or
pnpm lint-run
```
Check for typescript errors:
```bash
npm tscheck
# or
yarn tscheck
# or
pnpm tscheck
```
Check for typescript errors:
```bash
npm tscheck
# or
yarn tscheck
# or
pnpm tscheck
```
Open software test:
```bash
npm cypress
# or
yarn cypress
# or
pnpm cypress
```

## Packages used
- [**React:**](https://react.dev/) React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
- [**Typescript:**](https://www.typescriptlang.org/) TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.
- [**Next:**](https://nextjs.org/) Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
- [**Tailwind:**](https://tailwindcss.com/) A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup
- [**Storybook:**](https://storybook.js.org/) Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It’s open source and free.
- [**Material UI:**](https://mui.com/) MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.
- [**ESLint:**](https://eslint.org/) ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.
- [**Redux Toolkit:**](https://redux-toolkit.js.org/) Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.
- [**Prettier:**](https://prettier.io/) Prettier is an opinionated code formatter with support for many languages, it removes all original styling* and ensures that all outputted code conforms to a consistent style. (See this blog post)
- [**Nookies:**](https://www.npmjs.com/package/nookies) A collection of cookie helpers for Next.js
- [**React hook form:**](https://react-hook-form.com/) React Hook Form is one such library that helps to manage complex forms. It has excellent performance, is super lightweight, has zero dependencies, can be easily integrated
- [**Zod:**](https://zod.dev/) Zod is a TypeScript-first schema declaration and validation library. I'm using the term "schema" to broadly refer to any data type, from a simple string to a complex nested object.
- [**Prisma:**](https://www.prisma.io/) Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.
- [**Json web token:**](https://www.npmjs.com/package/jsonwebtoken) An implementation of JSON Web Tokens.
- [**BCrypt:**](https://www.npmjs.com/package/bcrypt) A library to help you hash passwords.
- [**Axios:**](https://axios-http.com/ptbr/docs/intro) Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
- [**Cypress:**](https://www.cypress.io/) Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.

## Tarefas

- [X] Utilização de `use client` em `app/layout.tsx`
- [X] Estudar `server component` e `client component`
- [x] Inserir comando para o prettier
- [x] Formulários avançados
- [X] Banco de dados com ORM
- [X] API's
- [X] Carregamento de página
- [x] API de autenticação
- [X] Autenticação por rota
- [ ] Implementar testes automatizados
- [ ] Implementar dotenv-safe
- [ ] Skeleton
- [ ] Ajustar o título/descrição das páginas com title layout
- [ ] ~~Tema da aplicação no Storybook~~