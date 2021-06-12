/* # 연결 리스트
대부분 프로그래밍 언어에서 배열은 길이가 정해져 있어 추가로 데이터를 입력하기 어렵다.
추가나 삭제가 가능한 경우라도 나머지 요소를 이동해야 하므로 어려움이 따른다.
자바스크립트 배열은 split()함수를 이용해 원하는 동작을 간단하게 수행할 수 있지만 `객체`이므로 효율이 떨어진다.
대안으로 연결 리스트를 사용할 수 있다. 일차원 배열 대부분은 연결 리스트로 변경 가능 
except when you nedd random access to the elements of a list. 
When random access is required, an array is the better data structure to use.

### 배열과 달리 연결 리스트의 요소는 다른 요소와의 '관계'를 통해 참조

## An Object-Based Linked List Design
*/

function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findPrevious = findPrevious;
  this.display = display;
}

function find(item) {
  const currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode; //item 옆에 삽입
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null )) {
    print(currNode.next.element); //데이터를 포함하는 노드만 출력할 수 있도록 헤드 노드는 제외한다.
    currNode = currNode.next;
  }
}

function findPrevious(item) {
  var currNode = this.head;
  while (!(currNode.next == null) && (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item) {
  var prevNode = findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  };
}

//test
var cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display(); // Conway, Russellville, Alma

cities.remove("Russellville");
cities.display(); //Conway, Alma
