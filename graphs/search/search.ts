import { UGraphNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: UGraphNodeStr,
    result: UGraphNodeStr[] = [],
    visited = new Set([start])): UGraphNodeStr[] {

      result = [start]
      visited.add(start)

      for(const node of start.adjacent){
        if(!visited.has(node)){
          result.push(...rDfs(node, result, visited))
        }
        // visited.add(node)
      }
      return result
}

// d -> b

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): UGraphNodeStr[] {
  return ["todo"];
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): UGraphNodeStr[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };