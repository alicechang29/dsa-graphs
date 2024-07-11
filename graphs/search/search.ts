import { UGraphNodeStr } from "../graph/graph";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
    start: UGraphNodeStr,
    result: UGraphNodeStr[] = [],
    visited = new Set([start])): UGraphNodeStr[] {

      result = [start]

      for(const node of start.adjacent){
        visited.add(node)
        if(!visited.has(node)){
          result.push(...rDfs(node, result, visited))
        }
      }
      return result
}

/** Return array of nodes, in DFS order (iterative version)  */

function iDfs(start: UGraphNodeStr): UGraphNodeStr[] {
  return ["todo"];
}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): UGraphNodeStr[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };