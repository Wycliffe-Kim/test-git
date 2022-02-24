FROM nginx:latest
RUN mkdir -p /usr/app
WORKDIR /usr/app

RUN mkdir -p /var/log/nginx

COPY ./default.conf /etc/nginx/conf.d/default.conf