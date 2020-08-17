export const schema = gql`
  type CovidData {
    usDaily: String!
    usDailyRegression: String!
  }

  type Query {
    getCovidData(name: String!): CovidData!
  }
`