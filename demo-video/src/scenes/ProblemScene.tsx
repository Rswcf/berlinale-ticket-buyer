import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";
import { theme } from "../theme";

export const ProblemScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Countdown: 10:00:00 → 10:00:05
  const countdownSeconds = interpolate(frame, [0, 2.5 * fps], [0, 5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.linear,
  });
  const displaySeconds = Math.floor(countdownSeconds)
    .toString()
    .padStart(2, "0");

  // SOLD OUT flash
  const soldOutPhase = frame > 2.5 * fps;
  const soldOutOpacity = soldOutPhase
    ? spring({
        frame: frame - 2.5 * fps,
        fps,
        config: { damping: 8, stiffness: 200 },
      })
    : 0;
  const soldOutScale = soldOutPhase
    ? interpolate(
        spring({
          frame: frame - 2.5 * fps,
          fps,
          config: { damping: 8, stiffness: 200 },
        }),
        [0, 1],
        [1.4, 1]
      )
    : 1.4;

  // Red flash background
  const flashOpacity = soldOutPhase
    ? interpolate(
        frame - 2.5 * fps,
        [0, 0.2 * fps, 0.6 * fps],
        [0, 0.3, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      )
    : 0;

  // Problem text
  const problemOpacity = interpolate(frame, [3.5 * fps, 4.2 * fps], [0, 1], {
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
      {/* Red flash overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: theme.red,
          opacity: flashOpacity,
        }}
      />

      {/* "Berlinale tickets go on sale at..." */}
      <div
        style={{
          fontSize: 24,
          color: theme.textSecondary,
          marginBottom: 20,
          opacity: interpolate(frame, [0, 0.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Berlinale tickets go on sale at exactly
      </div>

      {/* Clock display */}
      <div
        style={{
          fontSize: 120,
          fontFamily: theme.mono,
          fontWeight: 700,
          color: soldOutPhase ? theme.red : theme.text,
          letterSpacing: 4,
        }}
      >
        10:00:{displaySeconds}
      </div>

      {/* SOLD OUT stamp */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${soldOutScale}) rotate(-12deg)`,
          opacity: soldOutOpacity,
          fontSize: 96,
          fontWeight: 900,
          color: theme.red,
          border: `6px solid ${theme.red}`,
          padding: "10px 40px",
          borderRadius: 12,
          letterSpacing: 8,
          textTransform: "uppercase",
        }}
      >
        SOLD OUT
      </div>

      {/* Problem statement */}
      <div
        style={{
          fontSize: 22,
          color: theme.textSecondary,
          marginTop: 60,
          opacity: problemOpacity,
          textAlign: "center",
          lineHeight: 1.6,
        }}
      >
        Popular films sell out in{" "}
        <span style={{ color: theme.red, fontWeight: 700 }}>seconds</span>.
        <br />
        What if you could automate the entire process?
      </div>
    </AbsoluteFill>
  );
};
