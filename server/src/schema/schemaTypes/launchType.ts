import { gql } from "apollo-server-express";

export const launchType = gql`
  type LaunchLinks {
    patch: LaunchPatch
    webcast: String
    article: String
    wikipedia: String
  }

  type LaunchPatch {
    small: String
    large: String
  }

  type Cores {
    core: String
    flight: Int
    gridfins: Boolean
    legs: Boolean
    reused: Boolean
    landing_attempt: Boolean
    landing_success: Boolean
    landing_type: String
    landpad: String
  }

  type Fairings {
    reused: Boolean
    recovery_attempt: Boolean
    recovered: Boolean
  }

  type FailureReason {
    reason: String
    time: Int
    altitude: Int
  }

  type CrewMember {
    crew: String
    role: String
  }

  type Launch {
    name: String
    date_utc: String
    flight_number: Int
    success: Boolean
    id: String
    upcoming: Boolean
    links: LaunchLinks
    fairings: Fairings
    details: String
    payloads: [String]
    cores: [Cores]
    launchpad: String
    failures: [FailureReason]
    rocket: String
    crew: [CrewMember]
    ships: [String]
    capsules: [String]
  }

  type LaunchResult {
    docs: [Launch]
    totalDocs: Int
    limit: Int
    totalPages: Int
    page: Int
    pagingCounter: Int
    hasPrevPage: Boolean
    hasNextPage: Boolean
    prevPage: Int
    nextPage: Int
  }

  type Query {
    getLaunches(page: Int!): LaunchResult
    getLaunch(id: String): Launch
  }
`;
