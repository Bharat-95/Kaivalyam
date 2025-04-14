import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import multer from "multer";
import { promisify } from "util";
import fs from "fs";

// AWS S3 Configuration
const BUCKET_NAME = "kaivalyaevents";
const REGION = "ap-south-1";


const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
  },
});

const upload = multer({ 
  dest: "/tmp",
  limits: { fileSize: 50 * 1024 * 1024 } 
});
const uploadMiddleware = promisify(upload.single("file"));

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const category = formData.get("category") as string;

    if (!file || !category) {
      return NextResponse.json({ error: "File or category missing" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `gallery/${category}/${Date.now()}-${file.name}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
       
      })
    );

    const fileUrl = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${fileName}`;

    return NextResponse.json({ url: fileUrl }, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}


export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") || "";

    const prefix = category ? `gallery/${category}/` : `gallery/`;

    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: prefix,
    });

    const { Contents } = await s3.send(command);

    if (!Contents) return NextResponse.json([]);

    const images = Contents.map((item) => ({
      key: item.Key,
      url: `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${item.Key}`,
    }));

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error listing images:", error);
    return NextResponse.json({ error: "Failed to list images" }, { status: 500 });
  }
}
