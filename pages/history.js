import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import banner from '../static/images/banner_1.png';
import { useRouter } from 'next/router';
import historyContentKr from '../constants/historyContentKr';

const bannerObj = {
  img: banner,
  title: '연혁',
  text:
    '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획	개발, 출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
};

const History = () => {
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
        <div className='history_container'>
          <div className='history_title_wrapper'>
            <h1>
              비즈니스채널은 오늘도 <br />
              위대한 역사를 만들고 있습니다.
            </h1>
          </div>
          <div className='history_table_container'>
            <div className='history_table'>
              <div className='history_table_year'>
                <span>2013~2021</span>
              </div>
              <div className='history_table_content'>
                {historyContentKr
                  .filter((item) => {
                    if (
                      parseInt(item.year) < 2021 &&
                      parseInt(item.year) > 2012
                    )
                      return item;
                  })
                  .sort(function (a, b) {
                    if (a.year > b.year) return -1;
                    if (a.year === b.year) return 0;
                    if (a.year < b.year) return 1;
                  })
                  .map((item, index) => {
                    return (
                      <div className='history_content_detail'>
                        <span>
                          {item.year} {item.month}
                        </span>
                        <p key={item.kr}>{item.kr}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className='history_table_container'>
            <div className='history_table'>
              <div className='history_table_year'>
                <span>2008~2012</span>
              </div>
              <div className='history_table_content'>
                {historyContentKr
                  .filter((item) => {
                    if (
                      parseInt(item.year) < 2013 &&
                      parseInt(item.year) > 2009
                    )
                      return item;
                  })
                  .sort(function (a, b) {
                    if (a.year > b.year) return -1;
                    if (a.year === b.year) return 0;
                    if (a.year < b.year) return 1;
                  })
                  .map((item, index) => {
                    return (
                      <div className='history_content_detail'>
                        <span>
                          {item.year} {item.month}
                        </span>
                        <p key={item.kr}>{item.kr}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className='history_table_container'>
            <div className='history_table'>
              <div className='history_table_year'>
                <span>2000~2004</span>
              </div>
              <div className='history_table_content'>
                {historyContentKr
                  .filter((item) => {
                    if (
                      parseInt(item.year) < 2005 &&
                      parseInt(item.year) > 1999
                    )
                      return item;
                  })
                  .sort(function (a, b) {
                    if (a.year > b.year) return -1;
                    if (a.year === b.year) return 0;
                    if (a.year < b.year) return 1;
                  })
                  .map((item, index) => {
                    return (
                      <div className='history_content_detail'>
                        <span>
                          {item.year} {item.month}
                        </span>
                        <p key={item.kr}>{item.kr}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className='history_table_container'>
            <div className='history_table'>
              <div className='history_table_year'>
                <span>1997~1999</span>
              </div>
              <div className='history_table_content'>
                {historyContentKr
                  .filter((item) => {
                    if (parseInt(item.year) < 2000) return item;
                  })
                  .sort(function (a, b) {
                    if (a.year > b.year) return -1;
                    if (a.year === b.year) return 0;
                    if (a.year < b.year) return 1;
                  })
                  .map((item, index) => {
                    return (
                      <div className='history_content_detail'>
                        <span>
                          {item.year} {item.month}
                        </span>
                        <p key={item.kr}>{item.kr}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default History;
