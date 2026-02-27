// noteNode.js — Sticky-note annotation node (no connections)

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { TextAreaField } from './NodeField';

export const NoteNode = ({ id, data }) => {
    const [text, setText] = useState(data?.text || '');

    return (
        <BaseNode
            id={id}
            title="Note"
            icon="📝"
            color="#f97316"
            handles={[]}
        >
            <TextAreaField
                label="Note"
                value={text}
                onChange={setText}
                placeholder="Add your notes here…"
                rows={3}
            />
        </BaseNode>
    );
};
