import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaStop, FaBackward, FaForward } from 'react-icons/fa';

const AudioPlayer = ({ audioFile }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const updateDuration = () => {
    setDuration(audioRef.current.duration);
  };

  const playAudio = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log('Error playing audio:', error);
          });
      }
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const changeSpeed = newSpeed => {
    audioRef.current.playbackRate = newSpeed;
    setSpeed(newSpeed);
  };

  const seekTo = time => {
    audioRef.current.currentTime = time;
  };

  const handleBackward = () => {
    audioRef.current.currentTime -= 5; // Move 5 seconds backward
  };

  const handleForward = () => {
    audioRef.current.currentTime += 5; // Move 5 seconds forward
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <audio ref={audioRef}>
        <source src={audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="container mb-3">
        <div className="row playContainer align-items-center pb-4 justify-content-center">
          <div className="col-md-auto col-sm-4 playButton ms-2 me-2 mt-3" onClick={isPlaying ? pauseAudio : playAudio}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
          <div className="col-md-auto col-sm-4 playButton ms-2 me-2 mt-3" onClick={stopAudio}>
            <FaStop />
          </div>
          <div className="col-md-auto col-sm-4 playButton ms-2 me-2 mt-3" onClick={handleBackward}>
            <FaBackward />
          </div>
          <div className="col-md-auto col-sm-4 playButton ms-2 me-2 mt-3" onClick={handleForward}>
            <FaForward />
          </div>
          <div className="col-md-auto col-sm-4 playButton ms-2 me-2 mt-3" onClick={() => changeSpeed(1)}>
            1.0
          </div>
          <div className="col-md-auto col-sm-4 playButton ms-2 me-2 mt-3" onClick={() => changeSpeed(1.3)}>
            1.3
          </div>
          <div className="col-md-auto col-sm-4 playButton ms-2 me-2 mt-3" onClick={() => changeSpeed(1.6)}>
            1.6
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="text-center playButtonTimeOver" style={{ marginTop: '-15px', fontSize: '14px' }}>
            <span className='playButtonTimeOverCurrent'>{formatTime(currentTime)}</span> - <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col">
          <div className="timeline-container">
            <div className="timeline">
              <div
                className="timeline-indicator"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
