import json
import os
import boto3

BUCKET_NAME = os.environ['BUCKET_NAME']

s3 = boto3.resource('s3')

def save_to_s3(fileName, fileContent, contentType):
    s3.Object(BUCKET_NAME, fileName).put(Body=fileContent, ContentType=contentType)

def save_html_file_to_s3(htmlCode):
    html = '''
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Website</title>
            <link rel="stylesheet" href="style.css" />
            <script src="script.js"></script>
          </head>
          <body> 
    ''' + htmlCode + '''
          </body>
        </html>
    '''
    print("HTML code to save to index.html file: " + html)
    save_to_s3("index.html", html, "text/html")

def save_css_file_to_s3(cssCode):
    print("CSS code to save to style.css file: " + cssCode)
    save_to_s3("style.css", cssCode, "text/css")

def save_js_file_to_s3(jsCode):
    js = '''
        document.addEventListener("DOMContentLoaded", () => { 
    ''' + jsCode + '''
          });
    '''
    print("JS code to save to script.js file: " + js)
    save_to_s3("script.js", js, "text/javascript")

def lambda_handler(event, context):
    print("Received request: ")
    data = json.loads(event['body'])
    print(data)
    response = {
            "statusCode": 500,
            "body": json.dumps( {"Status": "Failed"} ),
            "headers": { "Access-Control-Allow-Origin" : "*" }
    }
    try:
        save_html_file_to_s3(data['html'])
        save_css_file_to_s3(data['css'])
        save_js_file_to_s3(data['js'])
        response = {
            "statusCode": 200,
            "body": json.dumps( {"Status": "Success"} ),
            "headers": { "Access-Control-Allow-Origin" : "*" }
        } 
    except Exception as e:
        print("Exception when saving files to S3 bucket: " + BUCKET_NAME)
        print(e)
    return response