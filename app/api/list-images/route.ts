import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const BUCKET_NAME = "kaivalyaevents";
const REGION = "ap-south-1";

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function GET() {
  try {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: "gallery/", // only images inside /gallery/
    });

    const { Contents } = await s3.send(command);

    if (!Contents) {
      return NextResponse.json({ images: [] }, { status: 200 });
    }

    const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

    const imageUrls = Contents
      .filter(
        (item) =>
          item.Key &&
          !item.Key.endsWith("/") && // skip folders
          allowedExtensions.some((ext) =>
            item.Key!.toLowerCase().endsWith(ext)
          )
      )
      .map((item) => {
        const key = item.Key!;
        const parts = key.split("/"); // gallery/category/filename
        return {
          key,
          url: `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${key}`,
          category: parts[1] || "uncategorized",
          lastModified: item.LastModified, // 🆕 include this!
        };
      });
      
    return NextResponse.json({ images: imageUrls }, { status: 200 });
  } catch (error) {
    console.error("Error listing images:", error);
    return NextResponse.json(
      { error: "Failed to list images" },
      { status: 500 }
    );
  }
}
