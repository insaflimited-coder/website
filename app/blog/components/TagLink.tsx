'use client'

export default function TagLink({ tag }: { tag: string }) {
  return (
    <span
      style={{
        padding: '6px 14px',
        backgroundColor: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px',
        color: 'rgba(255,255,255,0.6)',
        fontSize: '13px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        display: 'inline-block'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255,215,0,0.1)';
        e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)';
        e.currentTarget.style.color = '#FFD700';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
      }}
    >
      #{tag}
    </span>
  );
}
