import '../styles/main.scss';
import NextNprogress from 'nextjs-progressbar';

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <NextNprogress 
        color="#f00"
        startPosition="0"
        stopDelayMs="0"
        height="5"
      />
      <Component {...pageProps} />
      {/* <style jsx global>{``}</style> */}
    </>
  );
}