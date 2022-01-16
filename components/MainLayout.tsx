import Link from 'next/link';
import Head from 'next/head';

export function MainLayout({ children, title='Next.js app' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Link href="/"><a>Main</a></Link>
        <Link href="/test"><a>Test</a></Link>
        <Link href="/posts"><a>Posts</a></Link>
      </nav>
      <main>{children}</main>

      {/* <style jsx global> */}
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background:darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav a {
          color: #fff;
          text-decoration: none;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}