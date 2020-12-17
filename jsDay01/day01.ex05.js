// day01ex05.js - typeof 연산자
// typeof 연산자는 데이터의 자료형을 알고자 할 때 사용한다.
// typeof 연산자를 사용 할 때는 함수처럼 사용 가능하다.

console.log(typeof 500);
console.log(typeof "Hello");
console.log(typeof null);
console.log(typeof undefined);

var name;
console.log('name의 타입은', typeof name);
// null과 undefined는 다르다.
name = '김길동';
console.log('name : ', name);
// 숫자가 아닌데 숫자처럼 쓸 때 NaN
console.log(typeof NaN);

// 자바스크립트에서는 모든 요소가 전부 객체로 취급된다.
// 자바의 경우 : B -> C -> c++(스몰토크)
// 자바스크립트는 Lisp 언어로부터 계승된 언어이다.
// R언어도 Lisp에서 물려 받은 언어이다.
