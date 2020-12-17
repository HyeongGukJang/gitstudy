// day07ex02_express.js
// express 모듈 불러오기
let express = require('express');
// express 서버 객체 생성
let app = express();

// 요청 이벤트 리스너 준비한다.
// 요청: request, 응답: response
// 미들웨어 설정 방식으로 요청 이벤트 리스너를 구현.
app.use(function(request, response){
    console.log("요청 들어옴");
    response.write('<html><body>')
    response.write('<h1>Hello Node.js world!</h1>');
    response.write('<"table border = 1">')
    response.write('<tr><td>name</td><td>KIM</td></tr>')
    response.write('</table>')
    response.write('</body></html>');
    response.end();
});

app.listen(3000, function(){
    console.log('127.0.0.1:3000 서버 실행됨');
});

