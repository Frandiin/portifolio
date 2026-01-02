import { useEffect, useRef, useState, type ReactElement } from 'react';

interface ExpandableTextProps {
  children: string | ReactElement;
  lines?: number;
}

export function ExpandableText({ children, lines = 2 }: ExpandableTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const paragraphElement = paragraphRef.current;
    if (!paragraphElement) return;

    const updateOverflow = () => {
      const el = paragraphRef.current;
      if (!el) return;
      setHasOverflow(el.scrollHeight > el.clientHeight);
    };

    updateOverflow();
    window.addEventListener('resize', updateOverflow);
    return () => window.removeEventListener('resize', updateOverflow);
  }, [children, lines, isExpanded]);

  return (
    <div>
      <p
        ref={paragraphRef}
        className="text-sm text-slate-400"
        style={
          !isExpanded
            ? {
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: lines,
                overflow: 'hidden',
              }
            : undefined
        }
      >
        {children}
      </p>

      {hasOverflow && (
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mt-1 text-xs font-medium text-indigo-400 hover:text-indigo-300"
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Ver menos' : 'Ver mais'}
        </button>
      )}
    </div>
  );
}
