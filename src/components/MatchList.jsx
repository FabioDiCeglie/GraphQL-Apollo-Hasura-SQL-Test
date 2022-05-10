import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import ErrorIcon from "@material-ui/icons/Error";

import TableMatch from "./TableMatch";

import { GET_ALL_MATCHES } from "../graphql/queries";
import SwitchMatch from "./SwitchMatch";

function MatchList() {
  const { loading, error, data } = useQuery(GET_ALL_MATCHES);
  const [matchNotFinished, setMatchNotFinished] = useState(false);

  if (loading) return "Loading...";
  if (error)
    return (
      <p>
        <ErrorIcon fontSize="large" />
        Error! ${error.message}
      </p>
    );

  // Change match based on the switch component
  const switchChange = (change) => setMatchNotFinished(change);

  let dataFilter;
  if (matchNotFinished) {
    dataFilter = data?.matches?.filter((match) => {
      return match.winner !== null;
    });
  } else {
    dataFilter = data?.matches?.filter((match) => {
      return match.winner === null;
    });
  }

  return (
    <Container>
      <Typography variant="h2">Tennis Matches</Typography>
      <hr />
      <SwitchMatch switchChange={switchChange} />
      <hr />
      <TableMatch dataFilter={dataFilter} />
    </Container>
  );
}

export default MatchList;
