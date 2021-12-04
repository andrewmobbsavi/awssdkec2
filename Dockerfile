FROM node:14.18.2-buster-slim
RUN npm install -g aws-cdk@1.x
ENTRYPOINT ["tail", "-f", "/dev/null"]
