const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

// const url ='http://api.weatherstack.com/current?access_key=254d975134ebc6aefd2ebabe4d681efb&query=New%20York&units=f'

// request({url:url,json:true},(error,response)=>{
//     //console.log(response)
//     if(error)
//     {
//         console.log('Unable to connect to service')
//     }
//     else if(response.body.error)
//     {
//         console.log('Unable to find location')
//     }
//     else
//     {
//     const data = response.body
//     console.log(data.current.temperature)
//     }
// })

geocode('New York', (error, data) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(data)
        forecast('New York', (error, data) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log(data)
            }
        })
    }
})

