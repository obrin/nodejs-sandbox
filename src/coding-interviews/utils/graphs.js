import { print } from './index.js'

class Node {
  constructor(id) {
    this.id = id
    this.adjacent = new Set() // edges
  }
}
export class Graph {
  constructor() {
    this.nodeLookup = new Map()
  }
  getNode(id) {
    let node = this.nodeLookup.get(id)
    if (!node) {
      node = new Node(id)
      this.nodeLookup.set(id, node)
    }
    return node
  }
  addEdge(sourceId, destinationId) {
    const source = this.getNode(sourceId)
    const destination = this.getNode(destinationId)
    source.adjacent.add(destination)
  }
  hasPathDFS(sourceId, destinationId) {
    const visited = new Set()
    const s = this.getNode(sourceId)
    const d = this.getNode(destinationId)

    return this._hasPathDFS(s, d, visited)
  }
  _hasPathDFS(source, destination, visited) {
    if (visited.has(source.id)) {
      return false
    }

    visited.add(source.id)

    if (source === destination) {
      return true
    }

    for (const edge of source.adjacent) {
      if (this._hasPathDFS(edge, destination, visited)) {
        return true
      }
    }

    return false
  }
  hasPathBFS(sourceId, destinationId) {
    return this._hasPathBFS(this.getNode(sourceId), this.getNode(destinationId))
  }
  _hasPathBFS(source, destination) {
    const nextToVisit = [source]
    const visited = new Set()

    while (nextToVisit.length) {
      const node = nextToVisit.shift()

      if (visited.has(node.id)) return false
      if (node === destination) return true

      visited.add(node.id)

      for (const child of node.adjacent) {
        nextToVisit.push(child)
      }
    }
    return false
  }
}

function createGraph() {
  const graph = new Graph()
  graph.addEdge(1, 2)
  graph.addEdge(1, 4)
  graph.addEdge(2, 3)
  graph.addEdge(3, 4)

  // 1 -> 2, 4 | 2 -> 3 | 3 -> 4

  return {
    DFS: graph.hasPathDFS(1, 2),
    BFS: graph.hasPathBFS(1, 3),
  }
}

print(createGraph)()
