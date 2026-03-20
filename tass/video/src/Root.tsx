import React from "react";
import { Composition } from "remotion";
import { TassTeaser } from "./TassTeaser";

const FPS = 30;
const DURATION_SECONDS = 15;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TassTeaser"
        component={TassTeaser}
        durationInFrames={FPS * DURATION_SECONDS}
        fps={FPS}
        width={1920}
        height={1080}
      />
    </>
  );
};
