import { useState, useRef, useEffect } from "react";

export default function ReadMore({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>("");

  useEffect(() => {
    if (contentRef.current && !expanded) {
      const lineHeight = parseFloat(
        getComputedStyle(contentRef.current).lineHeight || "1.5"
      );
      setMaxHeight(`${lineHeight * 3}px`);
    }
  }, [expanded]);

  return (
    <div className="relative">
      <div
        ref={contentRef}
        className="transition-all overflow-hidden"
        style={{ maxHeight: expanded ? "none" : maxHeight }}
      >
        {text}
      </div>
      <div className="flex justify-end">
      <button
        className="text-indigo-500 text-xs"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less" : "Read More.."}
      </button>  
      </div>
      
    </div>
  );
}
