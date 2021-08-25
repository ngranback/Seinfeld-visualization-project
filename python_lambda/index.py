import json
import os
import pymongo 

# Connection String
client = pymongo.MongoClient("mongodb+srv://mongo:mongo@ngranback.bmasa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client["NLG_DB"]
collection = db["seinfeld_final_data"]

# Define the function to pull the characters data
def get(event, context):
    output = []
    for character in collection.find():
        output.append(character)
        
    # create a response
    response = {
        "statusCode": 200,
        "body": json.dumps(output)
    }
    # return response
    return response