import React, { useState } from 'react';
import SubtitlesParser from 'subtitles-parser';

const SrtParser = ({ onLoad }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileLoad = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const subtitles = SubtitlesParser.fromSrt(e.target.result, true);
      onLoad(subtitles);
    };
    if (file) {
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".srt" onChange={handleFileChange} />
      <button onClick={handleFileLoad}>Load SRT</button>
    </div>
  );
};

export default SrtParser;
