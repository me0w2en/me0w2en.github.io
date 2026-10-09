type Category = 'school' | 'university' | 'job' | 'intern';

type Span = {
  category: Category;
  label: string;
  start: string; // YYYY.MM
  end: string; // YYYY.MM
  level: number; // 라벨 높이 단계 (0이 가장 아래)
};

type Marker = {
  kind: 'award' | 'abroad';
  label: string;
  date: string; // YYYY.MM
  level: number;
};

const markerStyle = {
  award: { line: '#f7b8d3', halo: '#fce7f1' },
  abroad: { line: '#f5c542', halo: '#fdf3cf' },
};

const categoryStyle: Record<Category, { tag: string; color: string }> = {
  school: { tag: '고', color: '#7dd3e6' },
  university: { tag: '대', color: '#4fb98a' },
  job: { tag: '직', color: '#f0565f' },
  intern: { tag: '인', color: '#f5a24a' },
};

const spans: Span[] = [
  { category: 'school', label: '대전여자상업고등학교', start: '2018.03', end: '2021.02', level: 0 },
  { category: 'job', label: '㈜우성사료', start: '2020.08', end: '2023.02', level: 1 },
  { category: 'university', label: '충남대학교', start: '2023.03', end: '2027.02', level: 0 },
  { category: 'intern', label: '해커스페이스(HSPACE)', start: '2025.09', end: '2025.12', level: 2 },
];

const markers: Marker[] = [
  { kind: 'award', label: 'ARGOS CTF 대상', date: '2023.11', level: 0 },
  { kind: 'award', label: 'SW/AI 창의작품경진대회 우수상', date: '2024.06', level: 1 },
  { kind: 'abroad', label: '싱가포르 NSHC 연수', date: '2025.02', level: -1 },
  { kind: 'award', label: '한국디지털포렌식학회 우수논문상', date: '2025.11', level: 2 },
  { kind: 'award', label: 'BoB 14기 Whitehat 10', date: '2026.02', level: 3 },
  { kind: 'award', label: 'KCC2026 우수상', date: '2026.08', level: 4 },
];

const START_YEAR = 2018;
const END_YEAR = 2028;
const WIDTH = 1000;
const PAD_X = 40;
const BAR_Y = 250;
const BAR_H = 22;
const SPAN_LABEL_BASE = BAR_Y - 22;
const SPAN_LEVEL_GAP = 34;
const AWARD_LABEL_BASE = 160;
const AWARD_LEVEL_GAP = 28;
const HEIGHT = BAR_Y + BAR_H + 40;

function toDecimalYear(date: string) {
  const [year, month] = date.split('.').map(Number);
  return year + (month - 1) / 12;
}

function x(date: string) {
  const ratio = (toDecimalYear(date) - START_YEAR) / (END_YEAR - START_YEAR);
  return PAD_X + ratio * (WIDTH - PAD_X * 2);
}

// 서로 겹치는 기간 쌍 (사선 줄무늬로 표시)
const overlaps = spans.flatMap((a, i) =>
  spans.slice(i + 1).flatMap((b) => {
    const start = Math.max(toDecimalYear(a.start), toDecimalYear(b.start));
    const end = Math.min(toDecimalYear(a.end), toDecimalYear(b.end));
    return start < end ? [{ a, b, start, end }] : [];
  }),
);

function xFromYear(year: number) {
  return PAD_X + ((year - START_YEAR) / (END_YEAR - START_YEAR)) * (WIDTH - PAD_X * 2);
}

const years = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i);

function TrophyIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx - 7}, ${cy - 7})`} fill="#f472b6" stroke="#f472b6" strokeLinecap="round" strokeLinejoin="round">
      {/* 손잡이 */}
      <path d="M3 3.5 H1.5 a1.5 1.5 0 0 0 0 3 H3 M11 3.5 h1.5 a1.5 1.5 0 0 1 0 3 H11" fill="none" strokeWidth={1.4} />
      {/* 컵 */}
      <path d="M3 1.5 h8 v4.5 a4 4 0 0 1 -8 0 z" strokeWidth={1} />
      {/* 기둥과 받침 */}
      <rect x={6} y={10} width={2} height={2} strokeWidth={0} />
      <rect x={4} y={12} width={6} height={2} rx={1} strokeWidth={0} />
    </g>
  );
}

function AirplaneIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx - 7}, ${cy - 7}) rotate(45 7 7)`} fill="#f5a524">
      <path d="M7 0.5 c1 0 1.6 1 1.6 2.2 v3.3 l5.2 3.2 v1.6 l-5.2 -1.6 v2.6 l1.5 1.2 v1.2 L7 13.5 l-3.1 0.7 v-1.2 l1.5 -1.2 v-2.6 l-5.2 1.6 v-1.6 l5.2 -3.2 v-3.3 C5.4 1.5 6 0.5 7 0.5 z" />
    </g>
  );
}

