// BaseNode.js
// The core node abstraction — every node wraps its content in this component.

import { Handle } from 'reactflow';
import './BaseNode.css';

/**
 * BaseNode — shared wrapper for all pipeline nodes.
 *
 * Props:
 *   id        — ReactFlow node id
 *   title     — display name shown in the header
 *   icon      — emoji or string icon for the header
 *   color     — header background color (CSS value)
 *   handles   — array of { type, position, id, style? } handle configs
 *   children  — node-specific content (fields, static text, etc.)
 *   minWidth  — optional, override min-width (default: 220)
 */
export const BaseNode = ({
  id,
  title,
  icon,
  color = '#6366f1',
  handles = [],
  children,
  minWidth,
}) => {
  return (
    <div className="base-node" style={minWidth ? { minWidth } : undefined}>
      <div className="base-node-header" style={{ background: color }}>
        {icon && <span className="node-icon">{icon}</span>}
        <span>{title}</span>
      </div>
      <div className="base-node-content">
        {children}
      </div>
      {handles.map((h) => (
        <Handle
          key={h.id}
          type={h.type}
          position={h.position}
          id={h.id}
          style={h.style}
        />
      ))}
    </div>
  );
};
