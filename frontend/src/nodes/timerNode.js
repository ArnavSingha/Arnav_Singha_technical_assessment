// timerNode.js — Delay / timer node

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { SliderField, SelectField } from './NodeField';

export const TimerNode = ({ id, data }) => {
    const [duration, setDuration] = useState(data?.duration || 5);
    const [unit, setUnit] = useState(data?.unit || 'seconds');

    return (
        <BaseNode
            id={id}
            title="Timer"
            icon="⏱️"
            color="#ec4899"
            handles={[
                { type: 'target', position: Position.Left, id: `${id}-trigger` },
                { type: 'source', position: Position.Right, id: `${id}-done` },
            ]}
        >
            <SliderField
                label="Duration"
                value={duration}
                onChange={setDuration}
                min={1}
                max={60}
                step={1}
                unit={unit === 'seconds' ? 's' : 'm'}
            />
            <SelectField
                label="Unit"
                value={unit}
                onChange={setUnit}
                options={[
                    { value: 'seconds', label: 'Seconds' },
                    { value: 'minutes', label: 'Minutes' },
                ]}
            />
        </BaseNode>
    );
};
