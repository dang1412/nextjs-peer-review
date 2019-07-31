import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { OverflowBlockProperty } from 'csstype';
import Link from 'next/link';
import React from 'react';

import { IUser } from '../types/user.type';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto' as OverflowBlockProperty,
  },
  table: {
    minWidth: 650,
  },
}));

export default function UserTable({ data }: { data: IUser[] }) {
  const classes = useStyles({});
  console.log('data--------------', data);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Des</TableCell>
            <TableCell align="right">Admin</TableCell>
            {/* <TableCell align="right"></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Link href="/admin/reviewer/[name]" as={`/admin/reviewer/${row.name}`}><a>{row.name}</a></Link>
              </TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">{row.des}</TableCell>
              <TableCell align="right">{row.isAdmin ? 'true' : 'false'}</TableCell>
              {/* <TableCell align="right">
                <Link href="/admin/[userId]" as={`/admin/${row._id}`}>
                  <Button color="primary">Go</Button>
                </Link>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
