// components/services/components/ServicesSkeleton.jsx
import React from "react";

export const ServicesSkeleton = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    minHeight: '480px',
    contain: 'layout size'
  }}>
    {[1, 2, 3].map((i) => (
      <div 
        key={i} 
        className="bg-muted animate-pulse rounded-lg"
        style={{ height: '480px' }}
      />
    ))}
  </div>
);