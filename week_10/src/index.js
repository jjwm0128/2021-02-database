import express from "express"; 
import logger from "morgan"; 
import path from "path";
//import를 통해 쓰려고 하는 모듈들 사용
//뒤에 experess morgan등은 원래의 이름 앞에 express logger등은 내가 재창조한 이름

import loginRouter from "../routes/login";  
import selectRouter from "../routes/select"; 
import deleteRouter from "../routes/delete"; 
// ../을 통해 week10폴더에 들어가고  뒤에 js는 생략 가능 해당 폴더에 만들어놓은 기능 사용

const PORT = 3000; 
// 웹 서버는 3000포트를 사용

const app = express(); 
//app을 통해 express의 기능을 사용할 것
//express는 서버 연결을 해주는 모듈

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");
//hbs를 사용한다

app.use(logger("dev"));
//로그를 자세히 본다


app.use('/', loginRouter); 
app.use("/select", selectRouter);
app.use("/delete", deleteRouter);
//주소를 설정해준다. /는 login이고 뒤에 /update, /select를 붙여서 해당 라우팅을 해준다
//즉 맨처음에 접속하면 login으로 접속


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})
//listen해서 서버를 실행해주는 함수
//제대로 잘 동작하는지 log를 띄워줌
