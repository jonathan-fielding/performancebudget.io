import React from 'react';

interface InputSliderProps {
  name: string;
  min: number;
  max: number;
  step: number;
  userValue: number;
  unit: string;
  changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputSlider({
  name,
  min,
  max,
  step,
  label,
  userValue,
  unit,
  changeValue,
}: InputSliderProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block">
        {label}
        <span className="float-right">
          {userValue}
          {unit}
        </span>
      </label>
      <input
        name={name}
        type="range"
        min={min}
        max={max}
        step={step}
        className="range range-md w-72 range-primary"
        onChange={changeValue}
      />
    </div>
  );
}
