import PageLayout from '../../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { useRouter } from 'next/router';
import bgImage from '../../static/images/enuf_bg.png';

const Company = () => {
  const router = useRouter();
  console.log(router);
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div className='enuf_container'>
          <img src={bgImage}></img>
          <div className='enuf_text_wrapper'>
            <h1>모두를 위한 실용주의 뷰티</h1>
            <p>
              이너프 프로젝트는 “충분하면 만족하세요. 우리는 이미, 이 자체로,
              이렇게나 충분합니다.”라는 철학으로 출발하였습니다. 본질에
              집중하고, 불필요한 것들을 제거한 실용주의 화장품 브랜드입니다.
              이러한 브랜드 철학을 만족시키고자 이너프 프로젝트는 둥물성 원료를
              사용하지 않고, 불필요한 실험을 하지 않습니다. 그리고 나이에
              관계없이 사용하기 좋은 사용감, 성별에 구애받지 않는 디자인과 향을
              추구합니다. 누구도 차별받지 않으면서, 모두에게 필요한 본질을
              제공하는 것. 이것만으로도 ENOUGH. 우리가 추구하는 지향점입니다.
            </p>
          </div>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Company;
