/*
단방향 연결 리스트는 역방향 노드 탐색이 어려움
Although traversing a linked list from the firrst node to the last node is straightforward,
it is not as easy to traverse a linked list backward.
노드에 이전 노드의 링크를 저장하는 프로퍼티를 추가하면 삭제할 때 이전 노드를 찾을 필요가 없어 삭제 과정 간단 (장점)
previous라는 프로퍼티가 추가되면서 리스트에 노드를 추가할 때 작업량이 늘어남. (단점)

### 단방향 연결리스트와의 차이
*/

//previous 프로퍼티가 추가되었으므로 단방향에서의 findPrevious 메소드는 필요하지 않음.
function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}

function findLast() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    currNode = currNode.next;
  }
  return currNode;
}
//역순으로 출력하는 메소드
function dispReverse() {
  var currNode = this.head;
  currNode = this.findLast();
  while(!(currNode.previous == null)) {
    print(currNode.element);
    currNode = currNode.previous;
  }
}

