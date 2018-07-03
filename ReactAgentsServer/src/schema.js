import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Query {
  getAllEvents: [Event]
  getRegisteredMembers(eventName: String!): [Member]
  getEvent(name: String!): [Event]
}

type Mutation {
  addEvent(name: String!,startDate: String!, endDate: String!): Event
}

type Event {
    eventId: String!
    name: String!
    org: String!
    startDate: String!
    endDate: String!
    details: String!
}

type Member {
    memberId: String!
    name: String!
    email: String!
    location: String!
    org: String!
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
