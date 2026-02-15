import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { theme } from "../theme";

export const WatchScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = spring({ frame, fps, config: { damping: 200 } });

  // Phase 1: Sold out badge (0-3s)
  const soldOutPhase = frame < 3.5 * fps;

  // Pulse animation for watching indicator
  const pulseValue = Math.sin(frame * 0.15) * 0.3 + 0.7;

  // Phase 2: Transition to available (3.5s)
  const transitionPhase = frame >= 3.5 * fps;
  const transitionSpring = transitionPhase
    ? spring({
        frame: frame - 3.5 * fps,
        fps,
        config: { damping: 8, stiffness: 200 },
      })
    : 0;

  // Phase 3: Auto-grab trigger (5s)
  const autoGrabPhase = frame >= 5 * fps;
  const autoGrabSpring = autoGrabPhase
    ? spring({
        frame: frame - 5 * fps,
        fps,
        config: { damping: 12 },
      })
    : 0;

  // Poll counter
  const pollCount = Math.floor(frame / (fps * 0.5));
  const pollFlash =
    frame % Math.round(fps * 0.5) < 3 ? 1 : 0;

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
      {/* Title */}
      <div
        style={{
          fontSize: 36,
          fontWeight: 700,
          color: theme.text,
          marginBottom: 50,
          opacity: titleOpacity,
        }}
      >
        Sold-out Watching
      </div>

      {/* Film info card */}
      <div
        style={{
          width: 700,
          background: theme.bgCard,
          border: `1px solid ${theme.border}`,
          borderRadius: theme.radiusLg,
          padding: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 20, fontWeight: 600, color: theme.text }}>
              Dreams
            </div>
            <div
              style={{
                fontSize: 14,
                color: theme.textSecondary,
                marginTop: 4,
              }}
            >
              Sun Feb 15 · 21:30 · Berlinale Palast
            </div>
          </div>

          {/* Ticket state badge with transition */}
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: 16,
              background: transitionPhase
                ? `rgba(34,197,94,${0.15 * transitionSpring})`
                : "rgba(239,68,68,.12)",
              color: transitionPhase
                ? interpolate(
                    transitionSpring,
                    [0, 1],
                    [0, 1]
                  ) > 0.5
                  ? theme.green
                  : theme.red
                : theme.red,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              transform: `scale(${transitionPhase ? 1 + transitionSpring * 0.15 : 1})`,
            }}
          >
            {transitionPhase && transitionSpring > 0.5
              ? "AVAILABLE"
              : "SOLD OUT"}
          </div>
        </div>

        {/* Watching status bar */}
        <div
          style={{
            marginTop: 16,
            padding: "12px 16px",
            background: theme.bgSurface,
            borderRadius: theme.radius,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: autoGrabPhase ? theme.green : theme.blue,
                opacity: soldOutPhase ? pulseValue : 1,
                boxShadow: soldOutPhase
                  ? `0 0 ${8 * pulseValue}px ${theme.blue}`
                  : autoGrabPhase
                  ? `0 0 8px ${theme.green}`
                  : "none",
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: autoGrabPhase ? theme.green : theme.blue,
              }}
            >
              {autoGrabPhase
                ? "Auto-grab triggered!"
                : transitionPhase
                ? "Ticket returned!"
                : "Watching..."}
            </span>
          </div>

          <div
            style={{
              fontSize: 12,
              color: theme.textDim,
              fontFamily: theme.mono,
            }}
          >
            Polling every{" "}
            <span style={{ color: theme.yellow }}>5s</span>{" "}
            · {pollCount} checks
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: theme.yellow,
                marginLeft: 8,
                opacity: pollFlash,
              }}
            />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginTop: 50,
        }}
      >
        {[
          { label: "Sold Out", color: theme.red, active: soldOutPhase },
          { label: "Polling", color: theme.blue, active: soldOutPhase },
          {
            label: "Ticket Returns",
            color: theme.green,
            active: transitionPhase,
          },
          {
            label: "Auto-Grab!",
            color: theme.accent,
            active: autoGrabPhase,
          },
        ].map((step, i) => (
          <div key={step.label} style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {i > 0 && (
              <div
                style={{
                  width: 40,
                  height: 2,
                  background: step.active ? step.color : theme.border,
                }}
              />
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: step.active ? step.color : theme.border,
                  border: `2px solid ${step.active ? step.color : theme.textDim}`,
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: step.active ? step.color : theme.textDim,
                }}
              >
                {step.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Success flash */}
      {autoGrabPhase && (
        <div
          style={{
            position: "absolute",
            bottom: 80,
            padding: "14px 28px",
            borderRadius: theme.radius,
            background: theme.green,
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
            opacity: autoGrabSpring,
            transform: `scale(${interpolate(autoGrabSpring, [0, 1], [0.8, 1])})`,
          }}
        >
          ✓ Returned ticket grabbed automatically!
        </div>
      )}
    </AbsoluteFill>
  );
};
