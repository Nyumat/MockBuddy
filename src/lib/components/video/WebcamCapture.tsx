/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = React.useRef<any>(null);
  const mediaRecorderRef = React.useRef<any>(null);
  const [capturing, setCapturing] = React.useState<any>(false);
  const [recordedChunks, setRecordedChunks] = React.useState<any>([]);

  const handleStartCaptureClick = React.useCallback(() => {
    if (webcamRef.current && mediaRecorderRef.current) {
      setCapturing(true);
      mediaRecorderRef.current.start();
    }
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleStopCaptureClick = React.useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = url;
      a.download = 'react-webcam-stream-capture.webm';
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <>
      <Webcam audio={false} ref={webcamRef} />
      {capturing ? (
        <button type="button" onClick={handleStopCaptureClick}>
          Stop Capture
        </button>
      ) : (
        <button type="button" onClick={handleStartCaptureClick}>
          Start Capture
        </button>
      )}
      {recordedChunks.length > 0 && (
        <button type="button" onClick={handleDownload}>
          Download
        </button>
      )}
    </>
  );
};

export default WebcamCapture;
