import React, { useEffect } from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import ErrorIcon from "@material-ui/icons/Error";

import { GET_ALL_MATCHES } from "../graphql/queries";

function MatchList() {
  const { loading, error, data } = useQuery(GET_ALL_MATCHES);
  console.log(data);

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
      <Box>
        {dataFilter.map((match) => (
          <article key={match.id}>
            <p>Match ID: {match.id}</p>
            <p>Match date: {match.started_at}</p>
            <hr />
          </article>
        ))}
      </Box>
    </Container>
  );
}

export default MatchList;
