// toolbar.js

import { useState, useEffect } from 'react';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('pipeline-theme') || 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('pipeline-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className="toolbar">
            <div className="toolbar-brand">
                <div className="toolbar-brand-icon">⚡</div>
                <span className="toolbar-brand-text">Pipeline Builder</span>
            </div>
            <div className="toolbar-nodes">
                <DraggableNode type='customInput' label='Input' icon='📥' />
                <DraggableNode type='llm' label='LLM' icon='🤖' />
                <DraggableNode type='customOutput' label='Output' icon='📤' />
                <DraggableNode type='text' label='Text' icon='✏️' />
                <DraggableNode type='note' label='Note' icon='📝' />
                <DraggableNode type='apiRequest' label='API' icon='🌐' />
                <DraggableNode type='timer' label='Timer' icon='⏱️' />
                <DraggableNode type='condition' label='Condition' icon='🔀' />
                <DraggableNode type='merge' label='Merge' icon='🔗' />
            </div>
            <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
                {theme === 'dark' ? '☀️' : '🌙'}
            </button>
        </div>
    );
};
