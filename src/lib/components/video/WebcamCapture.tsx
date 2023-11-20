import {
  Badge,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { v4 as uuid } from 'uuid';

interface WebcamCaptureProps {
  companyName: string;
}

const WebcamCapture = ({ companyName }: WebcamCaptureProps) => {
  const webcamRef = useRef<Webcam | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [capturing, setCapturing] = useState<boolean>(false);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [webcamReady, setWebcamReady] = useState<boolean>(true);
  const [remainingTime, setRemainingTime] = useState<number>(15);
  const [webcamLoaded, setWebcamLoaded] = useState<boolean>(false);
  const videoConstraints = { width: 1940, height: 1480, facingMode: 'user' };

  const ffmpeg = createFFmpeg({
    corePath: "https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js",
    log: true,
  });

  const handleDataAvailable = useCallback(
    ({ data }: { data: Blob }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    setRecordedChunks([]);
    setRemainingTime(15);
    if (webcamRef.current && webcamRef.current.stream) {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: 'video/webm',
      });
      mediaRecorderRef.current.addEventListener(
        'dataavailable',
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setCapturing(false);
    setRemainingTime(0);
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = useCallback(async () => {
    if (recordedChunks.length) {
      // const file = new Blob(recordedChunks, {
      //   type: `video/mp4`,
      // });

      // const unique_id = "test";

      // // This checks if ffmpeg is loaded
      // if (!ffmpeg.isLoaded()) {
      //   await ffmpeg.load();
      // }

      // // This writes the file to memory, removes the video, and converts the audio to mp3
      // ffmpeg.FS("writeFile", `${unique_id}.mp4`, await fetchFile(file));
      // await ffmpeg.run();

      // // This reads the converted file from the file system
      // const fileData = await ffmpeg.FS("readFile", `${unique_id}.mp4`);
      // // This creates a new file from the raw data
      // const output = new File([fileData.buffer], `${unique_id}.mp4`, {
      //   type: "video/mp4",
      // });

      // const formData = new FormData();
      // formData.append("file", output, `${unique_id}.mp4`)
      const file = new Blob(recordedChunks, {
        type: `video/webm`,
      });

      const unique_id = uuid();

      // This checks if ffmpeg is loaded
      if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
      }

      // This writes the file to memory, removes the video, and converts the audio to mp3
      ffmpeg.FS("writeFile", `${unique_id}.webm`, await fetchFile(file));
      await ffmpeg.run();

      // This reads the converted file from the file system
      const fileData = ffmpeg.FS("readFile", `${unique_id}.webm`);

      // This creates a new file from the raw data
      const output = new File([fileData.buffer], `${unique_id}.webm`, {
        type: "video/webm",
      });

      const formData = new FormData();
      formData.append("file", output, `${unique_id}.webm`);

      // This sends the file to the server
      const response = await fetch("http://localhost:3000/api/whisper", {
        method: "POST",
        body: formData,
      });
      console.log(response);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const handleUserMedia = () => {
    setWebcamReady(true);
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    setTimeout(() => {
      setWebcamLoaded(true);
    }, 500);

    if (capturing) {
      timerId = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    }

    if (remainingTime === 0) {
      handleStopCaptureClick();
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [capturing, remainingTime, handleStopCaptureClick]);
  return (
    webcamLoaded && (
      <VStack spacing={4} align="center">
        <Box>
          <Heading
            py={8}
            textAlign="left"
            fontWeight="bold"
            whiteSpace="nowrap"
            w="100%"
          >
            Tell me about yourself. Why don’t you walk me through your resume?
          </Heading>
          <HStack spacing={4} align="center" position="relative" mt={6}>
            {webcamLoaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  onUserMedia={handleUserMedia}
                  videoConstraints={videoConstraints}
                  screenshotFormat="image/jpeg"
                  style={{ borderRadius: 4, scale: 1.0 }}
                />
              </motion.div>
            )}
            {capturing && (
              <Badge
                position="absolute"
                top="5%"
                left="85%"
                transform="translate(-50%, -50%)"
                fontSize="lg"
                zIndex={999}
                variant="solid"
                colorScheme="red"
              >
                Time remaining: {Math.floor(remainingTime / 60)}:
                {remainingTime % 60 < 10 ? '0' : ''}
                {remainingTime % 60}
              </Badge>
            )}

            <Box
              position="absolute"
              width={230}
              height={290}
              top="5%"
              left="75%"
            >
              <Image
                src="https://img.freepik.com/premium-photo/front-view-portrait-young-black-man-smiling-camera-job-interview_236854-43825.jpg"
                alt="interviewer"
                borderRadius={4}
              />
            </Box>
          </HStack>
        </Box>

        <Box textAlign="center">
          {!capturing && (
            <Button
              id="startTimer"
              size="sm"
              borderRadius="full"
              h="8"
              w="8"
              bg="red.500"
              color="white"
              _hover={{ boxShadow: 'xl' }}
              ring="4"
              ringColor="white"
              ringOffsetColor="gray.500"
              ringOffset="2"
              transform="active:scale-95"
              transitionDuration="75ms"
              justifyContent="center"
              alignItems="center"
              onClick={handleStartCaptureClick}
            />
          )}
        </Box>

        {!capturing && recordedChunks.length > 0 && (
          <Center>
            <Button colorScheme="blue" onClick={handleDownload}>
              Download
            </Button>
          </Center>
        )}

        {capturing && (
          <Button
            id="startTimer"
            size="sm"
            borderRadius="full"
            h="8"
            w="8"
            bg="red.500"
            color="white"
            _hover={{ boxShadow: 'xl' }}
            ring="4"
            ringColor="white"
            ringOffsetColor="gray.500"
            ringOffset="2"
            transform="active:scale-95"
            transitionDuration="75ms"
            justifyContent="center"
            alignItems="center"
            onClick={handleStopCaptureClick}
          />
        )}

        <Box>
          {capturing && (
            <Text mt={4} fontSize="sm" color="gray.500">
              Recording in progress...
            </Text>
          )}
        </Box>
      </VStack>
    )
  );
};

export default WebcamCapture;