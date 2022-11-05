/**
 * 
 * @param {Array<T>} arr 
 * @param {T} value 
 * @returns { Number }
 */
function binarySearchIteration (arr, value) {
    let mid, low = 0, height = arr.length - 1;
    
    while(low <= height){
        mid = Math.floor((low+ height)/2);
        if(value == arr[mid]) return mid;
        if(value < arr[mid]){
            height = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return - 1;
};
// a way of divide and conquer strategy
function binarySearchRecursion(arr, value, low, height){
    if(low === height){
        if(value === arr[low]) return low;
        return -1;
    }else{
        let mid = Math.floor((low + height)/2);
        if(value === arr[mid]) return mid;
        if(value < arr[mid]) 
            return binarySearchRecursion(arr, value, low, mid - 1)
        return binarySearchRecursion(arr, value, mid + 1, height)
    }

}
const test = () =>{
    const arr = [];
    for(let i = 0; i< 100; i ++){
        arr.push(i)
    }
    console.log(`binarySearchIteration`, binarySearchIteration(arr, 40))
    console.log(`binarySearchRecursion`, binarySearchRecursion(arr, 40, 0, arr.length - 1))
}
test()