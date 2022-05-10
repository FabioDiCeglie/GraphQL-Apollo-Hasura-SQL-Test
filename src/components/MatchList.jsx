import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import ErrorIcon from "@material-ui/icons/Error";

import TableMatch from "./TableMatch";

import { GET_ALL_MATCHES } from "../graphql/queries";

function MatchList() {
  const { loading, error, data } = useQuery(GET_ALL_MATCHES);

  if (loading) return "Loading...";
  if (error)
    return (
      <p>
        <ErrorIcon fontSize="large" />
        Error! ${error.message}
      </p>
    );

  const dataFilter = data?.matches?.filter((match) => {
    return match.winner !== null;
  });

  return (
    <Container>
      <Typography variant="h2">Tennis Matches</Typography>
      <hr />
      <TableMatch dataFilter={dataFilter} />
    </Container>
  );
}

export default MatchList;
