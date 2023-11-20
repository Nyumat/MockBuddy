import OpenAI from "openai";
const fs = require("fs");
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from "next/server";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  
  const openai = new OpenAI();
  

  // Here, we create a temporary file to store the audio file using Vercel's tmp directory
  // As we compressed the file and are limiting recordings to 2.5 minutes, we won't run into trouble with storage capacity
  const data = await req.formData();
  const file = await data.get('file');
  console.log(file)

  try {
    const resp = await openai.audio.transcriptions.create({
      file: file,
      model: "whisper-1"
    });
    const transcript = resp
    return NextResponse.json({ transcript });
  } catch (error) {
    console.error("server error", error);
    return NextResponse.error();
  }
}
