import React from 'react'
import { render } from 'react-dom'
import getRoot from 'get-root'

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({}) //Assuming graphql running on /graphql
const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My app 🚀</h2>
    </div>
  </ApolloProvider>
)

render(<App />, getRoot())
