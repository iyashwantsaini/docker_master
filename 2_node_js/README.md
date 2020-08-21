# NODE

- ALPINE : smallest/lightest version possible

## package.json not found?

- as these are not available inside node container
- we have to expicitely specify where these are using COPY

## COPY

```
COPY <from_in_os> <to_in_container>

COPY ./ ./
```

## Building

Successfully built 7e3585827b1f

```
> docker build -t meyash/nodejs .
```

```
> docker run meyash/nodejs
Listening on PORT 8080!
```

* But Container is not mapped to port of our device
* So we have to modify the Docker RUN command with PORT mappings

```
> docker run -p <port_in_os> : <port_in_container> <img_id>

> docker run -p 8080 : 8080 meyash/nodejs
```

Goto Browser : localhost:8080


## Debugging in Shell

```
> docker run -it meyash/nodejs sh
# ls
DockerFile         etc                media              package-lock.json  run                tmp
README.md          home               mnt                package.json       sbin               usr
bin                index.js           node_modules       proc               srv                var
dev                lib                opt                root               sys
```

- Copying to container's ROOT is not best practice
- So setup a working directory in container
- Every path will be relative to that directory now

```
WORKDIR /usr/app
```

## Rebuilds

- currently our configuration does not support hot reloads.
- you have to rebuild again and again to see changes.
