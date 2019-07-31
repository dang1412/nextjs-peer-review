import { ObjectId } from 'mongodb';

import User from '../models/user.model';
import Review from '../models/review.model';
import { IUser } from '../../types/user.type';
import { IReview } from '../../types/review.type';

// USER

export async function handleGetUsers(req, res) {
  try {
    const users = await User.find();
    
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json(users);
  } catch (e) { }
}

export async function handleGetUserById(req, res) {
  const {
    query: { userId }
  } = req;

  try {
    const user = await User.findById(new ObjectId(userId));

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json(user);
  } catch (e) { }
}

export async function handleAddUser(req, res) {
  const data = JSON.parse(req.body) as IUser;

  try {
    const user = new User(data);
    const saved = await user.save();

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json({ id: saved.id });
  } catch (e) {}
}

export async function handleUpdateUser(req, res) {

}

// REVIEW

// update review list
export async function handleUpdateReviewers(req, res) {
  const data = JSON.parse(req.body) as { reviewee: string; reviewers: string[]; nonReviewers: string[] };
  const { reviewee, reviewers, nonReviewers } = data;

  try {
    for (const reviewer of reviewers) {
      const review = await Review.findOne({ reviewee, reviewer });
      if (!review) {
        const rec = new Review({ reviewee, reviewer });
        await rec.save();
      }
    }

    for (const reviewer of nonReviewers) {
      const review = await Review.findOne({ reviewee, reviewer });
      if (review) {
        await Review.deleteOne({ reviewee, reviewer })
      }
    }

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json({ reviewee });
  } catch (e) {}
}

// get reviews that have this user as reviewee
export async function handleGetReviews(req, res) {
  const {
    query: { name }
  } = req;

  try {
    const reviews = await Review.find({ reviewee: name });

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json({ reviews });
  } catch (e) {}
}

// get reviews that have this user as reviewer
export async function handleGetReviewees(req, res) {
  const {
    query: { name }
  } = req;

  try {
    const reviews = await Review.find({ reviewer: name });

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json({ reviews });
  } catch (e) {}
}

// update review with comment and point
export async function handleUpdateReview(req, res) {
  const data = JSON.parse(req.body) as IReview;
  const { reviewee, reviewer } = data;

  try {
    const review = await Review.findOne({ reviewee, reviewer });
    if (review) {
      review.point = data.point;
      review.comment = data.comment;

      await review.save();
    }

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.json({ id: review.id });
  } catch (e) {}
}
