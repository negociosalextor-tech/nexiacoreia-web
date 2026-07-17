import { ImageResponse } from "next/og";
import { OgImageTemplate, ogSize, ogContentType } from "@/lib/og";

export const alt = "Servicios | NexiaCore IA";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return new ImageResponse(
    (
      <OgImageTemplate
        eyebrow="Nuestras Soluciones"
        title="12 soluciones de IA para transformar su operación"
      />
    ),
    { ...size }
  );
}
