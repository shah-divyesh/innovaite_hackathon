// import { useState, useCallback } from "react";
// import ReactFlow, {
//   Controls,
//   Background,
//   applyNodeChanges,
//   applyEdgeChanges,
// } from "reactflow";
// import "reactflow/dist/style.css";
// // import './RoadMapScreen.css'

// const initialNodes = [
//   {
//     id: "1",
//     data: { label: "Hello" },
//     position: { x: 50, y: 150 },
//     type: "input",
//   },
//   {
//     id: "2",
//     data: { label: "World" },
//     position: { x: 400, y: 150 },
//   },
//   {
//     id: "3",
//     data: { label: "World" },
//     position: { x: 750, y: 150 },
//   },
//   {
//     id: "4",
//     data: { label: "World" },
//     position: { x: 750, y: 300 },
//   },
//   {
//     id: "5",
//     data: { label: "World" },
//     position: { x: 400, y: 300 },
//   },
//   {
//     id: "6",
//     data: { label: "World" },
//     position: { x: 50, y: 300 },
//   },
//   {
//     id: "7",
//     data: { label: "World" },
//     position: { x: 50, y: 450 },
//   },
//   {
//     id: "8",
//     data: { label: "World" },
//     position: { x: 400, y: 450 },
//   },
// ];
// const initialEdges = [
//   { id: "1-2", source: "1", target: "2", type: "straight" },
//   { id: "2-3", source: "2", target: "3", type: "straight" },
//   { id: "3-4", source: "3", target: "4", type: "straight" },
//   { id: "4-5", source: "4", target: "5", type: "straight" },
//   { id: "5-6", source: "5", target: "6", type: "straight" },
//   { id: "6-7", source: "6", target: "7", type: "straight" },
//   { id: "7-8", source: "7", target: "8", type: "straight" },
// ];

// function RoadMapScreen({response}) {
//   const [nodes, setNodes] = useState(initialNodes);
//   const [edges, setEdges] = useState(initialEdges);
//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     []
//   );
//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     []
//   );
//   return (
//     <div style={{ width: '100%', height: '700px' }}>
//       <div style={{ position: "absolute", top: 10, left: 10 }}>
//         <h1>Jennifer Roadmap</h1>
//         <h2>Goal: Be a billionaire by the age 30</h2>
//       </div>
//       <ReactFlow
//         nodes={nodes}
//         onNodesChange={onNodesChange}
//         edges={edges}
//         onEdgesChange={onEdgesChange}
//       >
//         <Background />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// }

// import React, { useState, useEffect, useCallback } from "react";
// import ReactFlow, {
//   Controls,
//   Background,
//   applyNodeChanges,
//   applyEdgeChanges,
// } from "reactflow";
// import "reactflow/dist/style.css";
// import './RoadMapScreen.css';

// function generateInitialNodesEdges(response) {
//   const nodes = [];
//   const edges = [];
//   let y = 150;
//   let x = 50;

//   response.forEach((step, index) => {
//     const nodeId = `${index + 1}`;
//     nodes.push({
//       id: nodeId,
//       data: { label: step },
//       position: { x: x, y: y },
//       type: index === 0 ? 'input' : 'default',
//     });

//     if (index > 0) {
//       edges.push({
//         id: `${index}-${index + 1}`,
//         source: `${index}`,
//         target: nodeId,
//         type: 'straight',
//       });
//     }

//     // Update x and y for next node
//     x += 350; // Increase x to spread nodes horizontally
//     if ((index + 1) % 3 === 0) { // After every 3rd node, move to the next row
//       y += 150; // Increase y to move to the next row
//       x = 50; // Reset x to start from the left
//     }
//   });

//   return { nodes, edges };
// }

// function RoadMapScreen({ response }) {
//   const [nodes, setNodes] = useState([]);
//   const [edges, setEdges] = useState([]);

//   useEffect(() => {
//     const { nodes, edges } = generateInitialNodesEdges(response);
//     setNodes(nodes);
//     setEdges(edges);
//   }, [response]);

//   const onNodesChange = useCallback(
//     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//     []
//   );
//   const onEdgesChange = useCallback(
//     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//     []
//   );

//   return (
//     <div style={{ height: 700 }}>
//       <div style={{ position: "absolute", top: 10, left: 10 }}>
//         <h1>Jennifer Roadmap</h1>
//         <h2>Goal: Be a billionaire by the age 30</h2>
//       </div>
//       <ReactFlow
//         nodes={nodes}
//         onNodesChange={onNodesChange}
//         edges={edges}
//         onEdgesChange={onEdgesChange}
//       >
//         <Background />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// }

// export default RoadMapScreen;

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

var initialValueNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 50, y: 150 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 400, y: 150 },
  },
  {
    id: "3",
    data: { label: "World" },
    position: { x: 750, y: 150 },
  },
  {
    id: "4",
    data: { label: "World" },
    position: { x: 750, y: 300 },
  },
  {
    id: "5",
    data: { label: "World" },
    position: { x: 400, y: 300 },
  },
  {
    id: "6",
    data: { label: "World" },
    position: { x: 50, y: 300 },
  },
  {
    id: "7",
    data: { label: "World" },
    position: { x: 50, y: 450 },
  },
  {
    id: "8",
    data: { label: "World" },
    position: { x: 400, y: 450 },
  },
];
const initialEdges = [
  { id: "1-2", source: "1", target: "2", type: "default" },
  { id: "2-3", source: "2", target: "3", type: "default" },
  { id: "3-4", source: "3", target: "4", type: "default" },
  { id: "4-5", source: "4", target: "5", type: "default" },
  { id: "5-6", source: "5", target: "6", type: "default" },
  { id: "6-7", source: "6", target: "7", type: "default" },
  { id: "7-8", source: "7", target: "8", type: "default" },
];
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
          type: "default",
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
