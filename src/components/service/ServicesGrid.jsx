// components/services/components/ServicesGrid.jsx
import React from "react";
import { ServiceCard } from "./ServiceCard";
import { servicesList } from "../../../lib/data";

export const ServicesGrid = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    minHeight: '480px',
    contain: 'layout paint size'
  }}>
    {servicesList.map((item, index) => (
      <ServiceCard key={index} item={item} />
    ))}
  </div>
);  