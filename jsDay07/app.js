// day07ex02_express.js
// express 모듈 불러오기
let express = require('express');
// express 서버 객체 생성
let app = express();
let static = require('serve-static');  // npm install serve-static -S
// serve - static 미들웨어 설정
app.use('/public', static( __dirname + '/public'));

// 요청 이벤트 리스너 준비한다.
// 요청: request, 응답: response
// 미들웨어 설정 방식으로 요청 이벤트 리스너를 구현.
app.get('/',function(req, res){
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write('<h1>형국이 코딩 교실 -홈</h1>');
    res.end();
});

app.get('/profile',function(req, res){
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write('형국이 약력');
    res.end(); //end()를 호출하지 않으면 무한루프가 돈다.
});

app.listen(3000, function(){
    console.log('127.0.0.1:3000 서버 실행됨');
});

