import gql from "graphql-tag";

export const GET_ALL_MATCHES = gql`
  query AllMatches {
    matches(order_by: { started_at: desc, finished: asc }) {
      id
      started_at
      p1 {
        id
      }
      p2 {
        id
      }
      setts {
        p1_score
        p2_score
      }
      finished
      winner_id
    }
  }
`;
