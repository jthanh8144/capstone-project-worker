# Safe Talk Worker

## Socket deploy

- [Develop](https://safe-talk-socket-dev.jthanh8144.studio/)
<!-- - [Staging](https://safe-talk-socket-staging.jthanh8144.studio/) -->
- [Production](https://safe-talk-socket.jthanh8144.studio/)

## Install steps

1. Install dependencies
```
yarn install --frozen-lockfile
```

2. Create `.env` file
```
cp example.env .env
```

3. Fill config for database, mail service, Redis and Firebase to `.env` file.

4. Build source
```
yarn build
```

5. Run back-end service
```
yarn start
```

## Prepare

- Create a `.env` file from the `.env.example` file

  ```
  cp example.env .env
  ```
  Fill config for database, mail service, minIO, Redis and Firebase.

- Install package

  ```
  npm ci --frozen-lockfile
  ```
  or with yarn
  ```
  yarn install --frozen-lockfile
  ```

- Build source

  ```
  npm run build
  ```
  or with yarn
  ```
  yarn build
  ```

## Local (For DEV)

- Environment

  ```
  node v16+
  ```

- Docker commands

  - Build & run all container

    ```
    docker-compose up --build
    ```

  - Run all container
    ```
    docker-compose up
    ```
  - Run a container
    ```
    docker-compose up <service_name>
    ```
  - Exec

    ```
    docker exec -it <service_name> sh
    ```

# Convention

- [Git Branch Convention](./docs/git-branch-convention.md)
- [Code Convention](./docs/code-convention.md)

# Architect

- [Project Structure](./docs/project-structure.md)
