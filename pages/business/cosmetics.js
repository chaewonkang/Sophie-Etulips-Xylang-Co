import Banner from '../../components/Banner';
import PageLayout from '../../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import banner from '../../static/images/banner_1.png';
import { useRouter } from 'next/router';

const imagePathArr = [
  '../static/images/enuf_product.jpeg',
  '../static/images/soon_product.png',
  '../static/images/mask.jpeg',
  '../static/images/tissue.jpeg',
  '../static/images/detergent.jpeg',
  '../static/images/food.jpeg',
];

const bannerObj = {
  img: banner,
  title: 'Cosmetics',
  text:
    '우수한 기술력과 품질수준을 바탕으로 트렌드 파악, 상품 기획	개발, 출하, 관리에 이르기까지 체계적인 토털 서비스를 제공합니다. 브랜드 기업의 든든한 서포터로서 K뷰티가 세계로 뻗어나갈 수 있도록 지원합니다.',
};

const itemObj = [
  {
    img: imagePathArr[1],
    title: '화장품',
    titleEn: 'Cosmetics',
    category: '아모레퍼시픽 순플러스',
    description:
      '피부에 SOON을 더하다. 클린 뷰티를 지향하는 더마 코스메틱 브랜드',
    url: '/business/soonplus',
    color: '#C36C69',
  },
  {
    img: imagePathArr[0],
    title: '화장품',
    titleEn: 'Cosmetics',
    category: '아모레퍼시픽 이너프프로젝트',
    description:
      '아모레퍼시픽의 신 비건뷰티.모두를 위한 실용주의 화장품 브랜드.',
    url: '/business/enufproj',
    color: '#295B4A',
  },
];

const Cosmetics = () => {
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
        <div className='cosmetic_container'>
          <div className='dist_title'>
            <h1>화장품</h1>
          </div>
          <div className='dist_container'>
            {itemObj
              .filter((item) => {
                if (item.title === '화장품') return item;
              })
              .map((item) => {
                return (
                  <div className='dist_box'>
                    <div className='img_wrapper'>
                      <img src={item.img}></img>
                    </div>
                    <div className='text_wrapper'>
                      <span style={{ color: `${item.color}` }}>
                        {item.category}
                      </span>
                      <p>{item.description}</p>
                    </div>
                    <div className='detail_button'>
                      <a href={item.url} target='_self'>
                        <span>상세설명</span>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Cosmetics;
