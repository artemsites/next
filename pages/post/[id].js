// import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';
import Link from 'next/link';

export default function Post( { post } ) {
  console.log( post );

  // const router = useRouter();  
  // console.log(router);

  return <MainLayout>
    <h1>{post.title}</h1>
    <p>{post.text}</p>
    <Link href="/posts"><a>Back</a></Link>
  </MainLayout>;
}

Post.getInitialProps = async (ctx) => {
  // console.log(ctx);
  const response = await fetch( 'http://localhost:4000/posts/' + ctx.query.id );
  const post = await response.json();
  return {
    post
  }
}