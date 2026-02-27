// submit.js

import { useStore } from './store';

export const SubmitButton = () => {
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();

            alert(
                `Pipeline Analysis\n` +
                `━━━━━━━━━━━━━━━━━━━━━\n` +
                `Nodes: ${data.num_nodes}\n` +
                `Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? '✅ Yes' : '❌ No'}`
            );
        } catch (error) {
            alert(`Error submitting pipeline:\n${error.message}`);
        }
    };

    return (
        <div className="footer">
            <button type="button" className="submit-btn" onClick={handleSubmit}>
                <span className="btn-icon">▶</span>
                Submit Pipeline
            </button>
        </div>
    );
}
