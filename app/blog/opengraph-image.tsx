import { ImageResponse } from "next/og";
import { OgImageTemplate, ogSize, ogContentType } from "@/lib/og";

export const alt = "Blog | NexiaCore IA";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return new ImageResponse(
    (
      <OgImageTemplate eyebrow="Blog" title="Ideas prácticas sobre IA aplicada" />
    ),
    { ...size }
  );
}
