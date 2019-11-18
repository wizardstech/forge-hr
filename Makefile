up:
	docker-compose up -d --build

down:
	docker-compose down

run:
	docker-compose up --build

sh-php:
	docker exec -ti forge-php sh

sh-front:
	docker exec -ti forge-front sh

sh-admin:
	docker exec -ti forge-admin sh

first-init:
	make up
	make copy-env
	make install

copy-env:
	cp front/.env.dist front/.env
	cp api/.env api/.env.local


install: up
	make install-php
	make install-front
	make install-admin

install-php:
	docker exec forge-php make install
	docker exec forge-php make reset-dev

install-front:
	docker exec forge-front yarn install

install-admin:
	docker exec forge-admin yarn install


.PHONY: up down run sh-php sh-front sh-admin first-init copy-env install install-php install-admin install-front

