"use client";

import { useRef, useEffect, useState } from "react";

export default function FitTextPair({
  line1, line1ClassName, line1Style,
  line2, line2ClassName, line2Style,
  maxSize = 140,
}) {
  const containerRef = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [fontSize, setFontSize] = useState(maxSize);

  useEffect(() => {
    const container = containerRef.current;
    const el1 = ref1.current;
    const el2 = ref2.current;
    if (!container || !el1 || !el2) return;

    const containerWidth = container.clientWidth;
    let size = maxSize;

    el1.style.fontSize = size + "px";
    el2.style.fontSize = size + "px";

    // Step down until BOTH lines fit
    while (
      (el1.scrollWidth > containerWidth || el2.scrollWidth > containerWidth) &&
      size > 10
    ) {
      size -= 1;
      el1.style.fontSize = size + "px";
      el2.style.fontSize = size + "px";
    }

    setFontSize(size);
  }, [maxSize]);

  const shared = { fontSize, whiteSpace: "nowrap", display: "block" };

  return (
    <div ref={containerRef} className="w-full leading-none">
      <span ref={ref1} className={line1ClassName} style={{ ...line1Style, ...shared }}>
        {line1}
      </span>
      <span ref={ref2} className={line2ClassName} style={{ ...line2Style, ...shared }}>
        {line2}
      </span>
    </div>
  );
}
