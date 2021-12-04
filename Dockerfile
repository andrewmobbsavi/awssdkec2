FROM node:14.18.2-buster-slim
RUN npm install -g aws-cdk@1.x
RUN npm install -g @aws-cdk/aws-s3
RUN npm install -g @aws-cdk/aws-s3-deployment
ENTRYPOINT ["tail", "-f", "/dev/null"]
