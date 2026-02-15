import {
  AbsoluteFill,
  Sequence,
  useVideoConfig,
  useCurrentFrame,
  interpolate,
  staticFile,
} from "remotion";
import { Audio } from "@remotion/media";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { TitleScene } from "./scenes/TitleScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { UIShowcaseScene } from "./scenes/UIShowcaseScene";
import { GrabFlowScene } from "./scenes/GrabFlowScene";
import { WatchScene } from "./scenes/WatchScene";
import { CTAScene } from "./scenes/CTAScene";

export const BerlinaleDemo = () => {
  const { fps, durationInFrames } = useVideoConfig();

  // Volume curve for background music:
  // 0-2s:   Fade in (0 → 0.3)
  // 2-35s:  Steady at 0.3
  // 35-48s: Build tension during grab + watch (0.3 → 0.5)
  // 48-50s: Peak at success moment (0.5)
  // 50-57s: Settle (0.5 → 0.35)
  // 57-62s: Fade out (0.35 → 0)
  const volumeCurve = (f: number) => {
    if (f < 2 * fps) {
      return interpolate(f, [0, 2 * fps], [0, 0.3]);
    }
    if (f < 35 * fps) {
      return 0.3;
    }
    if (f < 48 * fps) {
      return interpolate(f, [35 * fps, 48 * fps], [0.3, 0.5]);
    }
    if (f < 50 * fps) {
      return 0.5;
    }
    if (f < 57 * fps) {
      return interpolate(f, [50 * fps, 57 * fps], [0.5, 0.35]);
    }
    return interpolate(f, [57 * fps, durationInFrames], [0.35, 0], {
      extrapolateRight: "clamp",
    });
  };

  return (
    <AbsoluteFill style={{ backgroundColor: "#0d0d0d" }}>
      {/* Background music — CC0 "Field of Ink" by Flowers for Bodysnatchers */}
      <Audio
        src={staticFile("bgm.mp3")}
        volume={volumeCurve}
        trimAfter={durationInFrames}
      />

      <TransitionSeries>
        {/* Scene 1: Title (0-5s) */}
        <TransitionSeries.Sequence durationInFrames={5 * fps}>
          <TitleScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: Math.round(0.5 * fps) })}
        />

        {/* Scene 2: Problem (5-11s) */}
        <TransitionSeries.Sequence durationInFrames={6 * fps}>
          <ProblemScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: Math.round(0.6 * fps) })}
        />

        {/* Scene 3: UI Showcase (11-32s) */}
        <TransitionSeries.Sequence durationInFrames={21 * fps}>
          <UIShowcaseScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: Math.round(0.5 * fps) })}
        />

        {/* Scene 4: Grab Flow (32-44s) */}
        <TransitionSeries.Sequence durationInFrames={12 * fps}>
          <GrabFlowScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: Math.round(0.5 * fps) })}
        />

        {/* Scene 5: Watch Mode (44-52s) */}
        <TransitionSeries.Sequence durationInFrames={8 * fps}>
          <WatchScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: Math.round(0.7 * fps) })}
        />

        {/* Scene 6: CTA (52-62s) */}
        <TransitionSeries.Sequence durationInFrames={10 * fps}>
          <CTAScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
