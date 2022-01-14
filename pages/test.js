import Router from 'next/router';
import { MainLayout } from '../components/MainLayout';

export default function Test() {
  const buttonClickHandler = () => {
    Router.push('/');
  }

  return <MainLayout title={'Test page!'}> 
  <h1>Test page!</h1>
    <button onClick={buttonClickHandler}>To main</button>
    <button onClick={()=>{Router.push('/posts')}}>To posts</button>
  </MainLayout>;

}