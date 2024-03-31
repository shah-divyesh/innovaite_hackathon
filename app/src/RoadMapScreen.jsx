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
import _ from "lodash";

import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";


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
const RoadMapScreen = () =>{
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [initialNodes, setInitialNodes] = useState(initialValueNodes);
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
 
  useEffect(() => {
    setNodes(initialNodes);
  }, [initialNodes]);
 
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
    <div style={{ height: 700, }} >
      {/* <div style={{ position: "absolute", top: 10, left: 10 }}>
        <h1>Jennifer Roadmap</h1>
        <h2>Goal: Be a billionaire by the age 30</h2>
      </div>
 
      <div className="w-[720px] mx-auto py-24">
        <div className="w-full justify-center items-center px-8">
          <form className="w-full text-center" onSubmit={handleSubmit}>
            <div className="md-6">
              <label
                className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Just say/ask something:
              </label>
            </div>
            <div className="py-4">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:shadow-outline"
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
 
            <div className="">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div> */}
 
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
}

export default RoadMapScreen;
