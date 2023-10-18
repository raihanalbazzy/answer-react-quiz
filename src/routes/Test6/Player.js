import { useRef, useState, useEffect } from 'react';
import { buttonContainer, cssVideo, videoContainer } from './style';

const secondToMinutes = (sec) => {
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  return {
    min: min,
    sec: secRemain,
  };
};

const formatDurationDisplay = (sec) => {
  const { 0: first, 1: second } = sec;
  const duration = first < 10 ? `0${first}` : first;
  const duration2 = second < 10 ? `0${second}` : second;
  return `${duration}:${duration2}`;
};

function Duation(props) {
  const { videoRef, isPaused } = props;
  const [currentTime, setCurrentTime] = useState([0, 0]);
  const [duration, setDuration] = useState([0, 0]);

  useEffect(() => {
    const { min = 0, sec = 0 } = secondToMinutes(videoRef.current.duration);
    if (!isNaN(min) && !isNaN(sec)) {
      setDuration([min, sec]);
    }

    const interval = setInterval(() => {
      const { min = 0, sec = 0 } = secondToMinutes(
        videoRef.current.currentTime
      );
      setCurrentTime([min, sec]);
    }, 1000);

    if (isPaused) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPaused]);
  return (
    <span key={props.isPaused}>
      {formatDurationDisplay(currentTime)} / {formatDurationDisplay(duration)}
    </span>
  );
}

const Player = () => {
  const videoRef = useRef(null);
  const [isPaused, setPaused] = useState(true);
  const [isMuted, setMuted] = useState(false);

  const onPlayPaused = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        setPaused(false);
        return videoRef.current.play();
      }
      setPaused(true);
      videoRef.current.pause();
    }
  };

  const onUpdateVolume = (event) => {
    const volumeRaw = event.target.value;
    if (videoRef.current) {
      videoRef.current.volume = volumeRaw / 100;
    }
  };

  const onMutedVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted((prev) => !prev);
    }
  };

  return (
    <div className={videoContainer}>
      <video
        ref={videoRef}
        className={cssVideo}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      <div className={buttonContainer}>
        <button onClick={onPlayPaused} type="button">
          {isPaused ? 'Play' : 'Paused'}
        </button>
        <button onClick={onMutedVideo} type="button">
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <input type="range" min={0} max={100} onChange={onUpdateVolume} />
        <Duation isPaused={isPaused} videoRef={videoRef} />
      </div>
    </div>
  );
};

export default Player;
