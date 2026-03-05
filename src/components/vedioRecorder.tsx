"use client";
import React, { useRef, useState } from "react";

type VideoRecorderProps = {
  recording: boolean;
  setRecording: React.Dispatch<React.SetStateAction<boolean>>;
  onStart?: () => void; // 👈 new prop
};
  
const VideoRecorder = ({ recording, setRecording, onStart }: VideoRecorderProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const chunks = useRef<Blob[]>([]);

 const startRecording = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }

    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (e) => chunks.current.push(e.data);

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks.current, { type: "video/webm" });
      chunks.current = [];
      const url = URL.createObjectURL(blob);
      setVideoURL(url);
      stream.getTracks().forEach((track) => track.stop());
    };

    chunks.current = [];
    mediaRecorderRef.current.start();
    setRecording(true);

    // 👇 force Swiper to update after short delay
    setTimeout(() => {
      if (onStart) onStart();
    }, 300);
  } catch (err) {
    console.error("Camera error:", err);
  }
};


  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <div className="flex  items-center justify-center gap-4 my-5 ">
     <div className="flex flex-col items-center gap-4 ">
       <video ref={videoRef} autoPlay className="w-100 rounded-lg  border shadow" />

      <div className="flex gap-3">
        {!recording ? (
          <button
            onClick={startRecording}
            className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
          >
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
          >
            Stop Recording
          </button>
        )}
      </div>
     </div>

      {videoURL && (
        <div className=" flex flex-col items-center">
          <video src={videoURL} controls className="w-100 rounded-lg shadow" />
          <a
            href={videoURL}
            download="recorded-video.webm"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
          >
            Download Video
          </a>
        </div>
      )}
    </div>
  );
};

export default VideoRecorder;
