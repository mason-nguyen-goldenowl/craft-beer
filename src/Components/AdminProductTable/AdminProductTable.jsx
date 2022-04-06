import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import DeleteIcon from '@mui/icons-material/Delete';
import './AdminProductTable.scss';
import Modal from '../Modal/Modal';
import Comfirm from '../Comfirm/Comfirm';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

function createData(id, name, price, inStock, description, information, category, image) {
  return { id, name, price, inStock, description, information, category, image };
}

export default function AdminProductTable({ products, setSelected, setModalOpen, selected }) {
  const [modalComfirm, setModalComfirm] = useState(false);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Stock</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Information</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Feature</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell component="th" scope="row">
                {product.name}
              </StyledTableCell>
              <StyledTableCell align="right">{product.price}</StyledTableCell>
              <StyledTableCell align="right">{product.in_stock}</StyledTableCell>
              <StyledTableCell align="right">{product.description}</StyledTableCell>
              <StyledTableCell align="right">{product.information}</StyledTableCell>
              <StyledTableCell align="right">{product.category}</StyledTableCell>
              <StyledTableCell align="right">{product.image_url}</StyledTableCell>
              <StyledTableCell align="right">
                <div className="row-feature">
                  <div
                    className="row-feature__icon"
                    onClick={() => {
                      setSelected(product);
                      setModalOpen(true);
                    }}
                  >
                    <AutoFixNormalIcon />
                  </div>
                  <div
                    className="row-feature__icon"
                    onClick={() => {
                      setSelected(product);
                      setModalComfirm(true);
                    }}
                  >
                    <DeleteIcon />
                  </div>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      {modalComfirm && (
        <Modal children={<Comfirm selected={selected} setModalComfirm={setModalComfirm} />} />
      )}
    </TableContainer>
  );
}
