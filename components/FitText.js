"use client";

import { useRef, useEffect, useState } from "react";

export default function FitText({ children, className, style, maxSize = 140 }) {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState(maxSize);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let size = maxSize;
    el.style.fontSize = size + "px";

    while (el.scrollWidth > el.parentElement.clientWidth && size > 10) {
      size -= 1;
      el.style.fontSize = size + "px";
    }

    setFontSize(size);
  }, [maxSize]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ ...style, fontSize, whiteSpace: "nowrap", display: "block" }}
    >
      {children}
    </span>
  );
}
