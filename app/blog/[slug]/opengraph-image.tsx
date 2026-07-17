import { ImageResponse } from "next/og";
import { OgImageTemplate, ogSize, ogContentType } from "@/lib/og";
import { getBlogPostBySlug } from "@/lib/blog";

export const alt = "NexiaCore IA";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  return new ImageResponse(
    (
      <OgImageTemplate eyebrow="Blog" title={post?.title ?? "NexiaCore IA"} />
    ),
    { ...size }
  );
}
