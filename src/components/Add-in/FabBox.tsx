"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FloatingActionButtonSize() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Note
          </Typography>
            <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
            noValidate
            autoComplete="off"
            >
            <TextField
              id="outlined-multiline-flexible"
              label="Note here"
              multiline
              inputProps={{ maxLength: 200 }}
            />
            </Box>
            <Button variant="contained" sx={{mx: 16}}>Post</Button>
        </Box>
      </Modal>
      <Box sx={{ position: 'fixed', bottom: 30, right: 30 }}>
        <Fab color="secondary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Box>
    </>
  );
}