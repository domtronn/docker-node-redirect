FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy Certs across
COPY certs /etc/certs

# Copy App Source
COPY . /usr/src/app

ENV CLIENT_CERT=/etc/certs/client_cert.crt
ENV CA_CERT=/etc/certs/ca_cert.crt

EXPOSE 9021
CMD [ "npm", "start" ]