export function CareerTimeline() {
  return (
    <div className="overflow-x-auto rounded-lg border border-border-color bg-background-secondary p-4">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="학력, 경력, 수상 이력 타임라인"
        className="min-w-[720px] w-full text-foreground"
      >
        {/* 1단계: 막대와 세로선 */}
        {spans.map((span) => {
          const x1 = x(span.start);
          const { color } = categoryStyle[span.category];
          const labelY = SPAN_LABEL_BASE - span.level * SPAN_LEVEL_GAP;
          return (
            <g key={span.label}>
              <rect x={x1} y={BAR_Y} width={x(span.end) - x1} height={BAR_H} fill={color} fillOpacity={0.85} />
              <line x1={x1} y1={labelY} x2={x1} y2={BAR_Y} stroke={color} strokeWidth={1.5} />
            </g>
          );
        })}
        {overlaps.map(({ a, b, start, end }, i) => {
          const id = `overlap-${i}`;
          const ox = xFromYear(start);
          return (
            <g key={id}>
              <defs>
                <pattern id={id} width={8} height={8} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width={4} height={8} fill={categoryStyle[a.category].color} />
                  <rect x={4} width={4} height={8} fill={categoryStyle[b.category].color} />
                </pattern>
              </defs>
              <rect x={ox} y={BAR_Y} width={xFromYear(end) - ox} height={BAR_H} fill={`url(#${id})`} />
            </g>
          );
        })}
        {markers.map((marker) => {
          const ax = x(marker.date);
          const labelY = AWARD_LABEL_BASE - marker.level * AWARD_LEVEL_GAP;
          return (
            <line
              key={marker.label}
              x1={ax}
              y1={labelY + 10}
              x2={ax}
              y2={BAR_Y}
              stroke={markerStyle[marker.kind].line}
              strokeWidth={1}
            />
          );
        })}

        {/* 2단계: 아이콘과 라벨 (항상 선 위에 그려짐) */}
        {spans.map((span) => {
          const x1 = x(span.start);
          const { color, tag } = categoryStyle[span.category];
          const labelY = SPAN_LABEL_BASE - span.level * SPAN_LEVEL_GAP;
          return (
            <g key={span.label}>
              <rect x={x1} y={labelY - 9} width={18} height={18} rx={5} fill={color} />
              <text x={x1 + 9} y={labelY + 4} textAnchor="middle" fontSize={11} fontWeight={700} fill="#fff">
                {tag}
              </text>
              <text x={x1 + 24} y={labelY + 4} fontSize={12} fill="currentColor" paintOrder="stroke" stroke="var(--background-secondary)" strokeWidth={6}>
                {span.label}
              </text>
            </g>
          );
        })}
        {markers.map((marker) => {
          const ax = x(marker.date);
          const labelY = AWARD_LABEL_BASE - marker.level * AWARD_LEVEL_GAP;
          return (
            <g key={marker.label}>
              <circle cx={ax} cy={labelY} r={11} fill={markerStyle[marker.kind].halo} />
              {marker.kind === 'award' ? <TrophyIcon cx={ax} cy={labelY} /> : <AirplaneIcon cx={ax} cy={labelY} />}
              <text x={ax + 16} y={labelY + 4} fontSize={12} fill="currentColor" paintOrder="stroke" stroke="var(--background-secondary)" strokeWidth={6}>
                {marker.label}
              </text>
            </g>
          );
        })}

        {/* 연도 축 */}
        <line
          x1={PAD_X}
          y1={BAR_Y + BAR_H}
          x2={WIDTH - PAD_X}
          y2={BAR_Y + BAR_H}
          stroke="var(--border-color)"
          strokeWidth={1}
        />
        {years.map((year) => {
          const tx = x(`${year}.01`);
          return (
            <g key={year}>
              <line x1={tx} y1={BAR_Y + BAR_H} x2={tx} y2={BAR_Y + BAR_H + 6} stroke="var(--border-color)" />
              <text x={tx} y={BAR_Y + BAR_H + 22} textAnchor="middle" fontSize={11} fill="var(--text-muted)">
                &apos;{String(year).slice(2)}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
