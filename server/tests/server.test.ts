import { ApolloServer, gql } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "../src/schema/resolvers";
import typeDefs from "../src/schema/typeDefs";

const testServer = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
  context: ({ req, res }) => ({ req, res }),
});

const GET_LAUNCHES = gql`
  query GetLaunches($page: Int!) {
    getLaunches(page: $page) {
      docs {
        id
        name
        date_utc
        flight_number
        success
        upcoming
        links {
          patch {
            small
          }
        }
      }
      totalDocs
      limit
      totalPages
      page
      pagingCounter
      hasPrevPage
      hasNextPage
      prevPage
      nextPage
    }
  }
`;

const GET_LAUNCH = gql`
  query GetLaunch($id: String!) {
    getLaunch(id: $id) {
      docs {
        id
        name
        date_utc
        flight_number
        success
        upcoming
        links {
          patch {
            small
          }
          webcast
          article
          wikipedia
        }
        details
        launchpad {
          region
          name
          full_name
          locality
          region
          latitude
          longitude
          launch_attempts
          launch_successes
          details
          images {
            large
          }
        }
        rocket {
          height {
            meters
          }
          diameter {
            meters
          }
          mass {
            kg
          }
          company
          country
          name
          active
          description
        }
        cores {
          core
          flight
          gridfins
          legs
          reused
          landing_attempt
          landing_success
          landing_type
          landpad
        }
        failures {
          reason
          altitude
          time
        }
      }
      totalDocs
      limit
      totalPages
      page
      pagingCounter
      hasPrevPage
      hasNextPage
      prevPage
      nextPage
    }
  }
`;

describe("GraphQL Server Tests", () => {
  it("should return launches", async () => {
    const { data, errors } = await testServer.executeOperation({
      query: GET_LAUNCHES,
      variables: { page: 1 },
    });

    expect(errors).toBeUndefined();
    expect(data?.getLaunches).toBeDefined();
  });

  it("should return a launch by ID", async () => {
    const { data, errors } = await testServer.executeOperation({
      query: GET_LAUNCH,
      variables: { id: "633f72580531f07b4fdf59c6" },
    });

    expect(errors).toBeUndefined();
    expect(data?.getLaunch).toBeDefined();
  });
});
