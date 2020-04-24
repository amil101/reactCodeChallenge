import React from 'react';
// import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import tableStyle from '../../../assets/jss/material-dashboard-react/components/tableStyle';
import { Card, CardHeader, TextField } from '@material-ui/core';
import CardIcon from '../../../components/Card/CardIcon';
import CardFooter from '../../../components/Card/CardFooter';
import Accessibility from '@material-ui/icons/Accessibility';
import CardBody from '../../../components/Card/CardBody';
import customInputStyle from '../../../assets/jss/material-dashboard-react/components/customInputStyle';

function Signature({ ...props }: any) {
  const { classes } = props;
  return (
    <div >
         <Card>
           <CardBody>
           <TextField
                    id="filled-multiline-static"
                    multiline={true}
                    fullWidth={true}
                    className={classes.disabled}
                    defaultValue={'Data of the treating physician'}
                    variant="outlined"
                    rows={5}
                    disabled={true}
                  />
           </CardBody>
              <CardFooter stats={true}>
                <div className={classes.stats}>
                  DD: Database field physician
                </div>
              </CardFooter>
            </Card>
     </div>

);
}

export default withStyles(customInputStyle)(Signature);
