const request = require('request')

const geocode = (address, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=254d975134ebc6aefd2ebabe4d681efb&query=' + encodeURIComponent(address) + '&units=f';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to service', undefined)
        }
        else if (response.body.error) {
            callback('Unable to find location. Try another search', undefined)
        }
        else {
            const data = {
                latitude: response.body.location.lat,
                longitude: response.body.location.lon,
                name: response.body.location.name
            }
            callback(undefined, data)
        }
    })

}

module.exports = geocode