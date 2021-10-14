import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Index = () => {
  const router = useRouter();
  const [autoPlay, setAutoPlay] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      {/* <audio controls autoPlay src='/sound.mp3' />
      <p>여러분을 초대합니다.</p> */}
      coming soon
    </ThemeProvider>
  );
};

export default Index;
