import fetch from 'node-fetch'
import SimpleLinearRegression from 'ml-regression-simple-linear'
import { timeFormat, timeParse } from 'd3-time-format'

const calculateRegression = (json) => {
  // we'll format time into UNIX timestamp
  let tf = timeFormat("%s")
  // this is the input time format
  let tp = timeParse("%Y%m%d")
  let x = json.map(d => +tf(tp(d.date)))
  let y = json.map(d => d.positiveIncrease)

  let regression = new SimpleLinearRegression(x, y)
  let predictY = json.map(d => regression.predict(+tf(tp(d.date))))
  json.map((d, i) => {
    d.predictPositiveIncrease = predictY[i]
  })
}

export const getCovidData = async ( { name } ) => {
  const response = await fetch('https://covidtracking.com/api/v1/us/daily.json')
  let json = await response.json()
  json = json.reverse()
  // filter out data prior to March 01, 2020
  // COVID testing did not start before,
  // so the numbers are very low
  json = json.filter(d => d.date > 20200301)
  calculateRegression(json)

  return {
    usDaily: JSON.stringify(json)
  }
}