import React, { Fragment } from "react";

import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import ErrorIcon from "@material-ui/icons/Error";

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
  console.log(dataFilter);

  return (
    <Container>
      <Typography variant="h2">Tennis Matches</Typography>
      <hr />

      {dataFilter.map((match) => (
        <Fragment key={match.id}>
          <Box mt={5}>
            <TableContainer component={Paper} mt={20}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Players</TableCell>
                    {match.setts.map((set, i) => (
                      <Fragment key={i}>
                        <TableCell align="right">Set:{set.nr}</TableCell>
                      </Fragment>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {match.p1.name}
                    </TableCell>
                    {match.setts.map((set, i) => (
                      <Fragment key={i}>
                        <TableCell align="right">{set.p1_score}</TableCell>
                      </Fragment>
                    ))}
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {match.p2.name}
                    </TableCell>
                    {match.setts.map((set, i) => (
                      <Fragment key={i}>
                        <TableCell align="right">{set.p2_score}</TableCell>
                      </Fragment>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Fragment>
      ))}
    </Container>
  );
}

export default MatchList;
