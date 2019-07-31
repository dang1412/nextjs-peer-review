import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

import { useRouter } from 'next/router';

import Layout from '../../../components/Layout';
import TransferList from '../../../components/TransferList';
import ReviewUI from '../../../components/Review';
import { getUsers, getReviews, updateReviewers } from '../../../fetch';
import { IReview } from '../../../types/review.type';

const EditReviewers = () => {
  const router = useRouter();
  const name = router.query.name as string;

  const [left, setLeft] = useState<string[]>([]);
  const [right, setRight] = useState<string[]>([]);
  const [reviews, setReviews] = useState<IReview[]>([]);

  // request for reviewers and non-reviewers
  useEffect(() => {
    Promise.all([getUsers(), getReviews(name)]).then((values) => {
      const all = values[0].map(user => user.name);
      const reviewers = values[1].map(user => user.reviewer);
      const nonReviewers = all.filter(name => !reviewers.includes(name));

      setLeft(nonReviewers);
      setRight(reviewers);
      setReviews(values[1]);
      console.log(all, nonReviewers, reviewers);
    })
  }, [name]);

  const transferListUpdated = (left: string[], right: string[]) => {
    console.log(left, right);
    setLeft(left);
    setRight(right);
  }

  const submit = async () => {
    console.log('Update reviewers', left, right);
    const res = await updateReviewers(name, left, right);
    // const id = await createUser(user);
    console.log('Got data', res);

    router.push('/admin');
  }

  const back = () => router.push('/admin');

  const reviewUI = (review: IReview) => (
    <ReviewUI reviewer={review.reviewer} point={review.point} comment={review.comment} />
  )

  return (
    <Layout>
      <p>Choose {name}'s reviewers</p>

      <TransferList left={left} right={right} listUpdated={transferListUpdated} />

      <Button variant="contained" style={{ marginRight: 10 }} onClick={back}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={submit}>
        Update
      </Button>

      {reviews.map(reviewUI)}
    </Layout>
  )
}

export default EditReviewers;
