// textNode.js

import { useState, useRef, useEffect, useMemo } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

// Regex: match {{ validJSVariable }} — allows whitespace inside braces
const VAR_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);

  // ── Auto-resize: adjust height & width as user types ──
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;

    // Reset height to auto so scrollHeight recalculates
    ta.style.height = 'auto';
    ta.style.height = ta.scrollHeight + 'px';

    // Adjust width based on longest line (min 200, max 400)
    const lines = currText.split('\n');
    const longest = Math.max(...lines.map((l) => l.length));
    const newWidth = Math.min(400, Math.max(200, longest * 8 + 24));
    ta.style.width = newWidth + 'px';
  }, [currText]);

  // ── Parse {{variables}} from text ──
  const variables = useMemo(() => {
    const vars = [];
    const seen = new Set();
    let match;
    // Reset regex lastIndex each time
    const regex = new RegExp(VAR_REGEX.source, 'g');
    while ((match = regex.exec(currText)) !== null) {
      if (!seen.has(match[1])) {
        seen.add(match[1]);
        vars.push(match[1]);
      }
    }
    return vars;
  }, [currText]);

  // ── Build handles: output (right) + one target per variable (left) ──
  const handles = useMemo(() => {
    const h = [
      { type: 'source', position: Position.Right, id: `${id}-output` },
    ];
    variables.forEach((varName, i) => {
      h.push({
        type: 'target',
        position: Position.Left,
        id: `${id}-${varName}`,
        style: { top: `${((i + 1) / (variables.length + 1)) * 100}%` },
      });
    });
    return h;
  }, [id, variables]);

  return (
    <BaseNode id={id} title="Text" icon="✏️" color="#f59e0b" handles={handles}>
      <div className="node-field">
        <label>Text</label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          placeholder={'Enter text or use {{variable}}'}
          className="text-node-textarea"
          rows={1}
        />
      </div>
      {variables.length > 0 && (
        <div className="text-node-variables">
          {variables.map((v) => (
            <span key={v} className="variable-tag">{v}</span>
          ))}
        </div>
      )}
    </BaseNode>
  );
};
