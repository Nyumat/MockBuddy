// import OpenAI from "openai";
// const fs = require("fs");
// import { NextApiRequest, NextApiResponse } from 'next'
// import { NextResponse } from "next/server";

// export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  
//   const openai = new OpenAI();
  

//   // Here, we create a temporary file to store the audio file using Vercel's tmp directory
//   // As we compressed the file and are limiting recordings to 2.5 minutes, we won't run into trouble with storage capacity
//   const data = await req.formData();
//   const file = await data.get('file');
//   console.log(file)

//   try {
//     const resp = await openai.audio.transcriptions.create({
//       file: file,
//       model: "whisper-1"
//     });
//     const transcript = resp
//     return NextResponse.json({ transcript });
//   } catch (error) {
//     console.error("server error", error);
//     return NextResponse.error();
//   }
// }

import { Configuration, OpenAIApi } from "openai";
import { IncomingForm } from "formidable";
const fs = require("fs");
const path = require('path');
import { NextResponse } from 'next/server';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: any) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  // Here, we create a temporary file to store the audio file using Vercel's tmp directory
  // As we compressed the file and are limiting recordings to 2.5 minutes, we won't run into trouble with storage capacity
  const formData = await req.formData();
  const file = await formData.get('file');
  const videoFilePath = path.join(file?.name);

  try {
    const resp = await openai.createTranscription(
      fs.createReadStream(videoFilePath),
      "whisper-1"
    );

    const transcript = resp?.data?.text;
    console.log(resp)

    return NextResponse.json({ message: 'Got transcript', transcript });
  } catch (error) {
    console.error("server error", error);
    return NextResponse.json({ message: 'Internal server error' })
  }
}
