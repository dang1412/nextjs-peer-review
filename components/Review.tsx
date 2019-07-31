import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
  }),
);

interface ReviewProps {
  reviewer: string;
  point: number;
  comment: string;
}

export default function Review(props: ReviewProps) {
  const classes = useStyles({});

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.reviewer}
        </Typography>
        <Rating value={props.point || 0} readOnly />
        <Typography component="p">
          {props.comment}
        </Typography>
      </Paper>
    </div>
  );
}
