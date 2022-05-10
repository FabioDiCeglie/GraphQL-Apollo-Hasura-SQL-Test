import React from "react";
import { FormGroup, FormControlLabel, Switch, Box } from "@material-ui/core";

export default ({ switchChange }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    switchChange(event.target.checked);
  };
  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          size="small"
          label="Match Finished"
        />
      </FormGroup>
    </Box>
  );
};
