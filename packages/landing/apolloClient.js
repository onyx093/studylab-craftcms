import { ApolloClient } from 'apollo-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
// import fetch from 'isomorphic-unfetch';
import introspectionQueryResultData from './fragmentTypes.json'


const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData
  });
  
const cache = new InMemoryCache({ fragmentMatcher });
  
export default function createApolloClient(initialState, ctx) {
    // The `ctx` (NextPageContext) will only be present on the server.
    // use it to extract auth headers (ctx.req) or similar.
    return new ApolloClient({
        ssrMode: Boolean(ctx),
        link: new HttpLink({
            uri: 'http://localhost/api', // Server URL (must be absolute)
        }),
        cache: cache
    });
}