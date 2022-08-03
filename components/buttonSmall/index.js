import React from "react";

export default function ButtonSmall({
  id,
  label,
  loading,
  onClick,
  className,
}) {
  return (
    <button id={id} className={className} onClick={onClick} disabled={loading}>
      {label}
    </button>
  );
}
