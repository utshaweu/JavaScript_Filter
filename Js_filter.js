const arr1 = [{id:'1',name:'A'},{id:'2',name:'B'},{id:'3',name:'C'},{id:'4',name:'D'}];
const arr2 = [{id:'1',name:'A',state:'healthy'},{id:'3',name:'C',state:'healthy'}];
const filterByReference = (arr1, arr2) => {
   let res = [];
   res = arr1.filter(el => {
      return arr2.find(element => {
         return element.id === el.id;
      });
   });
   return res;
}
console.log(filterByReference(arr1, arr2));


//Time complexity O(n^2)
