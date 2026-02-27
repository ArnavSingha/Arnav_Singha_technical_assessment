// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { TextField, SelectField } from './NodeField';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Output"
      icon="📤"
      color="#0ea5e9"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-value` },
      ]}
    >
      <TextField label="Name" value={currName} onChange={setCurrName} />
      <SelectField
        label="Type"
        value={outputType}
        onChange={setOutputType}
        options={[
          { value: 'Text', label: 'Text' },
          { value: 'Image', label: 'Image' },
        ]}
      />
    </BaseNode>
  );
};
