// src/App.js
import React, { useState, useEffect } from 'react';
import FileUploader from './components/FileUploader';
import AudioPlayer from './components/AudioPlayer';
import LyricsDisplay from './components/LyricsDisplay';
import SubtitlesParser from 'subtitles-parser';

const App = () => {
  const [subtitles, setSubtitles] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioSrc, setAudioSrc] = useState('');

  const handleLoadSubtitles = (srtContent) => {
    const subs = SubtitlesParser.fromSrt(srtContent, true);
    setSubtitles(subs);
  };

  const handleLoadAudio = (audioURL) => {
    setAudioSrc(audioURL);
  };

  useEffect(() => {
    let interval;
    if (audioSrc) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [audioSrc]);
  return (
    <div>
      <FileUploader onSrtLoad={handleLoadSubtitles} onAudioLoad={handleLoadAudio} />
      {audioSrc && (
        <AudioPlayer
          src={audioSrc}
          onPlay={() => setCurrentTime(0)}
          onPause={() => clearInterval()}
          onStop={() => {
            setCurrentTime(0);
            clearInterval();
          }}
        />
      )}
      <LyricsDisplay subtitles={subtitles} currentTime={currentTime} />
    </div>
  );
};

export default App;
