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

// launchpad;
// ships;
// payloads;
// capsules;
// rocket;
