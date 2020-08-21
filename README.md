# Docker

## Process & Resources

    - Namespacing - Isolating resources per process.
    - Control Groups (cgroup) - Limits amount of resources per process.
    - These are available in linux os. 
    - Docker in windows runs in a linux image.

## General

- every linux process has 3 communication channels
  - STDIN
  - STDOUT
  - STDERR
- some command processors
  - bash
  - powershell
  - sh
  - zsh
- unless specified containers don't share a file system

## Commands

### **docker create**

- used to create a container

```
> docker create <image_name>
```

### **docker start**

- used to run a container
  - no output is shown to terminal

```
> docker start <container_id>
```

- run a container with output enabled

```
> docker start -a <container_id>
```

### **docker run**

- used to create and run a container
  - docker run = docker create + docker start

```
> docker run <image_name> <default-command-override>
```

Example -

```
> docker run busybox echo hi there
hi there
```

Mutation -

Shows files inside container

```
> docker run busybox ls
bin
dev
etc
home
proc
root
sys
tmp
usr
var
```

### **docker ps**

- list all running containers

```
> docker ps
```

- list all containers ever created
    - each having an unique randomly generated name

```
> docker ps --all
05cc4dadee37        redis               "docker-entrypoint.s…"   6 days ago          Exited (255) 5 days ago    6379/tcp            clever_swirles
d54908bc9243        busybox             "sh"                     6 days ago          Exited (0) 6 days ago                          affectionate_almeida
16ae4d2b9369        hello-world         "/hello"                 8 days ago          Exited (0) 8 days ago                          kind_engelbart
```

### **docker system prune**

- remove all stopped containers

```
> docker system prune
Deleted Containers:
4273eb44e33ed03d9f707bbd2853727d21a10f7f895c66da2059f26c41eb9008
4d4827c59e577df0ab0f2aa82838a7ca1601938eca58f25d0169c66514872cd0
```

### **docker logs**

- to print the last logs(outputs) of the stopped container

```
> docker logs <container_id>
```

### **docker stop**

- stops a running container
    - sends a command (SIGTERM) to container to stop

```
> docker stop <container_id>
```

### **docker kill**

- kills a running container
    - forcefully stop container immediately

```
> docker kill <container_id>
```

### **docker exec**

- running another command inside a running container
  - multi command containers
  - "-it" = allows us to provide input to the container
    - "-i" helps connect to STDIN channel
    - "-t" helps connect to show nicely formatted output

```
> docker exec -it <container_id> <command>
```

Example -

```
> docker run redis
1:M 21 Aug 2020 11:34:04.074 * Ready to accept connections

(now in another terminal)

> docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS               NAMES
33c28af2289a        redis               "docker-entrypoint.s…"   5 minutes ago       Up 5 minutes        6379/tcp            inspiring_bohr

> docker exec -t 33c28af2289a redis-cli
127.0.0.1:6379>
```

Running Shell (Terminal) Inside Container -

```
> docker run redis

(now in another terminal)

> docker exec -t 33c28af2289a sh
# type_commands_here
```

