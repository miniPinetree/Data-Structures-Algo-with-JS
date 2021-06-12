/*
병합정렬처럼 분할정복 알고리즘이다. 차이는 리스트의 한 요소를 피벗(기준값)으로 선정한 다음 피벗보다 작은 요소는 하위 리스트로, 피벗보다 큰 요소는 상위 리스트로 이동시킨다. 

큰 데이터 집합을 가장 빨리 정렬할 수 있다.

작은 데이터 집합에서는 성능이 떨어질 수 있다.

### pseudocode for the QuickSort algorithm
1. 리스트를 두 개의 서브리스트로 나누는 피벗을 선택한다.
2. 피벗을 기준으로 작은 값은 피벗의 왼쪽으로 큰 값은 피봇의 오른쪽으로 오도록 모든 요소를 정렬
3. 피벗을 기준으로 분류된 각 서브리스트에 1,2번 과정을 반복
*/

function quickSort(array) {
  if (array.length === 0) {
    return [];
  };
  let left = [];
  let right = [];
  let pivot = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      console.log("moving" + array[i] + "to the left");
      left.push(array[i]);
    }
    else {
      console.log("moving" + array[i] + "to the right");
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}