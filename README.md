<p align="center">
  <a href="https://vendure.io">
    <img alt="Vendure logo" height="60" width="auto" src="https://assets.vendure.io/brand/logo-icon-vendure-blue.svg">
  </a>
</p>

<h1 align="center">
  Vendure Public Demo
</h1>
<h3 align="center">
  A resettable public demo built on the open-source headless commerce platform.
</h3>
<h4 align="center">
  Plugin-first, TypeScript end to end: a Node.js, NestJS, and GraphQL backend with a React and TanStack admin dashboard.
</h4>
<h4 align="center">
  <a href="https://docs.vendure.io">Documentation</a> |
  <a href="https://vendure.io">Website</a>
</h4>

<p align="center">
  <a href="https://github.com/vendurehq/vendure/blob/master/LICENSE.md">
    <img src="https://img.shields.io/badge/license-GPLv3-blue.svg" alt="Vendure is released under the GPLv3 license." />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=vendure_io">
    <img src="https://img.shields.io/twitter/follow/vendure_io" alt="Follow @vendure_io" />
  </a>
  <a href="https://vendure.io/community">
    <img src="https://img.shields.io/badge/join-our%20discord-7289DA.svg" alt="Join our Discord" />
  </a>
  <a href="https://github.com/vendurehq/vendure/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome." />
  </a>
</p>

## What is Vendure?

[Vendure](https://vendure.io) is an open-source headless commerce platform for building catalog, order, pricing, promotion, customer, and channel workflows on a customizable TypeScript backend.

- **Plugin-first architecture**: Extend the platform with plugins, custom entities, service overrides, and API extensions without forking Vendure core.
- **One backend, every channel**: Serve storefronts, marketplaces, B2B flows, and operations tooling from the same GraphQL API.
- **TypeScript end to end**: Build on Node.js, NestJS, GraphQL, and the React and TanStack based Vendure Dashboard.
- **Commerce primitives included**: Products, variants, orders, customers, channels, tax, shipping, payments, promotions, stock, and assets are available out of the box.

## About this demo

This repository contains the project used as the basis for the public shared Vendure demo. It follows the Vendure 3.7 CLI project layout and includes the server, worker, Dashboard, static assets, email templates, seed data, and reset workflow needed to keep the demo instance fresh.

The reset flow is handled by `src/prepare-server.ts` and `src/reset-server.ts`. The `npm run prepare:demo` script populates the server with Vendure's populate helper, caches the pristine generated data, and restores that cached data when the demo needs to be reset.

## Running locally

Install dependencies first:

```bash
npm ci
```

Start the server, worker, and Dashboard together:

```bash
npm run dev
```

`npm run dev` runs `npm run prepare:demo` before starting Vendure, so the database and demo assets are prepared automatically.

The demo tenant modes are also available:

```bash
npm run dev:readonly
npm run dev:public
```

Build and run the compiled project:

```bash
npm run build
npm run start
```

`npm run start` runs `npm run prepare:demo:prod` before starting the compiled server, worker, and Dashboard.

## Project commands

The project exposes the Vendure lifecycle commands through npm scripts:

```bash
npm run dev:server
npm run dev:worker
npm run dev:dashboard
npm run build:server
npm run build:worker
npm run build:dashboard
npm run start:server
npm run start:worker
npm run doctor
```

Run `npm run doctor -- --format json` when changing project setup or dependencies.

## Running in Docker

Build the demo image:

```bash
docker build -t vendure-demo .
```

Run the container:

```bash
docker run --name vendure -p 3000:3000 -d vendure-demo
```

The container runs `npm run start`, which prepares the demo data before starting Vendure.

## Learn more

- [Vendure documentation](https://docs.vendure.io)
- [Getting started guide](https://docs.vendure.io/guides/getting-started/installation/)
- [Vendure source repository](https://github.com/vendurehq/vendure)
- [Vendure community](https://www.vendure.io/community)
