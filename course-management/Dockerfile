# Image source
FROM node:14

RUN mkdir /course-management
# Docker working directory
WORKDIR /course-management/

# Copying file into APP directory of docker
COPY package*.json /course-management/

# Then install the NPM module
RUN npm install
RUN npm install -g concurrently
#RUN npm run build
# Copy current directory to APP folder
COPY . /course-management

EXPOSE 7000
CMD ["concurrently","npm:start:dev", "npm:listen"]