import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY
  },
});

export async function POST(req) {
  try {
    const { key } = await req.json();
    if (!key) {
      return new Response(JSON.stringify({ error: "Missing image key" }), { status: 400 });
    }

    const params = {
      Bucket: "kaivalyaevents",
      Key: key,
    };

    await s3.send(new DeleteObjectCommand(params));

    return new Response(JSON.stringify({ message: "Image deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
