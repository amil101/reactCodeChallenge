import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import CardHeader from '../../components/Card/CardHeader';
import avatar from 'assets/img/faces/marc.jpg';
import { createStyles, Checkbox, FormControlLabel, Divider, TextField } from '@material-ui/core';

import Regulation from './componentes/Regulation';
import HealthInsurance from './componentes/HealthInsurance';
import RightPanelGeneral from './componentes/RightPanelGeneral';
import Notes from './componentes/Notes';
import Signature from './componentes/Signature';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import SpanningTable from './componentes/Table/SpanningTable';

const styles = createStyles({
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: 300,
    fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
    marginBottom: '3px',
    textDecoration: 'none'
  }
});

function UserProfile(props: any) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Ordinance on Therapeutic Products 13</h4>
            <p className={classes.cardCategoryWhite}>Measure of physical therapy/ podological therapy</p>
          </CardHeader>
        </GridItem>
        <GridContainer>
          <GridItem xs={12} sm={12} md={7}>
            <GridItem xs={12} sm={12} md={12}>
              <HealthInsurance />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Regulation />
            </GridItem>
            <p />
            <GridItem xs={12} sm={12} md={12}>
              <SpanningTable />
            </GridItem>

          </GridItem>

          <GridItem xs={12} sm={12} md={5}>
            <p/>
            <GridItem xs={12} sm={12} md={12}>
              <RightPanelGeneral />
            </GridItem>
            <p />
            <GridItem xs={12} sm={12} md={12}>
              <Notes />
            </GridItem>
            <p />
            <GridItem xs={12} sm={12} md={12}>
              <Signature />
            </GridItem>
          </GridItem>
        </GridContainer>

      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(UserProfile);
