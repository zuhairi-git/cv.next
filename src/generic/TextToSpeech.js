
import React, { useEffect, useRef } from 'react';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';

const TextToSpeech = ({ textFile }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(textFile);
        const text = await response.text();
        await synthesizeSpeech(text);
      } catch (error) {
        console.error('Text file fetch error:', error);
      }
    };

    const synthesizeSpeech = async (text) => {
      try {
        const apiKey = '59e733ebb16a4e30b4e3151b60a4ce6d';
        const region = 'eastus';
        const audioConfig = sdk.AudioConfig.fromAudioElement(audioRef.current);
        const speechConfig = sdk.SpeechConfig.fromSubscription(apiKey, region);
        speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Audio16Khz32KBitRateMonoMp3;

        const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
        await synthesizer.speakTextAsync(text);
      } catch (error) {
        console.error('Text-to-Speech API error:', error);
      }
    };

    fetchData();
  }, [textFile]);

  return (
    <div>
      <audio ref={audioRef} controls>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default TextToSpeech;
