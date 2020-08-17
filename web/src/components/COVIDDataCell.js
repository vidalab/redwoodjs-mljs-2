import React from 'react'
import Vida from 'vidajs'

export const QUERY = gql`
  query($name: String!) {
    covidData: getCovidData(name: $name) {
      usDaily
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ covidData }) => {
  let vizJson = {
    "name": "US COVID-19 Positive Increase with ml.js Linear Regression",
    "description": "Data from @COVIDTracking Project",
    "columns": 2,
    "rows": 1,
    "data": [
      {
        "name": "covid-data",
        "values": JSON.parse(covidData.usDaily)
      }
    ],
    "charts": [
      {
        "type": "line", "data": "covid-data",
        "title": "US COVID-19 Positive Increase with ml.js Linear Regression",
        "position": {
          "columns": 2,
          "rows": 1,
          "x": 0,
          "y": 0
        },
        "axes": {
          "x": {
            "label": "date",
            "dataColumn": "date",
            "dataType": "time",
            "dataFormat": "%Y%m%d",
            "displayFormat": "%b %d",
            "timePrecision": "day"
          },
          "y": {
            "label": "count",
            "dataColumns": [
              {"name": "positiveIncrease", "color": "#8884d8"},
              {"name": "predictPositiveIncrease", "color": "#bb84d8"}
            ]
          }
        }
      }
    ]
  }
  return (
    <>
      <div style={{width: "100%", height: "500px"}}>
        <Vida vizData={vizJson} />
      </div>
    </>
  )
}