import React from "react";
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
      <Box>
        {dataFilter.map((match) => (
          <div key={match.id}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Players</TableCell>
                    {match.setts.map((set) => (
                      <>
                        <TableCell align="right">Set:{set.nr}</TableCell>
                      </>
                    ))}
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </div>
        ))}
      </Box>
    </Container>
  );
}

export default MatchList;
