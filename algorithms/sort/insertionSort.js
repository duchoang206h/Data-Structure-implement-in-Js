/**
 * 
 * @param {[Number]} arr 
 * @param {("asc"|"desc")} direction 
 * @returns {[Number]}
 */
function insertionSort(arr, direction){
    const cloneArr = [...arr];
    let key, j;
    for(let i = 1; i< cloneArr.length; i++){
        key = cloneArr[i];
        j = i - 1;
        while(j >= 0 && (key < cloneArr[j] && direction ==='asc' || key > cloneArr[j] && direction ==='desc')){
            cloneArr[j+1] = cloneArr[j];
            j--;
        }
        cloneArr[j+1] = key;
    }
    return cloneArr;
}
// 8 3 6 4 5 9 2
const test = () => {
    const arr = [8,3,6,4,5,9,2];
    console.log(`insertionSort: `, insertionSort(arr, 'asc'));
}
test()