let count = 0;
function interpolationSearch (arr, value){
    let low = 0, height = arr.length -1, pos;
    while(low <= height){
        count ++;
        pos = low + Math.floor((value - arr[low])*(height - low)/(arr[height] - arr[low]));
        if(value === arr[pos]) return pos;
        if(value < arr[pos]) height = pos - 1;
        else low = pos + 1
    }
    return - 1
}
const test = () =>{
    const arr = [];
    for(let i = 0; i< 100; i ++){
        arr.push(i)
    }
    console.log(`interpolationSearch`, interpolationSearch(arr, 40));
    console.log(`time: `, count)
}
test()