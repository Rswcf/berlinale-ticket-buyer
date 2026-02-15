import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
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
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ backgroundColor: "#0d0d0d" }}>
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
