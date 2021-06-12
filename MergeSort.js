/*
# Merge Sort
## 개념
  >**배열을 나누어 각각을 정렬한 다음 다시 합하여 정렬하는 방법, 분할정복 방식이다**

재귀 알고리즘으로 구현하는 하향식 머지 정렬이 있고
비재귀 또는 반복 방식으로 구현하는 상향식 머지 정렬이 있다.


## 과정
상향식 머지 정렬에서는 먼저 정렬할 데이터를 한 개의 요소를 갖는 여러 배열로 분할한다. 그리고 이들의 배열의 left와 right배열을 합치면서 최종적으로 정렬된 데이터를 포함하는 하나의 배열이 만들어질 때까지 이 과정을 반복한다.

## 시간복잡도

>### Big-O : O(nlogn)

## 장단점
### 장점

### 단점
- 데이터 집합이 클 때는 두 개의 정렬된 서브배열을 저장할 큰 공간이 추가로 필요함.
*/

function mergeSort(arr) {
  if (arr.length < 2) {
    return;
  }
  //배열의 크기를 제어하는 변수
  let step = 1;
  let left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArrays(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    if (right < arr.length) {
      mergeArrays(arr, left, left + step, right, arr.length);
    }
    step *= 2;
  }
}

function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
  let rightArr = new Array(stopRight - startRight + 1);
  let leftArr = new Array(stopLeft - startLeft + 1);
  
  k = startRight;
  for (let i = 0; i < (rightArr.length - 1); ++i) {
    rightArr[i] = arr[k];
    ++k;
  }

  k = startLeft;
  for (let i = 0; i < (leftArr.length - 1); ++i;) {
    leftArr[i] = arr[k];
    ++k;
  }

  rightArr[rightArr.length - 1] =  Infinity;
  leftArr[leftArr.length - 1] = Infinity;
  let m = 0;
  let n = 0;

  for (let k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    }
    else {
      arr [k] = rightArr[n];
      n++;
    }
    console.log("left array -", leftArr);
    console.log("right array -", rightArr);
  }
}

const nums = [6,10,1,9,4,8,2,7,3,5];
console.log(nums);
console.log(mergeSort(nums));