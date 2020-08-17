export const schema = gql`
  type CovidData {
    usDaily: String!
  }

  type Query {
    getCovidData(name: String!): CovidData!
  }
`