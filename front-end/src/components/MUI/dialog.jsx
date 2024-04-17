import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LoadingButton } from '@mui/lab';
import  Axios  from 'axios';
import AlertMUI from './alert';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [submit, setsubmit] = React.useState(false);
  const [Success, setSuccess] = React.useState(false);
  const [ErrorMessage, setErrorMessage] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSuccess(false);
    setErrorMessage(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Hire Me
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: async(event) => {
            event.preventDefault();
            setSuccess(false);
            setErrorMessage(false);
            setsubmit(true);
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            let data={
              name: formJson.name,
              email: formJson.email,
              company: formJson.company,
              message: formJson.message
            }
            await Axios.post("https://cheerful-red-cormorant.cyclic.app/send-hiring-mail", data).then((res)=>{
              if(res.status === 200){
                setSuccess(true);
              }
              else{
                setErrorMessage(true);
              }
              // alert(res.data.message);
            }).catch((err)=>{
              console.error(err);
              setErrorMessage(true);
          });
            setsubmit(false);
            // handleClose();
          },
        }}
      >
        <div>
        {Success && <AlertMUI message="Message Sent.. Get back to you shortly" status="success" />}
        {ErrorMessage && <AlertMUI message="Connection Error.. Please try Again" status="error" />}
        <DialogTitle>Hire Me</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thanks for showing interest to hire me. Please share me your details here to proceed further in hiring process.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="company"
            name="company"
            label="Company"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
          required
          margin="dense"
          name='message'
          id="standard-textarea"
          fullWidth
          label="Message"
          placeholder="We are interested to hire you"
          multiline
          variant="standard"
        />
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {!submit && <Button type="submit">Confirm</Button>}
          {submit && <LoadingButton  loading >Confirm </LoadingButton>}
        </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
