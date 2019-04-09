install:
	@composer install

build:
	@php bin/console doctrine:database:create --if-not-exists
	@php bin/console doctrine:schema:update --force

prepare: update-schema
	@php bin/console doctrine:fixtures:load --quiet

dev:
	@echo "FIXME: Start PHP dev server with Symfony Web Server Bundle"

start:
	@echo "This project must be served through an HTTP Web Server, with Apache or Nginx for example"

update-schema:
	@php bin/console doctrine:schema:update --force

reset-db:
	@php bin/console doctrine:database:create --if-not-exists
	@php bin/console doctrine:schema:drop --full-database --force
	@php bin/console doctrine:schema:update --force

reset-dev:
	@php bin/console doctrine:schema:update --force
	@php bin/console doctrine:database:create --if-not-exists
	@php bin/console doctrine:schema:drop --full-database --force
	@php bin/console doctrine:schema:update --force
	@php bin/console doctrine:fixtures:load --quiet
