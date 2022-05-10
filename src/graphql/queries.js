import gql from "graphql-tag";

export const GET_ALL_MATCHES = gql`
  query AllMatches {
    matches(order_by: { started_at: desc, finished: asc }) {
      id
      started_at
      p1 {
        id
        name
      }
      p2 {
        id
        name
      }
      setts {
        p1_score
        p2_score
      }
      finished
      winner {
        name
      }
      competition {
        name
        club {
          city
          name
        }
      }
    }
  }
`;
