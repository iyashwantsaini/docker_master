# COUNT VISITS

- counting visits on our site using an in memory storage service called redis.
- we need 2 conatiners here
  - nodejs
  - redis

## Build Image

```
> docker build -t meyash/counts .
```

## Run a redis server

```
> docker run redis
```

## Run docker image

```
> docker run -p 8080:8080 meyash/counts

But this will show error -/
```

## Networking

- Setup networking between these 2 containers
- Using Docker Compose

## Docker Compose

- Used to start multiple containers at same time.
- Automates the complicated connection, mapping parts.
- all these services/containers are on same network for info exchange

## Run Container

```
> docker-compose up
```

Rebuilding Image (when files changed)

```
> docker-compose up --build
```

## Localhost

```
GoTo : localhost:8080
```

## Commands

- Launch in background

```
> docker-compose up -d
```

- Stopping Containers

```
> docker-compose down
```

- view running composes

```
> docker-compose ps
```

## Restarting Containers Automatically

- setting up restart policy
- types of restart policies
  - "no"
  - always
  - on-failure
  - unless-stopped
- useful in any crash