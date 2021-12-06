FROM node:14.18.2-buster-slim
WORKDIR /root/data/hello-cdkec
COPY data/hello-cdkec /root/data/hello-cdkec
RUN npm install
ENTRYPOINT ["tail", "-f", "/dev/null"]
