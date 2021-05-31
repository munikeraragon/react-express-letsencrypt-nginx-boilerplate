# react-node-letsencrypt-nginx-boilerplate

A full-stack https application boilerplate made with Docker, LetsEncrypt, Nginx, React, and Express


## Prerequisites
1. Docker
2. Docker Compose
3. Domain name with DNS records pointing at target machine

## Installation
1. Clone project
``` bash
git clone https://github.com/munikeraragon/react-express-letsencrypt-nginx-boilerplate.git
```
2. cd into folder
``` bash
cd react-express-letsencrypt-nginx-boilerplate
```

3. Edit init-letsecncrypt.sh by replacing "example.com" and "www.example.com" with your domain name

4. Edit ./data/nginx/app.conf by replacing "example.com" with your domain name

5. Edit ./server/index.js by replacing "example.com" with your domain name

3. Generate Letsencrypt certificates

``` bash 
sudo ./init-letsencrypt.sh
```

4. Create "nodecert" group to allow Express server to read letsencrypt certifictes 

``` bash
# Create group "nodecert" with gid=1024
sudo groupadd nodecert -g 1024

# Add root to the group "nodecert"
sudo usermod -a -G nodecert root

# make group "nodecert" owner of files recursively 
sudo chgrp -R nodecert data/certbot/conf/live
sudo chgrp -R nodecert data/certbot/conf/archive

# change permission of files to be accesible by group "nodecert"
sudo chmod -R 750 data/certbot/conf/live
sudo chmod -R 750 data/certbot/conf/archive
```

5. Build docker-compose services
``` bash
docker-compose build
```

## Usage
1. Run docker-compose services
``` bash
docker-compose up
```

2. Access React client at https://your_domain_name.com and Express server at https://your_domain_name.com:5000



## Learn how it was made
Article: https://www.codegrow.org