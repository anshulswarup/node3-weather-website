const request = require ('request')
//const geoCode = require('geoCode')

const forCast = (lat,long,callback)=>{
    url = 'http://api.weatherstack.com/current?access_key=27ceaf3864b1150a99ed78864641b040&query='+encodeURIComponent(lat)+','+encodeURIComponent(long)
    request({ url:url,json:true},(error,response)=>{
        if (error){
            callback('Not able to connect to the Internet',underfined)
        } else if(response.body.error){
            callback('Abe location sahi dal be',undefined)
        }   
        else{
            callback(undefined,{
                Mausam:response.body.current.temperature
            })
        }
    })
}
module.exports=forCast