import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';
import { useState, useEffect } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    async function loadPosts() {
      const response = await fetch('http://localhost:4000/posts');
      const json = await response.json();
      setPosts(json);
    }

    loadPosts();
  }, []);

  return <MainLayout>
    <Head>
      <title>Posts page!</title>
    </Head>
    <h1>Posts page!</h1>

    <pre>{JSON.stringify(posts, null, 2)}</pre>

    <ul>

    </ul>

    <a href="/post/1">Post 1</a>
    <br/>
    <a href="/post/2">Post 2</a>
  </MainLayout>;
}