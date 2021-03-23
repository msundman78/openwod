import {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { KeyboardDateTimePicker } from '@material-ui/pickers';


const CreateActivity = ({addActivity}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    gym: '',
    desc: '',
    booked: 0,
    time: new Date()
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = (data) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
    fetch(process.env.REACT_APP_OPENWOD_API_URL + '/activities', requestOptions)
      .then(response => response.json())
      .then(data => addActivity());
    setOpen(false);
  };

  const updateFormData = (e) => {
    console.log(e);
    const newFormData = {...formData, [e.target.id]: e.target.value};
    setFormData(newFormData);
  };

  const handleDateChange = (e) => {
    console.log(e);
    const newFormData = {...formData, time: e};
    setFormData(newFormData);
  };

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
            <KeyboardDateTimePicker
              id="time"
              variant="inline"
              label="Start Time"
              value={formData.time} 
              onChange={handleDateChange}
              format="yyyy-MM-dd HH:mm"
              ampm={false}
              disablePast={true}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleCreate} color="primary">Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateActivity;