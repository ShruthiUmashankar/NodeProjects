const request = require("request");

const forecast = (address, callback)=>{

    const url = 'http://api.weatherstack.com/forecast?access_key=254d975134ebc6aefd2ebabe4d681efb&query='+encodeURIComponent(address)

    request({url:url,json:true},(error,response)=>{
     if(error)
     {
         callback('Unable to connect to service',undefined)
     }
     else if(response.body.error)
     {
         callback('Unable to find location. Try another search',undefined)
     }
     else
     {
         callback(undefined, response.body.forecast)
     }
    })

}

module.exports = forecast;