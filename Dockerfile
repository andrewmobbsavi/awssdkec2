FROM node:14.18.2-buster-slim
WORKDIR /root/data/hello-cdks
COPY data/hello-cdks /root/data/hello-cdks
RUN npm install
ENTRYPOINT ["tail", "-f", "/dev/null"]
