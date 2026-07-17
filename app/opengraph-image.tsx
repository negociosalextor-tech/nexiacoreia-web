import { ImageResponse } from "next/og";
import { OgImageTemplate, ogSize, ogContentType } from "@/lib/og";

export const alt = "NexiaCore IA";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return new ImageResponse(
    (
      <OgImageTemplate
        eyebrow="Chile y Latinoamérica"
        title="El nexo inteligente entre tu negocio y la automatización"
      />
    ),
    { ...size }
  );
}
