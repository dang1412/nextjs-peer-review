import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ReviewForm from '../components/ReviewForm';
import { useState, useEffect } from 'react';
import { IReview } from '../types/review.type';
import { getReviewees, updateReview } from '../fetch';

export default function User() {
  const router = useRouter();

  const [reviews, setReviews] = useState<IReview[]>([]);
  const [name, setName] = useState<string>('');

  useEffect(() => {
    // get login name (must use localStorage in useEffect)
    const loginName = localStorage['name'];
    if (!loginName) {
      router.push('/login');
    } else {
      setName(loginName);
      getReviewees(loginName).then(setReviews);
    }
  }, []);

  const handleUpdated = (reviewee, point, comment) => {
    console.log('review updated', reviewee, point, comment);
    updateReview({
      reviewee,
      reviewer: name,
      point,
      comment
    }).then((data) => console.log('review updated', data));
  };

  return (
    <Layout>
      <p>{name}'s review list</p>
      {reviews.map(review => (
        <ReviewForm reviewee={review.reviewee} point={review.point} comment={review.comment} updated={handleUpdated} />
      ))}
    </Layout>
  )
}
