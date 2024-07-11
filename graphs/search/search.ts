import { UGraphNodeStr } from "../graph/graph";
import { Stack } from "../common/stack";

/** Return array of nodes, in DFS order (recursive version)  */

function rDfs(
  start: UGraphNodeStr,
  result: UGraphNodeStr[] = [],
  visited = new Set([start])): UGraphNodeStr[] {

  result = [start];
  visited.add(start);

  for (const node of start.adjacent) {
    if (!visited.has(node)) {
      result.push(...rDfs(node, result, visited));
    }
  }
  return result;
}

// d -> b

/** Return array of nodes, in DFS order (iterative version)  */

/*
input: node
output: array of nodes

check each node's adjacent Set
- for each adj Node, check if it's been visited
- if yes:
  - skip it
- if not:
  - add it to stack to visit
  - repeat above



  //push pop
  d -- b -- a -- c

  c
  a
  b
  d
*/

function iDfs(start: UGraphNodeStr): UGraphNodeStr[] {
  const toVisit = new Stack<UGraphNodeStr>([start]);
  const visited = new Set([start]);

  while (!toVisit.isEmpty()) {
    const currNode = toVisit.pop();
    for (let node of currNode.adjacent) {
      if (!visited.has(node)) {
        toVisit.push(node);
        visited.add(node);
      }
    }
  }

  return Array.from(visited);

}

/** Return array of nodes, in BFS order (iterative version)  */

function bfs(start: UGraphNodeStr): UGraphNodeStr[] {
  return ["todo"];
}


export { iDfs, rDfs, bfs };