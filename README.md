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
- Automatic cleaning of S3 buckets after deleting a CloudFormation template
- Collecting logs from the lambda functions

## Built With

CloudFormation resources:

- S3 Buckets
- Bucket Policy
- IAM Roles
- Lambda Functions
- CloudFormation Custom Resources

## Status

Project is: in progress
