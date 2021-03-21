import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ShowActivityModal(props) {

  return (
    <div>
      <Dialog fullWidth open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.data.name} - {props.data.time}</DialogTitle>
        <DialogContent>
          <div className="activity">
            <div><b>Gym:</b> {props.data.gym}</div>
            <div><b>Name:</b> {props.data.name}</div>
            <div><b>Time:</b> {props.data.time}</div>
            <div className="line-wrap"><b>Description:</b><br /> {props.data.desc}</div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}