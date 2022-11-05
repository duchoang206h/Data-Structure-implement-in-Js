function swap (arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function bubbleSort(arr, direction){
    const cloneArr = [...arr];
    for(let i = 0; i< cloneArr.length; i++){
        for(let j = 0; j< cloneArr.length; j++)
            if(cloneArr[j] > cloneArr[j+1] && direction === 'asc' || cloneArr[j]< cloneArr[j+1] && direction === 'desc'){
                swap(cloneArr, j, j+1)
            }
    }
    return cloneArr
}
const test = () => {
    const arr = [8,3,6,4,5,9,2];
    console.log(`insertionSort: `, bubbleSort(arr, 'desc'));
}
test()