import express from "express";
import { selectSql } from "../database/sql";

//sql.js에서 작성한 selectsql (중괄호는 보통 사용자가 만든 모듈)가져온다

const router = express.Router();

router.get('/', (req, res) => {
    res.render("login"); 
});
//login.hbs파일을 찾아서 렌더링한다

router.post('/',async (req, res) => {
    //로그인버튼을 눌렀을때 처리해야될거를 여기서 한다.(login.hbs에서 method를 post로 넘겨서)

    const vars = req.body;
    //입력받은 정보는 vars에 저장
    const users = await selectSql.getUsers();
    //데이터베이스의 정보는 users에 저장
    let whoAmI='';
    let checkLogin=false;
    //admin user 구분을 위한 id를 저장할 whoAmI와 로그인 성공여부를 체크하는 checkLogin

   // for(let i=0;i<users.length;i++){
    //    if (vars.id===user[i].id&&vars.password===user[i].password)
   //     {
//
  //      }
   // }
   users.map((user) => {
       //map함수는 callback함수를 받아서 하나씩 기능을 수행
       //user를 처음부터 마지막까지 돌려줌 위의 주석처리된 for문이랑 동일
       if(vars.id===user.Id && vars.password ===user.Password)
       //입력받은 id, password가 데이터베이스 내의 정보랑 같으면
       {
           checkLogin=true;
           //로그인 성공
           if(vars.id==='admin'){
               whoAmI='admin';
               //입력받은 id가 admin이면 whoAmI도 admin
           }
           else{
               whoAmI='users';
               //admin이 아니면 WhoAmI는 users
           }
       }

   })
   console.log("whoAmI:",whoAmI);

   if(checkLogin && whoAmI ==='admin'){
       res.redirect('/delete');
       //로그인이 성공하고 로그인한 아이다가 admin이면 /delete로 이동
   }
   else if(checkLogin&&whoAmI==='users'){
       res.redirect('/select');
       //로그인이 성공하고 로그인한 아이디가 users면 /select로 이동
   }
   else{
       res.send("<script>alert('로그인에 실패했습니다.'); location.href='/'</script>")
       //로그인에 실패하면 메시지 출력
   }
})

module.exports = router;