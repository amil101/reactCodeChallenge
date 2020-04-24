import React from 'react';
// import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// core components
import tableStyle from '../../../assets/jss/material-dashboard-react/components/tableStyle';
import Card from '../../../components/Card/Card';
import CardHeader from '../../../components/Card/CardHeader';
import CardBody from '../../../components/Card/CardBody';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import CustomInput from '../../../components/CustomInput/CustomInput';
import customInputStyle from '../../../assets/jss/material-dashboard-react/components/customInputStyle';
import { createStyles } from '@material-ui/core/styles';
import { FormControlLabel, Checkbox, Divider } from '@material-ui/core';
const styles = createStyles({
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: 300,
    fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: 400,
      lineHeight: 1
    }
  }
});
function Regulation({ ...props }: any) {
  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);
  const { classes } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
  };
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked1(!checked1);
  };
    return (
      <div >
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Regulation in accordance with the catalogue(standard case)</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox name="firstordi" />
                  }
                  label="First Ordinance"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox name="followup" />
                  }
                  label="Follow-up Regulation"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox name="gtherapuy" />
                  }
                  label="Group therapy"
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <FormControlLabel
                  control={
                    <Checkbox name="generalrule" />
                  }
                  className={classes.marginTop}
                  label="Ordinance expect as a general rule"
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Start of treatment latest on:"
                  id="treatlat"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <Divider />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <h4>Home Visit</h4>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <FormControlLabel
                      control={
                        // tslint:disable-next-line: jsx-wrap-multiline
                        <Checkbox name="yes1"
                          onChange={handleChange}
                          checked={checked}
                        />
                      }
                      className={classes.marginTop}
                      label="Yes"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <FormControlLabel
                      control={
                        // tslint:disable-next-line: jsx-wrap-multiline
                        <Checkbox
                          name="no1"
                          onChange={handleChange}
                          checked={!checked}
                        />
                      }
                      className={classes.marginTop}
                      label="No"
                    />
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <h4>Therapy Report</h4>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <FormControlLabel
                      control={
                        // tslint:disable-next-line: jsx-wrap-multiline
                        <Checkbox
                          name="yes2"
                          onChange={handleChange1}
                          checked={checked1}
                        />
                      }
                      className={classes.marginTop}
                      label="Yes"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <FormControlLabel
                      control={
                        // tslint:disable-next-line: jsx-wrap-multiline
                        <Checkbox
                          name="no2"
                          onChange={handleChange1}
                          checked={!checked1}
                        />
                      }
                      className={classes.marginTop}
                      label="No"
                    />
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </div>
    );
}
  export default withStyles(styles)(Regulation);
