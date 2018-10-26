import {
  QueryResolvers,
  MutationResolvers,
  AuthorResolvers,
  PostResolvers,
} from './types';

const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'Welcome to Apollo', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
];

const Query: QueryResolvers.Resolvers = {
  posts: () => posts,
  postsOf: (_, { authorId }) =>
    authorId ? posts.filter(p => p.authorId === authorId) : posts,
  authors: () => authors,
};

const Mutation: MutationResolvers.Resolvers = {
  upvotePost: (_, { postId }) => {
    const post = posts.find(post => post.id === postId);
    if (!post) {
      throw new Error(`Couldn't find post with id ${postId}`);
    }
    post.votes += 1;
    return post;
  },
};

const Author: AuthorResolvers.Resolvers = {
  posts: author => posts.filter(a => a.authorId === author.id),
};

const Post: PostResolvers.Resolvers = {
  author: post => authors.find(a => a.id === post.authorId),
};

export default {
  Query,
  Mutation,
  Author,
  Post,
};
