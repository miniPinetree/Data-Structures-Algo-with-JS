/* 
## BFS
너비 우선 탐색은 첫 번째 정점에서 시작해 첫 정점과 가까운 정점들을 먼저 방문한다.
그래프를 `계층별로 탐색`한다.

## 작동방식
1. 현재 정점과 인접한 정점 중 방문하지 않은 정점을 찾아 방문한 정점 리스트로 추가한 다음
정점을 `큐`로 삽입한다.
2. 그래프의 다음 정점 v를 방문한 정점 리스트에 추가한다.
3. v와 인접한 정점 중 방문하지 않은 모든 정점을 방문한 정점 리스트로 추가한 다음 큐에 삽입한다.

## 최단 경로 찾기
한 정점에서 다른 정점으로 도달하는 경로를 저장하도록 수정
연결 간선 정보를 유지할 배열이 필요하다. (아래 코드에서 edgeTo가 그 역할을 한다.)

##그래프 객체와 연결해서 코드 고려할 것.
this는 그래프 객체를 구현한 것에서 파생된 것임.
*/
edgeTo = [];

function bfs(s) {
    let queue = [];
    this.marked[s] = true;
    queue.push(s);

    while (queue.length > 0) {
        let v = queue.shift();
        for (let w in this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}