# Forge RH project


## Installation :


If this is your first time on this project you can run the following command :

```make first-init```

It will copy .env.dist into working .env and install the project services at the same time.

## Commands :

All these commands preceded by ```make``` will excute the following actions :

- *up* : start all the services
- *down* : stop all the services
- *run* : run all the services
- *sh-php* : get inside the php container
- *sh-front* : get inside the front container
- *sh-admin* : get inside the admin container
- *first-init* : init the freshly cloned project
- *copy-env* : copy .env.dist into .env
- *install* : install every services
- *install-php* : install the php service
- *install-admin* : install the admin service
- *install-front* : install the front service

## Authentification :


If you want to be able to authentify on the api, you need to generate a RSA key to generate JWT tokens.

You need to run these 3 commands :

```sh
docker-compose exec php -ti bash
openssl genpkey -out config/jwt/private.pem -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096
openssl pkey -in config/jwt/private.pem -out config/jwt/public.pem -pubout
```


## Architecture :

We split the architecture of the project in 3 parts :

- The API, provide the data (SF4, api-platform)
- The front, this is the frontoffice of the project, the user will add absence & invoice on it (vuejs)
- The admin, this is the backoffice for the adminstrator and the HR, they have access to everything (react, react-admin)

