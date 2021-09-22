import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import banner from '../static/images/banner_1.png';
import { useRouter } from 'next/router';

const bannerObj = {
  img: banner,
  title: '회사개요',
  text:
    '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획	개발, 출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
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
        <div className='company_container'>
          <div className='company_box'>
            <div className='text_wrapper'>
              <h1>
                No.1 Platform
                <br />
                Service Provider
              </h1>
              <span>
                비즈니스 채널은 국내 화장품 업계 최초의 ODM 기업입니다.
              </span>
              <p>
                종전에는 중국 및 한국의 생활용품을 중심으로 일본 마켓 수출을
                주요 업무로 전개하고 있었으며 최근 미국 및 멕시코 P&G 상품을
                주력제품으로 추가하고 한국시장 진출에 주력하고 있습니다. 사업
                내용으로는 세제류, 일용잡화, 화장지, 맥주, 생수등을 메인
                아이템으로 거래처는 현재에도 확장중에 있습니다. 2012년 3월 이후
                한국 마켓 공략을 목표로 관련회사 명경통상을 설립하고 종합몰,
                오픈마켓, 소셜 커머셜 등 온라인 마켓의 판매를 강화하고 있으며
                현재 미국상품 소싱에 주력하고 있습니다. 2016년 부터 화장지 및
                가구의 자사브랜드 Tree Wear 를 런칭하였습니다.
              </p>
            </div>
            <div className='img_wrapper'>
              <div className='img_area'></div>
            </div>
          </div>
          <div className='business_container'>
            <div className='organization_container'>
              <div className='text_wrapper'>
                <h1>경영이념</h1>
                <span>
                  고객이 최고로 만족할 품질과 가격의 제품만을 개발하고 공급한다
                </span>
              </div>
            </div>
            <div className='organization_container'>
              <div className='organization_title_wrapper'>
                <h1>Organization</h1>
              </div>
              <div>
                <h1 className='level-1 rectangle'>비즈니스채널</h1>
                <ol className='level-2-wrapper'>
                  <li>
                    <ol className='level-3-wrapper'>
                      <li>
                        <h3 className='level-3 rectangle'>Tokyo</h3>
                        <ol className='level-4-wrapper'>
                          <li>
                            <h4 className='level-4 rectangle'>
                              쯔루하드럭, 후지약품 한화재팬 등 관동지역 거래선
                              총괄 관리.
                            </h4>
                          </li>
                          <li>
                            <h4 className='level-4 rectangle'>
                              진로재팬과 업무제휴, 진로재팬의 전국영업 망을
                              이용한 잡화류 판매에 주력.
                            </h4>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h3 className='level-3 rectangle'>Okinawa</h3>
                        <ol className='level-4-wrapper'>
                          <li>
                            <h4 className='level-4 rectangle'>
                              주식회사 AXE Japan 및 요로즈야 등의 법인 을 설립.
                            </h4>
                          </li>
                          <li>
                            <h4 className='level-4 rectangle'>
                              오키나와 및 후쿠오카, 간사이 지역의 거래선을
                              총괄관리.
                            </h4>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <ol className='level-3-wrapper'>
                      <li>
                        <h3 className='level-3 rectangle'>Guangzhou</h3>
                        <ol className='level-4-wrapper'>
                          <li>
                            <h4 className='level-4 rectangle'>
                              밸류트리 트레이딩 C&G 글로벌을 설립.
                            </h4>
                          </li>
                          <li>
                            <h4 className='level-4 rectangle'>
                              중국 및 홍콩의 제품 소싱 및 출하, 품질 전반을 총괄
                              관리.
                            </h4>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h3 className='level-3 rectangle'>Korea</h3>
                        <ol className='level-4-wrapper'>
                          <li>
                            <h4 className='level-4 rectangle'>
                              주식회사 비즈니스 채널 총괄하에 명경통상에서
                              한국내 유통 및 수출입 업무 전반을 관리.
                            </h4>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Company;
