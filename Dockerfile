FROM node:10
MAINTAINER db@target-traffic.net

EXPOSE 80

VOLUME "./:/data/project/"

WORKDIR /data/project/
COPY ./docker /data/project/docker


RUN npm install --global nodemon typescript

CMD "bash /data/project/docker/web/startup.sh"
