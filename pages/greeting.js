import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import banner from '../static/images/banner_1.png';
import { useRouter } from 'next/router';
import signature from '../static/images/signature.png';

const bannerObj = {
  img: banner,
  title: '인사말',
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
        <div className='greeting_container'>
          <div className='greeting_wrapper'>
            <h1>
              창의적인 아이디어를 통해 <br />
              새로운 가치를 만들어 갑니다.
            </h1>
            <span>여러분 안녕하십니까?</span>
            <p>
              비즈니스채널은 2009년 창사 이래 대일본 무역의 선구자적 정신을
              가지고 시장의 발전을 위해 노력하여 왔습니다. 저희 비즈니스채널은
              “고객이 진정으로 원하는 것은 무엇인가” 라는 질문으로 모든
              프로젝트를 시작합니다. 소비자의 Needs가 무엇인지를 정확히 분석하고
              이를 바탕으로 고객이 만족할 수 있는 가치를 창조하는 것만이 모든
              사업을 성공적으로 완수할 수 있다는 확신 때문입니다.
            </p>
            <p>
              따라서 제품 개발을 함에 있어 바이어가 요구하는 품질 수준을 맞추기
              위해 현지 공장의 생산매뉴얼을 재작성 하고 관리함으로써 고객의
              니즈에 맞춤과 동시에 국내 생산업체의 품질수준 향상도 함께 도모
              합니다. 또한 LG 생활건강 전일본 대리점을 오랜 기간 경험하면서
              쌓게된 일본 국내의 수많은 도소매 업체와의 커넥션을 활용하여
              불필요한 유통경로를 줄여 바이어가 판매하고자 하는 가격에 최대한
              맞출 수 있는 경쟁력 확보를 통해 최고의 품질과 가격을 지향하는
              무역파트너로, 나아가 사회에 공헌하는 기업이 되고자 더욱 노력할
              것입니다.
            </p>
          </div>
          <div className='greeting_signature'>
            <span>비즈니스 채널 대표</span>
            <img src={signature}></img>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Company;
