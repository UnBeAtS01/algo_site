import React, { useEffect } from "react";
import logo from "../assests/sorting.svg";
import logo2 from "../assests/prims.svg";
import logo3 from "../assests/bfs_dfs.svg";
import logo4 from "../assests/working.svg";
import cpu from "../assests/cpu.svg";
import Card from "./card.js";
import "./visualiz.css";
function Visualizer(props) {
  const arr = {
    sorting:
      "All sorting algorithm visualizer for better understanding.It show u step by step how different sorting algorithm work.",
    graph:
      "Visualizer for 3 main concept under graph BFS,DFS and Dijikstra algorithm.It show u how every thing work inside this 3 graph concept",
    mst: "Visualizer for finding MST(minimum spanning tree).It will give you clear picture of 2 main algorithm(prims/kruskal) and how it work.",
    sheduler:
      "Visualizer of cpu sheduling algorithm.It will give You clear picture of how cpu_sheduling algorithm work.I implemented it for both preemptive and non-preemptive. ",
    sooner: "Thinking and Implementing.... :)",
  };
  return (
    <div className="visual">
      <Card
        image={logo}
        text={arr.sorting}
        title="SORTING"
        link="https://quirky-bhaskara-b6fdf5.netlify.app/"
        codebase="https://github.com/UnBeAtS01/visualizer"
      />
      <Card
        image={logo2}
        text={arr.graph}
        title="GRAPH"
        link="https://wonderful-ride-21998d.netlify.app/"
        codebase="https://github.com/UnBeAtS01/vis-2.0"
      />
      <Card
        image={logo3}
        text={arr.mst}
        title="MST"
        link="https://cocky-jennings-b427cf.netlify.app/"
        codebase="https://github.com/UnBeAtS01/prims_kruskal_vis3"
      />
      <Card
        image={cpu}
        text={arr.sheduler}
        title="OS"
        link="https://cpu-sheduling-vis.vercel.app/"
        codebase="https://github.com/UnBeAtS01/CPU_sheduling_vis"
      />
      <Card
        image={logo4}
        text={arr.sooner}
        title="WORKING..."
        codebase="https://github.com/UnBeAtS01"
      />
    </div>
  );
}

export default Visualizer;
