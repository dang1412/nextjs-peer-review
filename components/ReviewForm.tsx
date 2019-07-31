import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import Rating from '@material-ui/lab/Rating';
import { useState } from 'react';

interface ReviewFormProps {
  reviewee: string;
  point?: number;
  comment?: string;
  updated: (reviewee: string, point: number, comment: string) => void;
}

export default function ReviewForm(props: ReviewFormProps) {

  const [editMode, setEditMode] = useState<boolean>(false);
  const [state, setState] = useState<{point: number; comment: string}>({
    point: props.point,
    comment: props.comment
  });

  // edit icon click
  const useEditMode = () => {
    setEditMode(true);
  }

  // comment change
  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, comment: event.target.value });
  }

  // rate change
  const handleChangeRate = (e, newValue) => {
    setState({ ...state, point: newValue });
  }

  // cancel click
  const handleCancel = () => {
    setEditMode(false);
    setState({
      point: props.point,
      comment: props.comment
    });
  }

  // ok click
  const handleUpdate = () => {
    setEditMode(false);
    props.updated(props.reviewee, state.point, state.comment);
  }

  // comment edit mode
  const textField = (
    <TextField
      id="standard-multiline-flexible"
      label="Comment"
      multiline
      rows="3"
      value={state.comment}
      onChange={handleChangeComment}
    />
  );

  // comment view mode
  const textView = (
    <div>{state.comment}</div>
  );

  // icon in view mode
  const iconEdit = (
    <IconButton color="primary" aria-label="add to shopping cart" onClick={useEditMode}>
      <Edit />
    </IconButton>
  );

  // buttons in edit mode
  const buttons = (
    <div>
      <Button color="secondary" onClick={handleCancel}>Cancel</Button>
      <Button color="primary" onClick={handleUpdate}>Update</Button>
    </div>
  );

  return (
    <div>
      <Typography variant="h5" component="h3">
        {props.reviewee}
      </Typography>
      <Rating value={state.point || 0} readOnly={!editMode} onChange={handleChangeRate}/>
      {editMode ? textField : textView}
      {editMode ? buttons : iconEdit}
    </div>
  )
}
