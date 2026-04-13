import { readFileSync } from "fs";
import { ImageResponse } from "next/og";
import { join } from "path";

export const runtime = "nodejs";

export const alt = "Irving Dinh";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const avatarData = readFileSync(join(process.cwd(), "src/images/avatar.jpg"));
  const avatarBase64 = `data:image/jpeg;base64,${avatarData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#18181b",
        padding: "60px",
      }}
    >
      <img
        src={avatarBase64}
        width={180}
        height={180}
        style={{
          borderRadius: "50%",
          border: "4px solid #3f3f46",
        }}
      />
      <div
        style={{
          marginTop: "32px",
          fontSize: "48px",
          fontWeight: 700,
          color: "#fafafa",
          textAlign: "center",
        }}
      >
        Irving Dinh
      </div>
      <div
        style={{
          marginTop: "16px",
          fontSize: "24px",
          color: "#a1a1aa",
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        Software engineer, designer, and amateur photographer
      </div>
    </div>,
    { ...size },
  );
}
