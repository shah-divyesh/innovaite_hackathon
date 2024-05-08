import { useState, useCallback, useEffect } from "react";
import "reactflow/dist/style.css";
// import _ from "lodash";

import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import _ from "lodash";

const RoadMapScreen = (response) => {
  // const [response, setResponse] = useState("");
  // const [initialNodes, setInitialNodes] = useState(initialValueNodes);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // useEffect(() => {
  //   setNodes(initialNodes);
  // }, [initialNodes]);

  const generateNodesAndEdges = (dataResponse) => {
    const newNodes = [];
    const newEdges = [];
    let y = 150;
    let x = 50;
    let xOffset = 450; // Horizontal space between nodes
    let yOffset = 300; // Vertical space between nodes for new rows
    const mappedData = _.compact(
      _.flatMap(dataResponse.split("."), (e) => {
        return !e.includes("\n") && e.trim();
      })
    )?.slice(0, 8);
    mappedData.forEach((step, index) => {
      const nodeId = `${index + 1}`;
      newNodes.push({
        id: nodeId,
        data: { label: step },
        position: { x, y },
        type: index === 0 ? "input" : "default",
      });
      if (index > 0) {
        newEdges.push({
          id: `${index}-${index + 1}`,
          source: `${index}`,
          target: nodeId,
          type: "step",
        });
      }
      x += xOffset;
      if ((index + 1) % 3 === 0) {
        y += yOffset;
        x = 50;
      }
    });
    setNodes(newNodes);
    setEdges(newEdges);
    return { newNodes, newEdges };
  };
  // useEffect(() => {
  //   setNodes(initialNodes);
  // }, [initialNodes]);
  useEffect(() => {
    if (response && response != "" && response.response.length > 0) {
      const { newNodes, newEdges } = generateNodesAndEdges(response.response);
      setNodes(newNodes);
      setEdges(newEdges);
    }
  }, [response]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  console.log(nodes);
  return (
    <div style={{ height: 1500, width: 1500 }}>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default RoadMapScreen;
