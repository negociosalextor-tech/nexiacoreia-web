import { ImageResponse } from "next/og";
import { OgImageTemplate, ogSize, ogContentType } from "@/lib/og";
import { getServicePageContent } from "@/lib/service-content";

export const alt = "NexiaCore IA";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getServicePageContent(slug);

  return new ImageResponse(
    (
      <OgImageTemplate
        eyebrow={content?.eyebrow ?? "Servicios"}
        title={content?.h1 ?? "NexiaCore IA"}
      />
    ),
    { ...size }
  );
}
