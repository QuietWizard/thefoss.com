"use client";

import { useState, type ChangeEvent } from "react";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  error?: string;
}

const Field = ({ label, name, type = "text", value, onChange, placeholder, rows, required = false, error }: FieldProps) => {
  const [focus, setFocus] = useState(false);
  const borderColor = error ? "border-signal-error" : focus ? "border-amber-400" : "border-transparent";
  const controlClasses = `w-full rounded-md border bg-ink-700 px-4 py-[14px] text-body text-paper-0 outline-none placeholder:text-paper-300 ${borderColor} ${rows ? "resize-y" : ""}`;

  return (
    <div className="flex flex-col gap-[7px]">
      <label htmlFor={name} className="text-meta text-paper-200">
        {label}
      </label>
      {rows ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          required={required}
          className={controlClasses}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          required={required}
          className={controlClasses}
        />
      )}
      {error && <p className="text-micro text-signal-error">{error}</p>}
    </div>
  );
};

export default Field;
