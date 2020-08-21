# COUNT VISITS

- counting visits on our site using an in memory storage service called redis.

## Build Image

```
> docker build -t meyash/counts .
```

## Run a redis server
```
> docker run redis
```

## Networking

- Setup networking between these 2 containers
- Using Docker Compose is best method

## Docker Compose

- Used to start multiple containers at same time.
- Automates the complicated connection, mapping parts.

## Run docker image

```
> docker run -p 8080:8080 meyash/counts
```
