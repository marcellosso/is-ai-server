import aws from 'aws-sdk';
import { AWS_SECRET_KEY, AWS_ACCESS_KEY, AWS_REGION } from '../config';

aws.config.update({
  secretAccessKey: AWS_SECRET_KEY,
  accessKeyId: AWS_ACCESS_KEY,
  region: AWS_REGION
});

const S3 = new aws.S3();

export default S3;