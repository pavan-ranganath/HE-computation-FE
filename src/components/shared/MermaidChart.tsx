'use client';
import mermaid from 'mermaid';
import React, { useEffect, useRef } from 'react';

export default function MermaidChart({ chart }: { chart: any }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div
      ref={chartRef}
      className="mermaid"
      dangerouslySetInnerHTML={{ __html: chart }}
      style={{ overflowX: 'auto' }} // Ensure the diagram is scrollable if it's wide
    />
  );
}
