from flask import Flask, render_template
from flask_pymongo import PyMongo
from pymongo import MongoClient

# Create an instance of our Flask app.
app = Flask(__name__)


# Create connection variable
app.config["MONGO_URI"] = 'mongodb+srv://mongo:mongo@ngranback.bmasa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
# Pass connection to the pymongo instance.
mongo = PyMongo(app)
# Connect to a database.\
finalquery = mongo.db.seinfeld_final_data


# Route to render home.html template using data from Mongo
@app.route("/")

def home():
    # Find character data from mongo
    output = []
    for character in finalquery.find():
        output.append({"name" : character["_id"], "lines_per_episode" : character["Lines_per_episode"], "lines_per_writer" : character["Lines_per_writer"], "lines_per_season" : character["Lines_per_season"] })
    
    
    #character_info = finalquery.find()
   
    #return template and data
    return render_template("index.html", character_info = output)


# Route to render character template
@app.route("/character")

def get_one_character(name):

    # Codes to pull data
    character = finalquery.find_one({"_id" : name} ) 
    if character:
        output = {"name" : character["_id"], "lines_per_episode" : character["Lines_per_episode"], "lines_per_writer" : character["Lines_per_writer"], "lines_per_season" : character["Lines_per_season"]}

    #return template and data
    return render_template("characters.html")




if __name__ == "__main__":
    app.run(debug=True)