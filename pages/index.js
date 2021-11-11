import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import Cursor from '../components/Cursor';
import React from 'react';

const Index = () => {
  const router = useRouter();
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
    console.log(audioRef);
  }, [playing]);

  return (
    <ThemeProvider theme={theme}>
      <div
        onClick={() => {
          setPlaying(true);
          audioRef.current.play();
        }}
      >
        <div className='desktop'>
          <Cursor></Cursor>
        </div>
        <div className='bgContainer'></div>
        <div className='cardContainer'>
          <img id='mobile' src='../static/images/mobile_card.png'></img>
          <img id='ipad' src='../static/images/ipad_card.png'></img>
          <img id='desktop' src='../static/images/card.png'></img>
        </div>
        <div className='mirrorContainer'>
          <img src='../static/images/mirror.png'></img>
        </div>
        <div className='textContainer'>
          <div>
            <img src='../static/images/text.svg'></img>
          </div>
        </div>
        <div className='invitationBtn'></div>

        <div className='invitationText'>
          <img src='../static/images/textBtn.png'></img>
        </div>

        <div className='audio_player'>
          <audio autoPlay src='/sound.mp3' ref={audioRef} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
