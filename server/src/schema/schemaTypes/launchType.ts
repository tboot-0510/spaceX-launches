import { gql } from "apollo-server-express";

export const launchType = gql`
  type Launch {
    name: String
    full_name: String
    locality: String
    region: String
    latitude: Int
    longitude: Int
    launch_attempts: Int
    launch_successes: Int
    timezone: String
    rockets: [String]
    launches: [String]
    status: String
    details: String
    id: String
  }
  type Query {
    getLaunches: [Launch]
    getLaunch(id: String): Launch
  }
`;
