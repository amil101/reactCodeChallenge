import React from 'react';
import { makeStyles } from '@material-ui/styles';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import tableStyle from '../../../../assets/jss/material-dashboard-react/components/tableStyle';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card, TextField } from '@material-ui/core';
import CardBody from '../../../../components/Card/CardBody';
import CustomInput from '../../../../components/CustomInput/CustomInput';
import customInputStyle from '../../../../assets/jss/material-dashboard-react/components/customInputStyle';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const rows = [
  ['DD', 'Auto Filling with Data from Database depending on filed:ICD-10-Code', 'DD'],
  ['DD', 'Auto Filling with Data from Database depending on filed:ICD-10-Code', 'DD'],
  ['DD:Indication Key', 'Auto Filling with Data from Database depending on filed:ICD-10-Code', null],
  ['DD:ICD-10-Code', 'Auto Filling with Data from Database depending on filed:ICD-10-Code', null],
  ['DD:ICD-10-Code', 'Auto Filling with Data from Database depending on filed:ICD-10-Code', null],
];

function SpanningTable({ ...props }: any) {
  const { classes } = props;
  return (
    <div>
      <Card>
        <CardBody>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Prescription Qty.</TableCell>
                <TableCell align="left">Remedies according to the catalogue</TableCell>
                <TableCell align="left"> Number per week</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="left" style={{ width: '30%' }}>
                    <CustomInput
                      labelText={row[0] ? row[0] : ''}
                      id={`treatlat${index}`}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </TableCell>
                  <TableCell align="left" style={{ width: '50%' }}>{row[1]}</TableCell>
                  <TableCell align="center" style={{ width: '20%' }}> {index === 0 || index === 1 ?
                    // tslint:disable-next-line: jsx-wrap-multiline
                    <CustomInput
                      labelText={row[2] ? row[2] : ''}
                      id={`filled-multiline${index}`}
                      formControlProps={{
                        fullWidth: true
                      }}
                    /> : null}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default withStyles(customInputStyle)(SpanningTable);
