/* 
집합 동작
합집합, 교집합, 차집합
*/

function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.defference = difference;
  this.show = show;
}

function add(data) {
  if (dataStore.includes(data)) {
    return;
  } else {
    dataStore.push(data);
  }
}

function remove(data) {

}