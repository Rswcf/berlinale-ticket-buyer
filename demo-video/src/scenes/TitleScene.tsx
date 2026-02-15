import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";
import { theme } from "../theme";

export const TitleScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Film emoji entrance
  const emojiScale = spring({ frame, fps, config: { damping: 8 } });

  // Title entrance
  const titleY = interpolate(
    spring({ frame, fps, delay: 8, config: { damping: 200 } }),
    [0, 1],
    [60, 0]
  );
  const titleOpacity = spring({ frame, fps, delay: 8, config: { damping: 200 } });

  // Subtitle typewriter
  const subtitle = "Never miss a Berlinale screening again.";
  const typewriterProgress = interpolate(
    frame,
    [1.2 * fps, 3 * fps],
    [0, subtitle.length],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const displayedSubtitle = subtitle.slice(0, Math.round(typewriterProgress));
  const cursorVisible = frame % 30 < 20 ? 1 : 0;

  // Tech badges
  const badgeOpacity = interpolate(frame, [3.2 * fps, 3.8 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: theme.font,
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.accent}15 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Film emoji */}
      <div
        style={{
          fontSize: 90,
          transform: `scale(${emojiScale})`,
          marginBottom: 20,
        }}
      >
        🎬
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          color: theme.accent,
          letterSpacing: -2,
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
        }}
      >
        Berlinale Ticket Buyer
      </div>

      {/* Subtitle with typewriter */}
      <div
        style={{
          fontSize: 28,
          color: theme.textSecondary,
          marginTop: 16,
          fontWeight: 400,
          height: 40,
        }}
      >
        {displayedSubtitle}
        <span style={{ opacity: cursorVisible, color: theme.accent }}>|</span>
      </div>

      {/* Tech badges */}
      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 40,
          opacity: badgeOpacity,
        }}
      >
        {["Python", "FastAPI", "Playwright"].map((tech, i) => (
          <div
            key={tech}
            style={{
              padding: "8px 20px",
              borderRadius: 20,
              border: `1px solid ${theme.border}`,
              color: theme.textSecondary,
              fontSize: 16,
              fontWeight: 500,
              background: "rgba(255,255,255,0.04)",
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
