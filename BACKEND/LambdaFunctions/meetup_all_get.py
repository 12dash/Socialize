import json

def lambda_handler(event, context):
    data = [{
        'id' : '12rkjbnacijld', 
        'title' : 'AWS System Design',
        'img_url' : "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102017/logo_0.png?17TK91b1B6OvV2MFrCLfukw1c8oEaNr6&itok=vsanFiUj",
        'location' : 'Uris Hall', 
        'time' : '6:30 pm', 
        'numPeople': 2,
        'type' : 'Meetup',

    } for _ in range(10)]
    return {
        'statusCode': 200,
        'body': json.dumps(data)
    }
