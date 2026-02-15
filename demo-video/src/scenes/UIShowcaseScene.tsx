import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";
import { theme } from "../theme";

const Header = ({ sessionOnline }: { sessionOnline: boolean }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 24px",
      borderBottom: `1px solid ${theme.border}`,
      background: theme.bgSurface,
    }}
  >
    <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: theme.accent,
          letterSpacing: -0.5,
        }}
      >
        Berlinale 2026
      </div>
      <span style={{ fontSize: 14, color: theme.textSecondary }}>
        Ticket Buyer
      </span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button
        style={{
          padding: "7px 16px",
          border: `1px solid ${theme.border}`,
          borderRadius: theme.radius,
          background: "transparent",
          color: theme.text,
          fontSize: 13,
          fontWeight: 500,
          fontFamily: theme.font,
        }}
      >
        Login Eventim
      </button>
      <span
        style={{
          fontSize: 12,
          padding: "4px 12px",
          borderRadius: 20,
          fontWeight: 500,
          background: sessionOnline
            ? "rgba(34,197,94,.15)"
            : "rgba(255,255,255,.06)",
          color: sessionOnline ? theme.green : theme.textDim,
        }}
      >
        {sessionOnline ? "● Online" : "Not connected"}
      </span>
    </div>
  </div>
);

