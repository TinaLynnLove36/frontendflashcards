import React, { useState, useCallback, useRef, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Fab, makeStyles} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(10),
    }
}));

export default function CreateDeckForm(props) {
 const [title, setTitle] = useState([]);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const ref = useRef();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true)
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = useCallback(() => {
    ref.current.value = "";
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: title
    }
    axios.post(`./decks`, data)
    .then(res => {
      setData(res.data);
      setTitle('');
      console.log(res);
      console.log(res.data)
    })
    setOpen(false);
  }


  return (
   
    <div className={classes.fab}>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
      <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create a Deck</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Build your deck by entering a title below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            inputRef={ref}
          onChange={e => setTitle(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        <Button color="primary" type="submit" onClick= {handleSubmit}>
            Add 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  
  );

}