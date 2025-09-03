import { useState, useEffect, useRef } from "react";

export default function FitTextButton({ children }) {
  const buttonRef = useRef(null);
  const [fontSize, setFontSize] = useState(16); // default px

  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    // Reset font size
    btn.style.fontSize = "16px";

    // Check if text overflows
    const parentWidth = btn.clientWidth - 8; // padding accounted
    const parentHeight = btn.clientHeight - 8;

    let currentFont = 16;
    while (
      (btn.scrollWidth > parentWidth || btn.scrollHeight > parentHeight) &&
      currentFont > 8
    ) {
      currentFont -= 1;
      btn.style.fontSize = `${currentFont}px`;
    }
    setFontSize(currentFont);
  }, [children]);

  return (
    <button
      ref={buttonRef}
      className="w-40 h-20 bg-white text-gray-800 font-medium border border-gray-300 rounded-lg shadow-sm flex items-center justify-center text-center p-2 break-words"
      style={{ fontSize: `${fontSize}px` }}
    >
      {children}
    </button>
  );
}