const DateTabs = ({ activeTab }: { activeTab: string }) => {
  const tabs = [
    "Today On Sale",
    "All Films",
    "Feb 12",
    "Feb 13",
    "Feb 14",
    "Feb 15",
    "Feb 16",
    "Feb 17",
    "Feb 18",
    "Feb 19",
    "Feb 20",
    "Feb 21",
    "Feb 22",
  ];
  return (
    <div
      style={{
        display: "flex",
        gap: 4,
        padding: "12px 24px",
        background: theme.bgSurface,
        borderBottom: `1px solid ${theme.border}`,
        overflow: "hidden",
      }}
    >
      {tabs.map((tab) => (
        <div
          key={tab}
          style={{
            padding: "6px 14px",
            border: `1px solid ${tab === activeTab ? theme.accent : theme.border}`,
            borderRadius: 20,
            background: tab === activeTab ? theme.accent : "transparent",
            color:
              tab === activeTab ? "#fff" : theme.textSecondary,
            fontSize: 13,
            whiteSpace: "nowrap",
            fontFamily: theme.font,
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

const SearchBar = ({ query }: { query: string }) => (
  <div
    style={{
      padding: "8px 24px",
      background: theme.bgSurface,
      borderBottom: `1px solid ${theme.border}`,
    }}
  >
    <div
      style={{
        width: 400,
        padding: "7px 14px",
        background: theme.bgCard,
        color: query ? theme.text : theme.textDim,
        border: `1px solid ${query ? theme.accent : theme.border}`,
        borderRadius: theme.radius,
        fontSize: 13,
        fontFamily: theme.font,
      }}
    >
      {query || "Search films by title..."}
    </div>
  </div>
);

type TicketState = "available" | "pending" | "sold_out";

const TicketBadge = ({ state }: { state: TicketState }) => {
  const colors: Record<TicketState, { bg: string; color: string }> = {
    available: { bg: "rgba(34,197,94,.15)", color: theme.green },
    pending: { bg: "rgba(234,179,8,.12)", color: theme.yellow },
    sold_out: { bg: "rgba(239,68,68,.12)", color: theme.red },
  };
  const labels: Record<TicketState, string> = {
    available: "AVAILABLE",
    pending: "PENDING",
    sold_out: "SOLD OUT",
  };
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        padding: "3px 10px",
        borderRadius: 12,
        textTransform: "uppercase",
        letterSpacing: 0.3,
        background: colors[state].bg,
        color: colors[state].color,
      }}
    >
      {labels[state]}
    </span>
  );
};

const FilmCard = ({
  title,
  director,
  section,
  sectionColor,
  events,
  opacity,
  translateY,
}: {
  title: string;
  director: string;
  section: string;
  sectionColor: string;
  events: Array<{
    date: string;
    time: string;
    venue: string;
    state: TicketState;
    countdown?: string;
  }>;
  opacity: number;
  translateY: number;
}) => (
  <div
    style={{
      background: theme.bgCard,
      border: `1px solid ${theme.border}`,
      borderRadius: theme.radiusLg,
      padding: 16,
      marginBottom: 8,
      opacity,
      transform: `translateY(${translateY}px)`,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: theme.text }}>
          {title}
        </div>
        <div
          style={{ fontSize: 12, color: theme.textSecondary, marginTop: 2 }}
        >
          Dir: {director}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontSize: 12,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: 0.5,
          color: theme.textSecondary,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: sectionColor,
          }}
        />
        {section}
      </div>
    </div>

    {events.map((event, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginTop: 10,
          padding: "10px 12px",
          background: theme.bgSurface,
          borderRadius: theme.radius,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
          <span
            style={{
              fontSize: 12,
              color: theme.textSecondary,
              fontFamily: theme.mono,
            }}
          >
            {event.date}
          </span>
          <span
            style={{
              fontWeight: 600,
              color: theme.text,
              fontFamily: theme.mono,
              fontSize: 13,
            }}
          >
            {event.time}
          </span>
          <span style={{ color: theme.textSecondary, fontSize: 13 }}>
            {event.venue}
          </span>
          {event.countdown && (
            <span
              style={{
                fontSize: 12,
                color: theme.yellow,
                fontFamily: theme.mono,
                fontWeight: 500,
              }}
            >
              Sale in {event.countdown}
            </span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <TicketBadge state={event.state} />
          {event.state === "available" && (
            <>
              <button
                style={{
                  padding: "4px 10px",
                  fontSize: 12,
                  background: theme.green,
                  color: "#fff",
                  border: "none",
                  borderRadius: theme.radius,
                  fontWeight: 500,
                  fontFamily: theme.font,
                }}
              >
                Buy Now
              </button>
              <button
                style={{
                  padding: "4px 10px",
                  fontSize: 12,
                  background: theme.accent,
                  color: "#fff",
                  border: "none",
                  borderRadius: theme.radius,
                  fontWeight: 500,
                  fontFamily: theme.font,
                }}
              >
                Schedule
              </button>
            </>
          )}
          {event.state === "sold_out" && (
            <button
              style={{
                padding: "4px 10px",
                fontSize: 12,
                background: "transparent",
                color: theme.blue,
                border: `1px solid ${theme.blue}`,
                borderRadius: theme.radius,
                fontWeight: 500,
                fontFamily: theme.font,
              }}
            >
              Watch
            </button>
          )}
          {event.state === "pending" && (
            <button
              style={{
                padding: "4px 10px",
                fontSize: 12,
                background: theme.accent,
                color: "#fff",
                border: "none",
                borderRadius: theme.radius,
                fontWeight: 500,
                fontFamily: theme.font,
              }}
            >
              Schedule
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
);

export const UIShowcaseScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: Browser frame appears (0-1s)
  const browserScale = spring({ frame, fps, config: { damping: 200 } });

  // Phase 2: Session goes online (2s)
  const sessionOnline = frame > 2 * fps;

  // Phase 3: Tab switches to "Today On Sale" then "Feb 15"
  const activeTab =
    frame < 6 * fps ? "Today On Sale" : frame < 12 * fps ? "Feb 15" : "All Films";

  // Phase 4: Search query typewriter (12-15s)
  const searchQuery = "Dreams";
  const searchProgress = interpolate(
    frame,
    [12 * fps, 13.5 * fps],
    [0, searchQuery.length],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const displayedSearch =
    frame >= 12 * fps ? searchQuery.slice(0, Math.round(searchProgress)) : "";

  // Film cards stagger
  const films = [
    {
      title: "Dreams",
      director: "Kurosawa",
      section: "COMPETITION",
      sectionColor: "#e3234a",
      events: [
        {
          date: "Sun Feb 15",
          time: "21:30",
          venue: "Berlinale Palast",
          state: "sold_out" as TicketState,
        },
        {
          date: "Mon Feb 16",
          time: "18:45",
          venue: "Haus der Berliner Festspiele",
          state: "available" as TicketState,
        },
      ],
    },
    {
      title: "Dust",
      director: "Blondé",
      section: "COMPETITION",
      sectionColor: "#e3234a",
      events: [
        {
          date: "Tue Feb 17",
          time: "10:00",
          venue: "Berlinale Palast",
          state: "pending" as TicketState,
          countdown: "2h 15m 30s",
        },
      ],
    },
    {
      title: "Rose",
      director: "Abbasi",
      section: "PANORAMA",
      sectionColor: "#3b82f6",
      events: [
        {
          date: "Wed Feb 18",
          time: "20:00",
          venue: "Zoo Palast",
          state: "available" as TicketState,
        },
      ],
    },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.bg,
        fontFamily: theme.font,
      }}
    >
      {/* Browser chrome mockup */}
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 60,
          right: 60,
          bottom: 30,
          borderRadius: 12,
          overflow: "hidden",
          border: `1px solid ${theme.border}`,
          transform: `scale(${browserScale})`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Browser tab bar */}
        <div
          style={{
            height: 36,
            background: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            paddingLeft: 12,
            gap: 8,
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ffbd2e",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
          <div
            style={{
              marginLeft: 16,
              padding: "4px 16px",
              background: theme.bgSurface,
              borderRadius: "6px 6px 0 0",
              fontSize: 12,
              color: theme.textSecondary,
            }}
          >
            localhost:8000
          </div>
        </div>

        {/* App content */}
        <div style={{ flex: 1, overflow: "hidden", background: theme.bg }}>
          <Header sessionOnline={sessionOnline} />
          <DateTabs activeTab={activeTab} />
          <SearchBar query={displayedSearch} />

          {/* Main content */}
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 24px" }}>
            {/* Section header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 10,
                paddingBottom: 6,
                borderBottom: `2px solid ${theme.border}`,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#e3234a",
                }}
              />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  color: theme.textSecondary,
                }}
              >
                COMPETITION
              </span>
            </div>

            {films.map((film, i) => {
              const delay = 1 * fps + i * 0.4 * fps;
              const cardSpring = spring({
                frame,
                fps,
                delay,
                config: { damping: 200 },
              });
              return (
                <FilmCard
                  key={film.title}
                  {...film}
                  opacity={cardSpring}
                  translateY={interpolate(cardSpring, [0, 1], [30, 0])}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Feature callout labels */}
      <Sequence from={3 * fps} durationInFrames={4 * fps} layout="none">
        <FeatureCallout
          x={1580}
          y={85}
          label="Persistent Eventim Session"
          frame={frame - 3 * fps}
          fps={fps}
        />
      </Sequence>
      <Sequence from={7 * fps} durationInFrames={5 * fps} layout="none">
        <FeatureCallout
          x={1580}
          y={175}
          label="Browse by Date"
          frame={frame - 7 * fps}
          fps={fps}
        />
      </Sequence>
      <Sequence from={14 * fps} durationInFrames={5 * fps} layout="none">
        <FeatureCallout
          x={1580}
          y={480}
          label="Real-time Ticket Status"
          frame={frame - 14 * fps}
          fps={fps}
        />
      </Sequence>
      <Sequence from={16 * fps} durationInFrames={5 * fps} layout="none">
        <FeatureCallout
          x={1580}
          y={650}
          label="Sale Countdown Timer"
          frame={frame - 16 * fps}
          fps={fps}
        />
      </Sequence>
    </AbsoluteFill>
  );
};

const FeatureCallout = ({
  x,
  y,
  label,
  frame,
  fps,
}: {
  x: number;
  y: number;
  label: string;
  frame: number;
  fps: number;
}) => {
  const progress = spring({ frame, fps, config: { damping: 200 } });
  const opacity = progress;
  const translateX = interpolate(progress, [0, 1], [30, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        display: "flex",
        alignItems: "center",
        gap: 8,
        opacity,
        transform: `translateX(${translateX}px)`,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: theme.accent,
        }}
      />
      <div
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: theme.accent,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </div>
    </div>
  );
};
