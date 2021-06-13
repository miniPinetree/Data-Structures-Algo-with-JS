/* 
## 개념 
그래프는 정점과 간선으로 이루어져 있다. 
1. 방향성 그래프 (directed graph, digraph)
2. 무방향성 그래프 (unordered graph)

경로는 그래프에 있는 일련의 정점들을 모아 놓은 것으로 
경로의 길이는 첫버째 정점에서 마지막 정점까지의 간선 수를 의미한다.
1.simple cycle 간선이나 정점이 반복되지 않는 경로
2. general cycle 첫 정점과 마지막 정점을 제외한 다른 정점이 반복되는 경로

## 주의
어떤 자료구조를 이용해 그래프를 구성하느냐에 따라 그래프 알고리즘의 효율성이 좌우됨.
그래프는 트리와 다르다! => 그래프는 트리에 비해 훨씬 유연한 구조
트리의 노드를 정점으로 간주하여 객체기반으로 접근하면 
그래프의 크기가 커질수록 효율성이 떨어진다.
*/

//그래프의 정점을 저장할 Vertex 클래스 (LinkedList, Tree에서의 Node와 유사한 역할 담당)
function Vertex(lable) {
    this.lable = label;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];

    for (let i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.toString = toString;
}