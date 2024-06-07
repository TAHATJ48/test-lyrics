import audioFile from './files/AudioFile.mp3'

import React from "react";
const AudioComponent = () => {
  return (
    <div>
      <audio controls autoPlay>
        <source
          id="audio-player"
          name="audio-player"
          src={audioFile}
          type="audio/mp3"
        />
      </audio>
    </div>
  );
};

export default AudioComponent;