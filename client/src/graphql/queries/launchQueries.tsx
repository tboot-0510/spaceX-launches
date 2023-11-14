import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
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

export const GET_LAUNCH = gql`
  query GetLaunch($id: String!) {
    getLaunch(id: $id) {
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
      launchpad
      ships
      payloads
      capsules
      rocket
    }
  }
`;
