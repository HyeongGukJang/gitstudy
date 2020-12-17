
let arr = [25, 365, '김길동','홍길동',true, false];
// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);

// while문을 이용해서 배열 요소 출력하기
// let idx = 0;
// while(idx <arr.length){
//     console.log(arr[idx]);
//     // 중요! while문에서는 증감식이 들어가야한다.
//     // 끝나는 조건이 충족 되도록 해야 한다.
//     idx +=1;
// }

// while문을 for문으로 변환하기
let idx = 0;
for(let idx = 0; idx<arr.length; idx ++){

    console.log(idx +", " +arr[idx]);
    // 중요! while문에서는 증감식이 들어가야한다.
    // 끝나는 조건이 충족 되도록 해야 한다.
}