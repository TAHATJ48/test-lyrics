import React, { useEffect, useState } from 'react';

const LyricsDisplay = ({ subtitles, currentTime }) => {
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const [previousSubtitle, setPreviousSubtitle] = useState('');
  const [nextSubtitle, setNextSubtitle] = useState('');

  useEffect(() => {
    const currentIndex = subtitles.findIndex(
      (sub) => currentTime >= sub.startTime / 1000 && currentTime <= sub.endTime / 1000
    );

    if (currentIndex !== -1) {
      setCurrentSubtitle(subtitles[currentIndex].text);
      setPreviousSubtitle(subtitles[currentIndex - 1]?.text || '');
      setNextSubtitle(subtitles[currentIndex + 1]?.text || '');
    } else {
      setCurrentSubtitle('');
      setPreviousSubtitle('');
      setNextSubtitle('');
    }
  }, [currentTime, subtitles]);

  return (
    <div>
      <div style={{ color: '#ccc' }}>{previousSubtitle}</div>
      <div style={{ fontWeight: 'bold', fontSize: '1.5em' }}>{currentSubtitle}</div>
      <div style={{ color: '#ccc' }}>{nextSubtitle}</div>
    </div>
  );
};

export default LyricsDisplay;
