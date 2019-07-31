import fetch from 'isomorphic-unfetch';

import { IUser } from '../types/user.type';
import { IReview } from '../types/review.type';

export async function getUsers(): Promise<IUser[]> {
  const res = await fetch('/api/get-users');
  const users = await res.json();

  return users;
}

export async function getUser(userId: string): Promise<IUser> {
  const res = await fetch(`/api/get-user?userId=${userId}`);
  const user: IUser = await res.json();

  return user;
}

export async function createUser(user: IUser): Promise<string> {
  const res = await fetch('/api/create-user', {
    method: 'post',
    body: JSON.stringify(user)
  });
  const data = await res.json();

  return data.id;
}

export async function getReviews(name: string): Promise<IReview[]> {
  const res = await fetch(`/api/get-reviews?name=${name}`);
  const data: { reviews: IReview[] } = await res.json();

  return data.reviews;
}

export async function getReviewees(name: string): Promise<IReview[]> {
  const res = await fetch(`/api/get-reviewees?name=${name}`);
  const data: { reviews: IReview[] } = await res.json();

  return data.reviews;
}

export async function updateReviewers(reviewee: string, nonReviewers: string[], reviewers: string[]): Promise<any> {
  const res = await fetch('/api/update-reviewers', {
    method: 'post',
    body: JSON.stringify({ reviewee, nonReviewers, reviewers })
  });
  const data = await res.json();

  return data;
}

export async function updateReview(review: IReview): Promise<any> {
  const res = await fetch('/api/update-review', {
    method: 'post',
    body: JSON.stringify(review)
  });
  const data = await res.json();

  return data;
}
