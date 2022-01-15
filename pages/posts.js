import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Posts( { posts } ) {
  return <MainLayout>
    <Head>
      <title>Posts page!</title>
    </Head>
    <h1>Posts page!</h1>

    <pre>{JSON.stringify(posts, null, 2)}</pre>

    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/post/[id]`} as={`/post/${post.id}`}><a>{post.title}</a></Link>
        </li>
      ))}
    </ul>
  </MainLayout>;
}

Posts.getInitialProps = async () => {
  const response = await fetch( 'http://localhost:4000/posts' );
  const posts = await response.json();
  return {
    posts
  }
}