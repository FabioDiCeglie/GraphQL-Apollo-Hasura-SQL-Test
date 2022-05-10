import React from "react";
import { FormGroup, FormControlLabel, Switch, Box } from "@material-ui/core";

export default ({ dataFilter }) => {
  return (
    <Box>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
      </FormGroup>
    </Box>
  );
};
