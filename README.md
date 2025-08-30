# deu.tz labs

**Labs is a repository dedicated to exploration, prototyping, and documenting experiments. It serves as a safe environment to validate ideas before they evolve into production-ready projects. Each entry in Labs is both an archive and a stepping stone.**

## Experiment Index

### P5js & toxiclibs based physics simulation

#### Features

- UI for physics settings
- Mouse interactable

#### Disclaimers

- Barely responsive
- Some physics settings break the sim which requires a page reload

----

## Repo structure and deploy workflow

```mermaid
flowchart TD
 subgraph Repo["Project Repository"]
    direction TB
        Hub(["Astro Hub"])
        Experiments(["Experiments / Subprojects"])
        Config["Biome Config + Shared Tooling"]
  end
 subgraph CI["CI/CD Pipeline"]
        Lint["Biome Lint/Format"]
        BuildExp["Build Experiments"]
        BuildHub["Build Astro Hub"]
        Manifest["Generate Build Manifest"]
        Deploy["Deploy to Cloudflare Pages"]
  Lint --> BuildExp
  BuildExp --> BuildHub
  BuildHub --> Manifest
  Manifest --> Deploy
  end
    Repo --> CI
    CI --> Hosting["Cloudflare Pages Hosting"]
    Hosting --> User["End Users"]
    Experiments --> Hub
    Config --> Hub & Experiments
    Config@{ shape: rounded}
    User@{ shape: diam}
```
