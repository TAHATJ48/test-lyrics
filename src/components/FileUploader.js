// src/components/FileUploader.js
import React, { useState } from 'react';

const FileUploader = ({ onSrtLoad, onAudioLoad }) => {
  const [srtFile, setSrtFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  const handleSrtFileChange = (e) => {
    setSrtFile(e.target.files[0]);
  };

  const handleAudioFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleFileLoad = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      onSrtLoad(e.target.result);
    };
    if (srtFile) {
      reader.readAsText(srtFile);
    }

    if (audioFile) {
      const audioURL = URL.createObjectURL(audioFile);
      onAudioLoad(audioURL);
    }
  };

  return (
    <div>
      <input type="file" accept=".srt" onChange={handleSrtFileChange} />
      <input type="file" accept="audio/*" onChange={handleAudioFileChange} />
      <button onClick={handleFileLoad}>Load Files</button>
    </div>
  );
};

export default FileUploader;
