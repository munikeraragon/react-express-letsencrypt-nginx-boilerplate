# pull the base image
FROM node:16

# set the working direction
WORKDIR /usr/src/app/

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add myuser to nodecert group so it can gain read
# permissions to letsencrypt certificates
RUN addgroup --gid 1024 nodecert
RUN adduser --disabled-password --gecos "" --force-badname --ingroup nodecert nodeuser
USER nodeuser

EXPOSE 5000

# start app
CMD ["npm", "start"]t

