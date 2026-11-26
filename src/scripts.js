import _ from 'lodash'
import './styles.css'
let fetchedData = fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?unitGroup=us")
fetchedData.then(response=>{
    return response.json()
}).then(response=>{
    console.log(response)
})