// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { TextField, SelectField } from './NodeField';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input"
      icon="📥"
      color="#6366f1"
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` },
      ]}
    >
      <TextField label="Name" value={currName} onChange={setCurrName} />
      <SelectField
        label="Type"
        value={inputType}
        onChange={setInputType}
        options={[
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'File' },
        ]}
      />
    </BaseNode>
  );
};
