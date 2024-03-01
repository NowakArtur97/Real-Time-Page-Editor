# Real-Time-Page-Editor

## Table of Contents

- [General info](#general-info)
- [Features](#features)
- [Built With](#built-with)
- [Status](#status)

## General info

AWS CloudFormation template for creating resources for a static website on an S3 bucket with an application to edit the html, css and js code and then deploy this code as a static page on an S3 bucket.

## Features

- Editing html, css and js code and preview changes live
- Automatic copying of website files from the GitHub repository to the S3 bucket
- Replacing the API invoke URL in the JS script with the address from the API gateway using custom CloudFormation resource
- Deploying code from the editor by sending data in a request to API gateway and saving code as static page files to an S3 bucket using lambda function
- Hosting a static website on S3 created using the editor
- Automatic cleaning of S3 buckets after deleting a CloudFormation template
- Collecting logs from the lambda functions

## Built With

CloudFormation resources:

- S3 Buckets
- Bucket Policies
- IAM Roles
- Lambda Permission
- Lambda Functions
- CloudFormation Custom Resources
- API Gateway Deployment
- API Gateway Stage
- API Gateway Rest API
- API Gateway Resource
- API Gateway Method

## Status

Project is: finished
