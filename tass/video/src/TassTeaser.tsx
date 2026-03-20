import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// ── Design tokens ────────────────────────────────────────────────────────────
const BG = "#08111e";
const SURFACE = "#0d1a2b";
const ACCENT = "#3b82f6";
const AMBER = "#f59e0b";
const BODY = "#dbe8f4";
const MUTED = "#607d95";
const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

// ── Frame boundaries (at 30 fps) ─────────────────────────────────────────────
//   Scene 1: 0 – 3s   →  0 –  89
//   Scene 2: 3 – 7s   →  90 – 209
//   Scene 3: 7 – 11s  → 210 – 329
//   Scene 4: 11 – 15s → 330 – 449
const S1_START = 0;
const S1_END = 90;
const S2_START = 90;
const S2_END = 210;
const S3_START = 210;
const S3_END = 330;
const S4_START = 330;
const S4_END = 450;

// ── Helpers ───────────────────────────────────────────────────────────────────
function fadeIn(frame: number, start: number, durationFrames = 20): number {
  return interpolate(frame, [start, start + durationFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function fadeOut(frame: number, start: number, durationFrames = 20): number {
  return interpolate(frame, [start, start + durationFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

// ── Scene 1: "100,000 rows of text." ─────────────────────────────────────────
const Scene1: React.FC<{ frame: number }> = ({ frame }) => {
  const enter = fadeIn(frame, S1_START + 5, 25);
  const exit = fadeOut(frame, S1_END - 25, 20);
  const opacity = Math.min(enter, exit);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        opacity,
      }}
    >
      <p
        style={{
          fontFamily: FONT,
          fontSize: 96,
          fontWeight: 700,
          color: BODY,
          margin: 0,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          textAlign: "center",
        }}
      >
        100,000 rows of text.
      </p>
      <p
        style={{
          fontFamily: FONT,
          fontSize: 36,
          fontWeight: 400,
          color: MUTED,
          margin: "28px 0 0",
          letterSpacing: "0.01em",
          textAlign: "center",
        }}
      >
        How do your subjects feel about it?
      </p>
    </AbsoluteFill>
  );
};

// ── Scene 2: TASS wordmark + descriptor ──────────────────────────────────────
const Scene2: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const localFrame = frame - S2_START;

  const wordmarkOpacity = fadeIn(localFrame, 5, 20);
  const wordmarkExit = fadeOut(frame, S2_END - 25, 20);

  const descriptorSpring = spring({
    fps,
    frame: localFrame - 15,
    config: { damping: 18, stiffness: 120, mass: 1 },
    durationInFrames: 40,
  });
  const descriptorOpacity = interpolate(localFrame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const descriptorOpacityExit = fadeOut(frame, S2_END - 25, 20);
  const descriptorLetterSpacingNum = interpolate(
    descriptorSpring,
    [0, 1],
    [-0.1, 0.4],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const descriptorLetterSpacing = `${descriptorLetterSpacingNum}em`;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        opacity: Math.min(wordmarkExit, 1),
      }}
    >
      <p
        style={{
          fontFamily: FONT,
          fontSize: 160,
          fontWeight: 800,
          color: BODY,
          margin: 0,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          opacity: wordmarkOpacity,
        }}
      >
        TASS
      </p>
      <p
        style={{
          fontFamily: FONT,
          fontSize: 24,
          fontWeight: 500,
          color: MUTED,
          margin: "24px 0 0",
          letterSpacing: descriptorLetterSpacing,
          textTransform: "uppercase",
          opacity: Math.min(descriptorOpacity, descriptorOpacityExit),
        }}
      >
        Text Analysis for Social Scientists
      </p>
    </AbsoluteFill>
  );
};

// ── Scene 3: Stat cards ───────────────────────────────────────────────────────
const CARDS = [
  { label: "26 dictionaries", delay: 0 },
  { label: "No code required", delay: 12 },
  { label: "$49 / year", delay: 24 },
];

const StatCard: React.FC<{
  label: string;
  frame: number;
  fps: number;
  delay: number;
  exitOpacity: number;
}> = ({ label, frame, fps, delay, exitOpacity }) => {
  const localFrame = frame - S3_START - delay;

  const s = spring({
    fps,
    frame: localFrame,
    config: { damping: 16, stiffness: 100, mass: 1 },
    durationInFrames: 35,
  });

  const translateY = interpolate(s, [0, 1], [80, 0]);
  const opacity = interpolate(s, [0, 0.3], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        background: SURFACE,
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16,
        padding: "40px 60px",
        minWidth: 320,
        textAlign: "center",
        transform: `translateY(${translateY}px)`,
        opacity: Math.min(opacity, exitOpacity),
      }}
    >
      <p
        style={{
          fontFamily: FONT,
          fontSize: 40,
          fontWeight: 700,
          color: BODY,
          margin: 0,
          letterSpacing: "-0.01em",
        }}
      >
        {label}
      </p>
    </div>
  );
};

const Scene3: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const exitOpacity = fadeOut(frame, S3_END - 25, 20);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
        flexDirection: "row",
      }}
    >
      {CARDS.map((card) => (
        <StatCard
          key={card.label}
          label={card.label}
          frame={frame}
          fps={fps}
          delay={card.delay}
          exitOpacity={exitOpacity}
        />
      ))}
    </AbsoluteFill>
  );
};

// ── Scene 4: CTA ──────────────────────────────────────────────────────────────
const Scene4: React.FC<{ frame: number }> = ({ frame }) => {
  const localFrame = frame - S4_START;

  const dateOpacity = fadeIn(localFrame, 5, 25);
  const urlOpacity = fadeIn(localFrame, 35, 25);

  // Slow fade to black over last 45 frames
  const fadeToBlack = interpolate(
    frame,
    [S4_END - 45, S4_END],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <p
          style={{
            fontFamily: FONT,
            fontSize: 72,
            fontWeight: 700,
            color: BODY,
            margin: 0,
            letterSpacing: "-0.02em",
            opacity: dateOpacity,
          }}
        >
          Summer 2026.
        </p>
        <p
          style={{
            fontFamily: FONT,
            fontSize: 36,
            fontWeight: 500,
            color: ACCENT,
            margin: 0,
            letterSpacing: "0.01em",
            opacity: urlOpacity,
          }}
        >
          simdadllc.com/tass
        </p>
      </AbsoluteFill>
      {/* Fade to black overlay */}
      <AbsoluteFill
        style={{ background: "#000000", opacity: fadeToBlack, pointerEvents: "none" }}
      />
    </>
  );
};

// ── Main composition ──────────────────────────────────────────────────────────
export const TassTeaser: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill style={{ background: BG }}>
      {/* Scene 1 */}
      {frame < S2_END && <Scene1 frame={frame} />}

      {/* Scene 2 */}
      {frame >= S2_START - 5 && frame < S3_END && (
        <Scene2 frame={frame} fps={fps} />
      )}

      {/* Scene 3 */}
      {frame >= S3_START - 5 && frame < S4_END && (
        <Scene3 frame={frame} fps={fps} />
      )}

      {/* Scene 4 */}
      {frame >= S4_START && <Scene4 frame={frame} />}
    </AbsoluteFill>
  );
};
