# TODO: Move to alpine to reduce image and container size
FROM php:7.3-fpm

RUN apt-get update && apt-get install -y libicu-dev libpq-dev && apt-get clean
RUN pecl install apcu xdebug
RUN docker-php-ext-enable apcu xdebug
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql
RUN docker-php-ext-install pdo_pgsql pgsql intl opcache

WORKDIR /home/forge-hr/api

