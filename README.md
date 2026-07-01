<p align="center">
  <a href="https://vendure.io">
    <img alt="Vendure logo" height="60" width="auto" src="https://a.storyblok.com/f/192301/252x200/c6608214a9/brand-icon-primary.svg">
  </a>
</p>

<h1 align="center">
  Vendure Public Demo
</h1>
<p align="center">
    This is a demo project used as the basis for the public shared Vendure demo.
</p>

<p align="center">
  <a href="https://vendure.io/community">
    <img src="https://img.shields.io/badge/join-our%20discord-7289DA.svg" alt="Join our Discord" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=vendure_io">
    <img src="https://img.shields.io/twitter/follow/vendure_io" alt="Follow @vendure_io" />
  </a>
</p>


This is a demo project used as the basis for the online Vendure demo. The `npm run prepare:demo` script populates the server using Vendure's populate helper, and then caches the generated pristine data. Every day, this cached data is restored to reset any changes which have been made to the server instance in that time.

## Running Locally

To run locally, install dependencies with `npm` and then start the server, worker, and Dashboard with:

```bash
npm run dev
```

The demo tenant modes are still available:

```bash
npm run dev:readonly
npm run dev:public
```

To build and run the compiled project:

```bash
npm run build
npm run start
```

The project also exposes the Vendure 3.7 lifecycle commands through `dev:server`, `dev:worker`, `dev:dashboard`, `build:server`, `build:worker`, `build:dashboard`, `start:server`, and `start:worker`.

## Running in Docker

There is a bundled Dockerfile which allows the app to be run in a Docker container.

```bash
docker build -t vendure-demo .
```

```bash
docker run --name vendure -p 3000:3000 -d vendure-demo
```
