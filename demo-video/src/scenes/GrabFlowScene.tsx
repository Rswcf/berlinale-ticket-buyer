import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";
import { theme } from "../theme";

const Step = ({
  label,
  sublabel,
  icon,
  active,
  completed,
}: {
  label: string;
  sublabel: string;
  icon: string;
  active: boolean;
  completed: boolean;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      width: 200,
    }}
  >
    <div
      style={{
        width: 80,
        height: 80,
        borderRadius: 20,
        background: completed
          ? theme.green
          : active
          ? theme.accent
          : theme.bgCard,
        border: `2px solid ${completed ? theme.green : active ? theme.accent : theme.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 36,
      }}
    >
      {completed ? "✓" : icon}
    </div>
    <div
      style={{
        fontSize: 18,
        fontWeight: 600,
        color: active || completed ? theme.text : theme.textDim,
        textAlign: "center",
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontSize: 13,
        color: theme.textSecondary,
        textAlign: "center",
      }}
    >
      {sublabel}
    </div>
  </div>
);

const Arrow = ({ opacity }: { opacity: number }) => (
  <div
    style={{
      fontSize: 32,
      color: theme.accent,
      opacity,
      marginTop: -30,
    }}
  >
    →
  </div>
);

export const GrabFlowScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Title entrance
  const titleOpacity = spring({ frame, fps, config: { damping: 200 } });

  // Step progression
  const step1Active = frame > 1 * fps;
  const step2Active = frame > 3 * fps;
  const step3Active = frame > 5 * fps;
  const step4Active = frame > 7 * fps;

  const step1Done = frame > 3 * fps;
  const step2Done = frame > 5 * fps;
  const step3Done = frame > 7 * fps;

  // Countdown display
  const countdownPhase = frame >= 5 * fps && frame < 7 * fps;
  const countdownValue = countdownPhase
    ? Math.max(0, 30 - Math.floor((frame - 5 * fps) / (fps * 0.1)))
    : 0;

  // Success toast
  const successShow = frame > 8 * fps;
  const successSpring = successShow
    ? spring({
        frame: frame - 8 * fps,
        fps,
        config: { damping: 12, stiffness: 200 },
      })
    : 0;

  // Retry info
  const retryOpacity = interpolate(frame, [9.5 * fps, 10.2 * fps], [0, 1], {
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
      {/* Title */}
      <div
        style={{
          fontSize: 36,
          fontWeight: 700,
          color: theme.text,
          marginBottom: 60,
          opacity: titleOpacity,
        }}
      >
        Precision Grab Flow
      </div>

      {/* Steps */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 32,
        }}
      >
        <Sequence from={1 * fps} layout="none" premountFor={fps}>
          <Step
            icon="🔓"
            label="Login"
            sublabel="One-time Eventim session"
            active={step1Active && !step1Done}
            completed={step1Done}
          />
        </Sequence>

        <Arrow
          opacity={interpolate(
            spring({
              frame,
              fps,
              delay: 2 * fps,
              config: { damping: 200 },
            }),
            [0, 1],
            [0, 1]
          )}
        />

        <Sequence from={3 * fps} layout="none" premountFor={fps}>
          <Step
            icon="🔥"
            label="Preheat"
            sublabel="T-30s: Open event page"
            active={step2Active && !step2Done}
            completed={step2Done}
          />
        </Sequence>

        <Arrow
          opacity={interpolate(
            spring({
              frame,
              fps,
              delay: 4 * fps,
              config: { damping: 200 },
            }),
            [0, 1],
            [0, 1]
          )}
        />

        <Sequence from={5 * fps} layout="none" premountFor={fps}>
          <Step
            icon="⚡"
            label="GRAB!"
            sublabel="T-0s: Refresh + Add to Cart"
            active={step3Active && !step3Done}
            completed={step3Done}
          />
        </Sequence>

        <Arrow
          opacity={interpolate(
            spring({
              frame,
              fps,
              delay: 6 * fps,
              config: { damping: 200 },
            }),
            [0, 1],
            [0, 1]
          )}
        />

        <Sequence from={7 * fps} layout="none" premountFor={fps}>
          <Step
            icon="🎟"
            label="Checkout"
            sublabel="Eventim completes purchase"
            active={step4Active}
            completed={false}
          />
        </Sequence>
      </div>

      {/* Countdown overlay */}
      {countdownPhase && (
        <div
          style={{
            position: "absolute",
            top: 160,
            right: 120,
            fontSize: 48,
            fontFamily: theme.mono,
            fontWeight: 700,
            color: countdownValue <= 5 ? theme.red : theme.yellow,
          }}
        >
          T-{countdownValue}s
        </div>
      )}

      {/* Success toast */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          right: 80,
          padding: "16px 28px",
          borderRadius: theme.radius,
          background: theme.green,
          color: "#fff",
          fontSize: 18,
          fontWeight: 600,
          transform: `translateX(${interpolate(successSpring, [0, 1], [100, 0])}px)`,
          opacity: successSpring,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        ✓ Added to cart — Tickets secured!
      </div>

      {/* Retry info */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          fontSize: 15,
          color: theme.textSecondary,
          opacity: retryOpacity,
        }}
      >
        Auto-retries up to 3 times with 2s delay on failure
      </div>
    </AbsoluteFill>
  );
};
