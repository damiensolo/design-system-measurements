import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from "./Layout.module.css";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setIsTransitioning(true);
    const handleRouteChangeComplete = () => setIsTransitioning(false);

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div className={`${styles.page} ${isTransitioning ? styles.transitioning : ''}`}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;