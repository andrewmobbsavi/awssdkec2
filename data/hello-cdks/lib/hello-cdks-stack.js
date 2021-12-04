//https://docs.aws.amazon.com/cdk/latest/guide/hello_world.html

/*
cdk init app --language javascript

npm install @aws-cdk/aws-s3
npm install @aws-cdk/aws-s3-deployment
cdk synth

cdk deploy
cdk diff
cdk bootstrap aws://ACCOUNT-NUMBER/REGION
cdk destroy


----------------
This happens when you manually delete the staging s3 bucket.

[100%] fail: No bucket named ‘cdktoolkit-stagingbucket-########’. Is account ######### bootstrapped?

Cause: CDK requires a staging bucket in S3 containing CDK assets, which may have been removed.

Investigation:

    Running aws s3 ls does not yield the bucket.

Fix:

    Navigate to the AWS management console

    Open CloudFormation

    Look for and remove the stack called CDKToolkit

*/

const cdk = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');
const S3Deployment = require('@aws-cdk/aws-s3-deployment');
// const sqs = require('@aws-cdk/aws-sqs');

const path = "/home/ubuntu/awssdkintro/data/files";

class HelloCdksStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // new s3.Bucket(this, 'MyFirstBucket', {
    //   versioned: true,
    //   removalPolicy: cdk.RemovalPolicy.DESTROY,
    //   autoDeleteObjects: true
    // });

    const bucket = new s3.Bucket(this, "Files", {
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });

    new S3Deployment.BucketDeployment(this, "Deployment", {
      sources: [S3Deployment.Source.asset(path)],
      destinationBucket: bucket,
    });

    new cdk.CfnOutput(this, "BucketDomain", {
      value: bucket.bucketWebsiteDomainName,
    });
  }
}

module.exports = { HelloCdksStack }
