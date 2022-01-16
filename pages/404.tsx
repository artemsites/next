import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';
import style from '../styles/error.module.scss';

export default function Page404() {
  return <MainLayout>
    <h1 className={style.error}>404 ERROR</h1>
    <p><Link href="/"><a>Back to main page</a></Link></p>
  </MainLayout>;
}
