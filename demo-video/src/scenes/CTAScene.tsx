import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { theme } from "../theme";

export const CTAScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Features list entrance
  const features = [
    "340+ Films · 25 Sections",
    "Real-time Ticket Monitoring",
    "Precision-timed Auto-Purchase",
    "Sold-out Watching & Recovery",
    "Persistent Browser Session",
  ];

  // GitHub URL entrance
  const urlOpacity = interpolate(frame, [3 * fps, 3.8 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Star button
  const starBounce = frame > 5 * fps
    ? spring({
        frame: frame - 5 * fps,
        fps,
        config: { damping: 8, stiffness: 200 },
      })
    : 0;

  // Open source badge
  const badgeOpacity = interpolate(frame, [6.5 * fps, 7.2 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.bg,
        fontFamily: theme.font,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${theme.accent}10 0%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Features summary */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 12,
          marginBottom: 50,
          maxWidth: 900,
        }}
      >
        {features.map((feat, i) => {
          const delay = i * 0.3 * fps;
          const featSpring = spring({
            frame,
            fps,
            delay,
            config: { damping: 200 },
          });
          return (
            <div
              key={feat}
              style={{
                padding: "8px 20px",
                borderRadius: 20,
                border: `1px solid ${theme.border}`,
                color: theme.textSecondary,
                fontSize: 15,
                fontWeight: 500,
                background: "rgba(255,255,255,0.03)",
                opacity: featSpring,
                transform: `translateY(${interpolate(featSpring, [0, 1], [20, 0])}px)`,
              }}
            >
              {feat}
            </div>
          );
        })}
      </div>

      {/* Title */}
      <div
        style={{
          fontSize: 52,
          fontWeight: 700,
          color: theme.text,
          marginBottom: 16,
          opacity: spring({ frame, fps, delay: 1 * fps, config: { damping: 200 } }),
        }}
      >
        🎬 Berlinale Ticket Buyer
      </div>

      {/* GitHub URL */}
      <div
        style={{
          fontSize: 22,
          fontFamily: theme.mono,
          color: theme.accent,
          opacity: urlOpacity,
          marginBottom: 40,
          letterSpacing: -0.5,
        }}
      >
        github.com/Rswcf/berlinale-ticket-buyer
      </div>

      {/* Star button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 36px",
          borderRadius: 12,
          background: theme.accent,
          color: "#fff",
          fontSize: 20,
          fontWeight: 700,
          transform: `scale(${interpolate(starBounce, [0, 1], [0.5, 1])})`,
          opacity: starBounce,
        }}
      >
        <span style={{ fontSize: 28 }}>⭐</span>
        Star on GitHub
      </div>

      {/* Open source badge */}
      <div
        style={{
          display: "flex",
          gap: 24,
          marginTop: 40,
          opacity: badgeOpacity,
        }}
      >
        <span style={{ color: theme.textDim, fontSize: 15 }}>
          Open Source · MIT License
        </span>
        <span style={{ color: theme.textDim, fontSize: 15 }}>
          Python · FastAPI · Playwright
        </span>
      </div>
    </AbsoluteFill>
  );
};
