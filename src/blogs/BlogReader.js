import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';

const BlogReader = ({ contentUrl }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [blogContent, setBlogContent] = useState('');
  const [currentTime, setCurrentTime] = useState('00:00');
  const [readingTime, setReadingTime] = useState('');
  const [isPlayButtonSelected, setIsPlayButtonSelected] = useState(false);
  const [speech, setSpeech] = useState(null);

  const fetchBlogContent = async () => {
    try {
      const response = await fetch(contentUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch blog content');
      }
      const content = await response.text();
      setBlogContent(content);
    } catch (error) {
      console.error(error);
    }
  };

  const speak = () => {
    if (!speech) {
      const newSpeech = new SpeechSynthesisUtterance(blogContent);
      newSpeech.lang = 'en-US';
      newSpeech.rate = 1;
      newSpeech.pitch = 1;
      setSpeech(newSpeech);
    }
    if (speech) {
      window.speechSynthesis.cancel(); // Cancel any existing speech synthesis
      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
      setIsPaused(false);
      setIsPlayButtonSelected(true);
    }
  };

  const pauseSpeaking = () => {
    window.speechSynthesis.pause();
    setIsSpeaking(false);
    setIsPaused(true);
    setIsPlayButtonSelected(false);
  };

  const resumeSpeaking = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsSpeaking(true);
      setIsPaused(false);
    }
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    setCurrentTime('00:00');
  };

  const calculateReadingTime = () => {
    const wordsPerMinute = 200; // Average reading speed in words per minute
    const wordCount = blogContent.split(' ').length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    setReadingTime(`${minutes} min read`);
  };

  useEffect(() => {
    fetchBlogContent();
    // Clean up the speech synthesis when the component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    let intervalId;
    let currentSpeechTime = 0;

    const updateCurrentTime = () => {
      if (!isPaused) {
        const minutes = Math.floor(currentSpeechTime / 60);
        const seconds = Math.floor(currentSpeechTime % 60);
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        setCurrentTime(formattedTime);
        currentSpeechTime++;
      }
    };

    if (isSpeaking) {
      intervalId = setInterval(updateCurrentTime, 1000);
    } else {
      clearInterval(intervalId);
      currentSpeechTime = 0;
    }

    const speechSynthesisBoundary = () => {
      if (!isPaused) {
        currentSpeechTime = Math.floor(window.speechSynthesis.currentTime);
      }
    };

    window.speechSynthesis.addEventListener('boundary', speechSynthesisBoundary);

    return () => {
      clearInterval(intervalId);
      window.speechSynthesis.removeEventListener('boundary', speechSynthesisBoundary);
    };
  }, [isSpeaking, isPaused]);

  useEffect(() => {
    calculateReadingTime();
  }, [blogContent]);

  return (
    <div>
      <div className="player">
        <div className="row mb-2">
          {isSpeaking ? (
            <div className="col-auto playButton mb-1 ms-3 me-2" onClick={pauseSpeaking}>
              <FontAwesomeIcon icon={faPlay} className={isPlayButtonSelected ? "text-info" : ""} />
            </div>
          ) : (
            <div className="col-auto playButton mb-1 ms-3 me-2" onClick={speak}>
              <FontAwesomeIcon icon={faPlay} className={isPlayButtonSelected ? "text-info" : ""} />
            </div>
          )}
          <div className="col-auto playButton mb-1 ms-3 me-2" onClick={stopSpeaking}>
            <FontAwesomeIcon icon={faStop} />
          </div>
          <div className="col-auto playButtonTime mb-1 ms-3 me-2 d-none" id="time">{currentTime}</div>
          <div className="col-auto playButtonTime mb-1 ms-3 me-2">{readingTime}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogReader;
