const { geoCode } = require('./utils/geoCode')
const { forecast } = require('./utils/forecast')

console.log(process.argv);

const address = process.argv[2];

if(!address) {
    return console.log('Please provide an address');
} else {
    geoCode(address, (error, {latitude, longitude,location} = {}) => {
        if(error){
            return console.log('Error : ', error);
        } else {
            // console.log('Data : ',data);
            forecast(latitude, longitude, (error, forecastData) => {
                if(error) {
                    console.log('Error', error)
                } else {
                    console.log(location);
                    console.log('Data', forecastData)
                }
            })
        }
    })
}