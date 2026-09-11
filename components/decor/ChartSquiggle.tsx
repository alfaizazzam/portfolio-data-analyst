export default function ChartSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <polyline
        points="0,120 60,100 120,130 180,70 240,90 300,40 360,60 420,20 480,45"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [0, 120], [60, 100], [120, 130], [180, 70],
        [240, 90], [300, 40], [360, 60], [420, 20], [480, 45],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="currentColor" />
      ))}
    </svg>
  );
}
