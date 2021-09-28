import Footer from './Footer';
import Header from './Header';
import { useRouter } from 'next/router';

function PageLayout({ children }) {
  const router = useRouter();

  const transparentPage = '/';
  const includePage = [
    '/company',
    '/greeting',
    '/history',
    '/address',
    '/contact',
    '/distribution',
    '/business',
    '/business/enufproj',
    '/business/soonplus',
    '/business/cosmetics',
  ];

  return (
    <div>
      {transparentPage === router.asPath ? (
        <Header isTransparent={true} />
      ) : (
        <Header isTransparent={false} />
      )}
      <div id='body'>{children}</div>
      {includePage.includes(router.asPath) && <Footer />}
    </div>
  );
}

export default PageLayout;
