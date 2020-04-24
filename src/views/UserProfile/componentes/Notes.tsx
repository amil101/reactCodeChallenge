import React from 'react';
// import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import tableStyle from '../../../assets/jss/material-dashboard-react/components/tableStyle';
import { Card, Table, TableBody, TableRow, InputLabel, TextField } from '@material-ui/core';
import CardBody from '../../../components/Card/CardBody';
import GridItem from '../../../components/Grid/GridItem';
import customInputStyle from '../../../assets/jss/material-dashboard-react/components/customInputStyle';
function Notes({ ...props }: any) {
  const { classes, inputProps } = props;
  return (
    <div >
      <Card>
        <CardBody>
          <Table>
            <TableBody>
              <TableRow>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel
                    className={classes.labelRoot}
                  >
                    {'Specification of therapeutic objectives, if applicable'}
                  </InputLabel>
                  <TextField
                    id="filled-multiline-static"
                    multiline={true}
                    fullWidth={true}
                    className={classes.disabled}
                    defaultValue="notes"
                    variant="outlined"
                    rows={4}
                  />
                </GridItem>
              </TableRow>
              <TableRow />
              <TableRow>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel
                    className={classes.labelRoot}
                  >
                    {'Medical justification for prescriptions outside of the normal case(if nessasary, supplementary sheet)'}
                  </InputLabel>
                  <TextField
                    id="filled-multiline-static"
                    multiline={true}
                    fullWidth={true}
                    defaultValue="notes"
                    variant="outlined"
                    rows={4}
                  />
                </GridItem>
              </TableRow>
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>

  );
}

export default withStyles(customInputStyle)(Notes);
