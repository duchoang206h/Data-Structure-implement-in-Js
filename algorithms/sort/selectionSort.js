function swap (arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
/**
 * 
 * @param {[Number]} arr 
 * @param {("asc"|"desc")} direction 
 * @returns {[Number]}
 */
function selectionSort(arr, direction) {
    let min;
    let cloneArr = [...arr];
    for(let i = 0; i< cloneArr.length; i++){
        min = i;
        for(let j = i; j< cloneArr.length; j++){
            if(cloneArr[j] < cloneArr[min] && direction == 'asc' || cloneArr[j] > cloneArr[min] && direction == 'desc') min = j;
        }
        swap(cloneArr, min, i)
    }
   
    return cloneArr
}
const test = () => {
    const arr = new Array(100).fill(null).map(()=> Math.floor(Math.random()*100));
    console.log(`selectionSort`, selectionSort(arr, 'desc'))
}
test()