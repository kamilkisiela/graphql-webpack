import * as React from 'react';
import { AllPosts } from './graphql';

function Post({ post }: { post: AllPosts.Posts }) {
  return (
    <li>
      {post.title} by {post.author.firstName} {post.author.lastName}
    </li>
  );
}

export function Posts() {
  return (
    <AllPosts.Component>
      {({ data, loading }) => {
        if (loading) {
          return '...';
        }

        return (
          <ul>
            {data.posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        );
      }}
    </AllPosts.Component>
  );
}
