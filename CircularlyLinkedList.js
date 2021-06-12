/*
단방향 연결 리스트와 같은 종류의 노드를 포함하나 
차이점은 헤드의 next 프로퍼티가 자신을 가리킴.
*/

//단방향일 때의 display에 break 조건을 추가한다.
function display() {
  var currNode = this.head;
  while(!(currNode.next == null) && !(currNode.next == "head")) {
    print(currNode.next.element);
    currNode = currNode.next;
  }
}