import React from 'react';

export default function Heading({ level = 1, children, color = '#3cad6e' }) {
  const HeadingTag = `h${level}`;

  return (
    <HeadingTag
      style={{
        textAlign: 'center',
        backgroundColor: color,
        borderRadius: '8px',
        color: '#fff',
        padding: '0.5rem 1rem',
        display: 'inline-block',
      }}
    >
      {children}
    </HeadingTag>
  );
}
