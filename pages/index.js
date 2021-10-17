import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Index = () => {
  const router = useRouter();
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <div className='bgContainer'>
        <img src='../static/images/background.png'></img>
      </div>
      <div className='cardContainer'>
        <img src='../static/images/card.png'></img>
      </div>
      <div className='mirrorContainer'>
        <img src='../static/images/mirror.png'></img>
      </div>
      <div className='textContainer'>
        <div>
          <img src='../static/images/textKr.png'></img>
        </div>
        <div>
          <img src='../static/images/textEn.png'></img>
        </div>
      </div>
      <div className='invitationBtn'></div>
      <div className='invitationText'>
        <img src='../static/images/textBtn.png'></img>
      </div>
      <audio controls autoPlay src='/sound.mp3' />
    </ThemeProvider>
  );
};

export default Index;
