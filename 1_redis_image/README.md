# REDIS

- Creating image that runs redis-server

## Instructions

    - FROM arg (specify base img) 
    - RUN arg (execute some command while building img)
    - CMD arg (run this when container starts)


## Running Command

```
> docker build .

Sending build context to Docker daemon  3.072kB
Step 1/3 : FROM alpine
 ---> a24bb4013296
Step 2/3 : RUN apk add --update redis
 ---> Running in c1a2b6b5a3e5
fetch http://dl-cdn.alpinelinux.org/alpine/v3.12/main/x86_64/APKINDEX.tar.gz
fetch http://dl-cdn.alpinelinux.org/alpine/v3.12/community/x86_64/APKINDEX.tar.gz
(1/1) Installing redis (5.0.9-r0)
Executing redis-5.0.9-r0.pre-install
Executing redis-5.0.9-r0.post-install
Executing busybox-1.31.1-r16.trigger
OK: 7 MiB in 15 packages
Removing intermediate container c1a2b6b5a3e5
 ---> 1bd893b32a6e
Step 3/3 : CMD ["redis-server"]
 ---> Running in 212cec15d31c
Removing intermediate container 212cec15d31c
 ---> e8c850d0fd46
Successfully built e8c850d0fd46
```

```
> docker run e8c850d0fd46

1:M 21 Aug 2020 13:19:43.617 * Ready to accept connections
```

 ## Cache

- Commands that are ran again in similar order are not processed again
- Instead the images and snapshots are used from cache


## Tagging

- used to make containers easily accessible

```
 <your_docker_id> / <repo/project_name> : <version>
```

```
> docker build -t meyash/redis:latest .

Successfully built e8c850d0fd46
Successfully tagged meyash/redis:latest
```

```
> docker run meyash/redis:latest
1:M 21 Aug 2020 13:57:08.903 * Ready to accept connections

OR

> docker run meyash/redis
1:M 21 Aug 2020 13:57:08.903 * Ready to accept connections
```

## Generate Image from Container

- we can generate image from manually modified containers as well

```
> docker run -it alpine sh

Install redis manually 
# apk add --update redis

(in another terminal)
> docker ps

CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS               NAMES
81a08621f65d        alpine                "sh"                     3 minutes ago       Up 3 minutes                            vigilant_ritchie

> docker commit -c 'CMD ["redis-server"]' 81a08621f65d

> docker run <generated_img_id>

```