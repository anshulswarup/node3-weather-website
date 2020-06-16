const request = require('request')
const geoCode = (address,callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYW5zaHVsc2F4ZW5hIiwiYSI6ImNrYjNubXZ3NjA3bTkyeW82MzBqb3dpcXIifQ.ic53iVHAhPnuC-cyWcMRHQ&limit=1'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to Location Services!',undefined)
        } else if(response.body.features.length===0){
            callback('Unable to find location. Try another search',undefined)
        } else{
            callback(undefined,{
                longitude:response.body.features[0].center[0],
                latitude:response.body.features[0].center[1],
                Place:response.body.features[0].place_name
            })
        }
    })
}

module.exports=geoCode