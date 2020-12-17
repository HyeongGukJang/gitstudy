
function AAA(){
    console.log("AAA");
    let name = "홍길동";
    function sayHello(){
        // 자바스크립트의 클로저 개념
        console.log("hello " + name);
    }
    return sayHello;
}

let sayHello = AAA();
sayHello();
