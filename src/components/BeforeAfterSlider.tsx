import { MoveHorizontal } from "lucide-react";
import { useRef, useState } from "react";

export function BeforeAfterSlider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-square touch-none select-none overflow-hidden rounded-2xl border border-border shadow-soft"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
    >
      <img src={after} alt={`${alt} — after`} draggable={false} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 size-full" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <img src={before} alt={`${alt} — before`} draggable={false} className="absolute inset-0 size-full object-cover" />
      </div>

      <span className="absolute left-2 top-2 rounded-md bg-black/60 px-2 py-0.5 text-xs font-semibold text-white">
        Before
      </span>
      <span className="absolute right-2 top-2 rounded-md bg-black/60 px-2 py-0.5 text-xs font-semibold text-white">
        After
      </span>

      <div className="absolute inset-y-0 w-0.5 bg-white shadow-soft" style={{ left: `${position}%` }}>
        <div className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-flamingo shadow-soft">
          <MoveHorizontal className="size-4" />
        </div>
      </div>
    </div>
  );
}
