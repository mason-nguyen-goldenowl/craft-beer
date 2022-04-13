import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function OrdersTable({ orders }) {
  const rows = orders;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">User email</TableCell>
            <TableCell align="left">Create</TableCell>
            <TableCell align="left">Item | Quantity</TableCell>
            <TableCell align="left">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.user.email}</TableCell>
              <TableCell align="left">{row.created_at}</TableCell>
              <TableCell align="left">
                {row.order_items.map((item) => {
                  return <p key={item.id}>{`${item.product.name} [ ${item.quantity} ]`}</p>;
                })}
              </TableCell>
              <TableCell align="left">${row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
