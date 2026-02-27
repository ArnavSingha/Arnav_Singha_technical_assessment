// apiRequestNode.js — HTTP API request node

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { TextField, SelectField } from './NodeField';

export const ApiRequestNode = ({ id, data }) => {
    const [url, setUrl] = useState(data?.url || 'https://api.example.com');
    const [method, setMethod] = useState(data?.method || 'GET');

    return (
        <BaseNode
            id={id}
            title="API Request"
            icon="🌐"
            color="#10b981"
            handles={[
                { type: 'target', position: Position.Left, id: `${id}-body` },
                { type: 'source', position: Position.Right, id: `${id}-response` },
            ]}
        >
            <TextField
                label="URL"
                value={url}
                onChange={setUrl}
                type="url"
                placeholder="https://…"
            />
            <SelectField
                label="Method"
                value={method}
                onChange={setMethod}
                options={[
                    { value: 'GET', label: 'GET' },
                    { value: 'POST', label: 'POST' },
                    { value: 'PUT', label: 'PUT' },
                    { value: 'DELETE', label: 'DELETE' },
                ]}
            />
        </BaseNode>
    );
};
