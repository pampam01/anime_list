"use client";
import { useState } from "react";
import { XCircle } from "@phosphor-icons/react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const options = {
    height: "250",
    width: "250",
  };
  const handleClose = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleClose}
          className="text-color-primary float-right bg-color-secondary px-2 mb-1"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={options}
          onError={() => alert("video bermasalah, coba lagi nanti")}
        />
      </div>
    );
  };

  const ButtonPlayer = () => {
    return (
      <button
        onClick={handleClose}
        className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl"
      >
        Tonton Thriler
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonPlayer />;
};

export default VideoPlayer;
