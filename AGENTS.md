# Vendure Demo Project Instructions

This project follows the Vendure 3.7 CLI project layout.

## Project Layout

- Custom backend code belongs in `src/plugins`.
- Runtime configuration is in `src/vendure-config.ts`.
- Static assets and email templates live in `static`.
- The demo reset and seed workflow is in `src/reset-server.ts` and is invoked by `src/prepare-server.ts`.

## Vendure Development

- Prefer implementing custom functionality as a Vendure plugin.
- Use `npx vendure add` to scaffold plugins, entities, services, API extensions, and job queues.
- Read environment variables in `vendure-config.ts` and pass values into plugins through `Plugin.init()` options.
- Create job queues in `onModuleInit()` or `onApplicationBootstrap()`, then reuse the queue when adding jobs.
- Pass `RequestContext` to Vendure services and `TransactionalConnection` methods when it is available.
- Do not commit `.env` values or generated runtime data.
- Do not use `dbConnectionOptions.synchronize: true` for production data.

## Commands

- Start development: `npm run dev`
- Start readonly mode: `npm run dev:readonly`
- Start public mode: `npm run dev:public`
- Build: `npm run build`
- Run diagnostics: `npm run doctor`

## Demo Reset Workflow

- `npm run dev` runs `npm run prepare:demo` before `vendure dev all`.
- `npm run start` runs `npm run prepare:demo:prod` before `vendure start all`.
- Do not run `vendure dev all` or `vendure start all` directly unless the database and assets have already been prepared.

## Quality Checks

- Run `npm run build` after changing backend or dashboard code.
- Run `npm run doctor -- --format json` when changing project setup or dependencies.
- Run targeted tests for the package or feature you changed.
