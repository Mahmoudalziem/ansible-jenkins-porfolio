#!/bin/bash
aws cloudformation update-stack /
--stack-name ansible
--template-body file:///home/azima/Desktop/iti/ansible/cloudformation/ec2.yml \
--parameters file:///home/azima/Desktop/iti/ansible/cloudformation/ec2-params.json \
--region=us-east-2 \
--capabilities CAPABILITY_IAM