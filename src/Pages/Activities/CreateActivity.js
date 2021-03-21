import {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function CreateActivity({addActivity}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    gym: '',
    desc: '',
    time: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = (data) => {
    addActivity(formData);
    setOpen(false);
  };

  const updateFormData = (e) => {
    const newFormData = {...formData, [e.target.id]: e.target.value};
    setFormData(newFormData);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Create Activity
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Activity</DialogTitle>
        <DialogContent>
          <TextField margin="dense" id="gym" label="Gym Name" value={formData.gym} onChange={updateFormData} fullWidth autoFocus/>
          <TextField margin="dense" id="name" label="Activity Name" value={formData.name} onChange={updateFormData} fullWidth />
          <TextField margin="dense" id="desc" label="Description" value={formData.desc} onChange={updateFormData}multiline rows={4} fullWidth />
          <TextField margin="dense" id="time" label="Datum" value={formData.time} onChange={updateFormData} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleCreate} color="primary">Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}