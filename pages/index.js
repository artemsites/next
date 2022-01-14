import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';

export default function Index() {
  return <MainLayout title={'Next.js main page!'}>
    <h1>Hello Next.js</h1>
    <Link href="/posts"><a >Posts</a></Link>
    <br />
    <Link href="/test"><a >Test</a></Link>
  </MainLayout>;
}