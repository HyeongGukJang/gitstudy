function text01(){
let output = 1;
for(let i = i; i<=20; i++){
    output *= i;
}
console.log(output);
}
let arr = ["사과","배","포도","딸기","바나나"];
function text02(){
    // for in 문으로 배열의 요소 출력하기
    for(let i in arr){
        console.log(`${i}번째`);
    }
}
function text03(){
    for (let item of arr){
        console.log(item);
    }
}
function text04(){
    let a = 1;
    {
        // 인터프린터 이기때문에 
        // 블럭안에 a가 아직 선언 되지 않았다
        // not defined
        // 에러발생!
        console.log(a); // 에러발생!!
        let a = 2;
    }
}

// var로 선언 한 변수는 scope가 함수단위이다.
var a = 1;

function text05(){
    {
        // 인터프린터 이기때문에 호이스팅이 발생
        console.log(a);
        var a = 2;
    }
}

text05();