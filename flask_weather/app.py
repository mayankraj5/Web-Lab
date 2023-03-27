# Importing essential libraries
from flask import Flask, render_template, request
import requests
app = Flask(__name__)
def weather_fetch(city_name):
    """
    Fetch and returns the temperature and humidity of a city
    :params: city_name
    :return: temperature, humidity
    """
    #api_key = config.weather_api_key
    api_key = "e5ca07732c5e28e836f65779ead27461"
    base_url = "http://api.openweathermap.org/data/2.5/weather?"
    complete_url = base_url + "appid=" + api_key + "&q=" + city_name
    response = requests.get(complete_url)
    x = response.json()

    if x["cod"] != "404":
        y = x["main"]

        temperature = round((y["temp"] - 273.15), 2)
        humidity = y["humidity"]
        feels_like = round((y["feels_like"] - 273.15), 2)
        min_temp = round((y["temp_min"] - 273.15), 2)
        return temperature, humidity, feels_like, min_temp
    else:
        return None

@app.route('/')
def home():
	return render_template('index.html')
@app.route('/weather', methods=['POST'])
def weather():
    if request.method == 'POST':
        city_name = request.form['city']
        if weather_fetch(city_name) != None:
            temperature, humidity, feels_like, min_temp = weather_fetch(city_name)
            return render_template('index.html', weather="The temperature, Humidity, Feels Like and Min Temp of the {} is {} celsius, {}%, {} celsius and {} celsius" .format(city_name,temperature, humidity, feels_like, min_temp))
if __name__ == '__main__':
	app.run(debug=True)