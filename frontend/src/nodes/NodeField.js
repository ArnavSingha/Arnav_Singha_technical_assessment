// NodeField.js
// Reusable form-field primitives used inside nodes.

import { useState } from 'react';

/**
 * TextField — labeled text / url / number input.
 * Props: label, value, onChange, type (default "text"), placeholder
 */
export const TextField = ({
    label,
    value,
    onChange,
    type = 'text',
    placeholder = '',
}) => (
    <div className="node-field">
        <label>{label}</label>
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    </div>
);

/**
 * SelectField — labeled dropdown.
 * Props: label, value, onChange, options (array of { value, label })
 */
export const SelectField = ({ label, value, onChange, options = [] }) => (
    <div className="node-field">
        <label>{label}</label>
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    </div>
);

/**
 * TextAreaField — labeled resizable textarea.
 * Props: label, value, onChange, placeholder, rows
 */
export const TextAreaField = ({
    label,
    value,
    onChange,
    placeholder = '',
    rows = 3,
}) => (
    <div className="node-field">
        <label>{label}</label>
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
        />
    </div>
);

/**
 * SliderField — labeled range slider with live value display.
 * Props: label, value, onChange, min, max, step, unit
 */
export const SliderField = ({
    label,
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    unit = '',
}) => (
    <div className="node-field">
        <label>{label}</label>
        <div className="slider-wrapper">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
            />
            <span className="slider-value">
                {value}{unit}
            </span>
        </div>
    </div>
);

/**
 * CheckboxField — labeled checkbox.
 * Props: label, checked, onChange
 */
export const CheckboxField = ({ label, checked, onChange }) => (
    <div className="node-field-checkbox">
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        <label>{label}</label>
    </div>
);

/**
 * useNodeState — tiny hook to manage a node field's local state.
 * Returns [value, setter].
 */
export const useNodeState = (initialValue) => {
    const [val, setVal] = useState(initialValue);
    return [val, setVal];
};
