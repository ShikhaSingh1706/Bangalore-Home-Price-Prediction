import importlib.metadata
from flask import Flask, request, jsonify
import util
from flask_cors import CORS  # Import CORS

# Get Flask version
flask_version = importlib.metadata.version("flask")

# Create Flask app instance
app = Flask(__name__)

# Enable CORS for the app after it is created
CORS(app)  # This will allow cross-origin requests

# Define route
@app.route('/get_location_names')  # Ensure the endpoint matches in your frontend
def get_location_names():    # To get the location name from columns.json
    response = jsonify({
        'locations': util.get_location_names()
    })
    response.headers.add("Access-Control-Allow-Origin", '*')

    return response

@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():
    print("Request data:", request.form)  # Log request data
    total_sqft = float(request.form['total_sqft'])
    location = request.form['location']
    bhk = int(request.form['bhk'])
    bath = int(request.form['bath'])

    response = jsonify({
        'estimated_price': util.get_estimated_price(location, total_sqft, bhk, bath)
    })

    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# Start Flask server
if __name__ == "__main__":
    print("Starting Python Flask server for home price prediction..")
    util.load_saved_artifacts()
    print("Artifacts loaded:", util.get_location_names())

    app.run(debug=True)  # Run the app with debug mode enabled
