import { Composition } from "remotion";
import { BerlinaleDemo } from "./BerlinaleDemo";

const FPS = 30;
const DURATION_SECONDS = 62;

export const RemotionRoot = () => {
  return (
    <Composition
      id="BerlinaleDemo"
      component={BerlinaleDemo}
      durationInFrames={DURATION_SECONDS * FPS}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};
