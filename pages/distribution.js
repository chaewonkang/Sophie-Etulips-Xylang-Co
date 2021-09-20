import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import banner from '../static/images/banner_2.png';
import { useRouter } from 'next/router';

const bannerObj = {
  img: banner,
  title: 'Distribution',
  text:
    '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획	개발, 출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
  url: 'https://google.com',
};

const Company = () => {
  const router = useRouter();
  console.log(router);
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Banner
          img={bannerObj.img}
          title={bannerObj.title}
          text={bannerObj.text}
        ></Banner>
        <div className='distribution_container'>
          <div className='organization_container'>
            <div>
              <h1 className='level-1 rectangle'>국내 조직</h1>
              <ol className='level-2-wrapper'>
                <li>
                  <ol className='level-3-wrapper'>
                    <li>
                      <h3 className='level-3 rectangle'>전자상거래</h3>
                    </li>
                    <li>
                      <h3 className='level-3 rectangle'>Retail Sales</h3>
                    </li>
                  </ol>
                </li>
                <li>
                  <ol className='level-3-wrapper'>
                    <li>
                      <h3 className='level-3 rectangle'>관리</h3>
                    </li>
                    <li>
                      <h3 className='level-3 rectangle'>수입/수출</h3>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
          <div className='organization_container'>
            <div className='organization_title_wrapper'>
              <h1>Overseas Distribution</h1>
            </div>
            <div>
              <h1 className='level-1 rectangle'>Japan Network Firm</h1>
              <ol className='level-2-wrapper level-2-wrapper-true'>
                <li>
                  <h2 className='level-2 rectangle'>일본 본토 영업</h2>
                  <ol className='level-3-wrapper'>
                    <li>
                      <h3 className='level-3 rectangle'>KOSMOS(약 600점포)</h3>
                    </li>
                    <li>
                      <h3 className='level-3 rectangle'>CAINZ(약 600점포)</h3>
                    </li>
                    <li>
                      <h3 className='level-3 rectangle'>
                        쯔루하(약 2,000점포)
                      </h3>
                    </li>
                    <li>
                      <h3 className='level-3 rectangle'>
                        후지약품그룹 (약 1,000점포)
                      </h3>
                    </li>
                  </ol>
                </li>
                <li>
                  <h2 className='level-2 rectangle'>오키나와 영업</h2>
                  <ol className='level-3-wrapper'>
                    <li>
                      <h3 className='level-3 rectangle'>KANEHIDE (65점포)</h3>
                    </li>
                    <li>
                      <h3 className='level-3 rectangle'>UNION (20점포)</h3>
                    </li>
                    <li>
                      <h3 className='level-3 rectangle'>SAN-A (70점포)</h3>
                    </li>
                    <li>
                      <h3 className='level-3 rectangle'>AEON GROUP (40점포)</h3>
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
          <div className='organization_container'>
            <div className='text_wrapper'>
              <h1>Global Sales Network</h1>
              <span>현재 일본, 중국, 홍콩, 미국(신규), 호주(신규) 개척 중</span>
            </div>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Company;
