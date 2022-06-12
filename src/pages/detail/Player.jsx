import React, { useEffect, useRef } from "react";
import "./detail.scss";

const Video = ({ src }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, []);

  return (
    <div className="video">
      <iframe
        src={src}
        frameBorder="0"
        allowFullScreen
        width="100%"
        title="video"
        ref={iframeRef}
      />
    </div>
  );
};

export default Video;
