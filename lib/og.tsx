export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function OgImageTemplate({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#001a33",
        backgroundImage:
          "linear-gradient(135deg, #001a33 0%, #002244 55%, #003366 100%)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 56,
            height: 56,
            backgroundColor: "#00CC99",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#001a33", fontSize: 32, fontWeight: 700 }}>
            N
          </span>
        </div>
        <span style={{ color: "#ffffff", fontSize: 28, fontWeight: 700 }}>
          NexiaCore <span style={{ color: "#00CC99" }}>IA</span>
        </span>
      </div>

      <div style={{ display: "flex", marginTop: 64 }}>
        <span
          style={{
            color: "#00CC99",
            fontSize: 24,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          {eyebrow}
        </span>
      </div>
      <div style={{ display: "flex", marginTop: 16, maxWidth: 950 }}>
        <span
          style={{
            color: "#ffffff",
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
