up:
	docker-compose up -d --build

run:
	docker-compose up --build

docker-install: docker-up
	docker-compose run --rm composer composer install
	docker-compose exec php bin/console doctrine:database:create
	docker-compose exec php bin/console doctrine:schema:create

docker-update:
	docker-compose exec php bin/console doctrine:schema:update --force

docker-test:
	echo "FIXME: Implement tests"

docker-analysis:
	echo "FIXME: Implement linting"

.PHONY: install build prepare analysis test dev start update-schema reset-db docker-up docker-install docker-update docker-test docker-analysis
