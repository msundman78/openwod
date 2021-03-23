import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import format from "date-fns/format";
import isValid from 'date-fns/isValid';
import parseJSON from 'date-fns/parseJSON';

 const ShowActivityModal = (props) => {

  var actTime;
  if (isValid(parseJSON(props.data.time))) {
    actTime = format(parseJSON(props.data.time), 'iii d/M HH:mm');
  } else {
    actTime = props.data.time;
  }

  return (
    <div>
      <Dialog fullWidth open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.data.name} - {props.data.time}</DialogTitle>
        <DialogContent>
          <div className="activity">
            <div><b>Gym:</b> {props.data.gym}</div>
            <div><b>Name:</b> {props.data.name}</div>
            <div><b>Time:</b> {actTime}</div>
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
export default ShowActivityModal;