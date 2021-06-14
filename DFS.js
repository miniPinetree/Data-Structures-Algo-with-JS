/* 
깊이 우선 검색에서는 한 정점에서 시작해 마지막 정점이 나올 때까지 모든 경로를 탐색한 다음
다시 이전 경로로 거슬러 올라가 다음 경로 찾기를 반복해 더 이상 방문할 경로가 없을 때까지 탐색을 수행
어떤 항목을 찾으려는 '검색'이 아니라 그래프에서 어떤 경로가 존재하는지 파악하는 과정에 가깝다.

## 작동방식
1. 방문하지 않은 정점을 방문한 다음 방문했음으로 표시한다.
2. 재귀적으로 정점의 인접 리스트에서 방문하지 않았던 다른 정점을 방문한다.

방문한 정점을 저장할 배열을 추가한 다음 모든 요소를 false로 초기화해야 한다.


##그래프 객체와 연결해서 코드 고려할 것.
this는 그래프 객체를 구현한 것에서 파생된 것임.
*/

const marked = [];
for (let i = 0; i < vertices; ++i) {
  marked[i] = false;
};

function dfs(v) {
  marked[v] = true;

  for (let w of this.adj[v]) {
    if (!marked[w]) {
      this.dfs(w);
    }
  }
}

// 모든 경로 (방문 정점) 확인 하기 
function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];

  for (let i = 0; i < this.vertices; ++i) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.marked = [];
  for (let i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
}

function addEdge(v,w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

function showGraph() {
  for (let i = 0; i < this.vertices; ++i) {
    putstr(i + " -> ");
    for (let j = 0; j < this.vertices; ++j) {
      if (this.adg[i][j] !== undefined) putstr(this.adj[i][j] + ' ');
    }
  print();
  }
}

function dfs(v) {
  this.marked[v] = true;
  if (this.adj[v] !== undefined) {
    print(`Visited vertex: ${v}`);
  }
  this.adj[v].forEach(vertex => 
}
                      
//                       (고슴도치 책보고 완성하기..)
