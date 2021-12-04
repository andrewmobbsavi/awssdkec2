FROM node:14.18.2-buster-slim
# RUN npm install -g aws-cdk@1.x
WORKDIR /root/data/hello-cdks
COPY data/hello-cdks /root/data/hello-cdks
RUN npm install
ENTRYPOINT ["tail", "-f", "/dev/null"]
