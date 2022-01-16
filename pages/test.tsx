import Router from 'next/router';
import { MainLayout } from '../components/MainLayout';

export default function Test({ title }) {
  const buttonClickHandler = () => {
    Router.push('/');
  }

  return <MainLayout title={'Test page!'}> 
  <h1>{ title }</h1>
    <button onClick={buttonClickHandler}>To main</button>
    <button onClick={()=>{Router.push('/posts')}}>To posts</button>
  </MainLayout>;

}

Test.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/test`);
  const data = await response.json();

  return {
    title: data.title 
  }
} 