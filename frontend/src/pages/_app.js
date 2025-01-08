// frontend/src/pages/_app.js
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const host = typeof window !== 'undefined' ? window.location.host : 'travelinstyle.lu'; // Fallback for SSR

  // Determine layout type based on host
  let layoutType;
  switch (host) {
    case 'travelinstyle.lu':
      layoutType = 'style1';
      break;
    case 'cruiseselection.be':
      layoutType = 'style2';
      break;
  }

  return (
    <Layout layoutType={layoutType}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
