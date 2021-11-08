import express from "express";
import { selectSql, deleteSql } from "../database/sql";
//sql.js에서 작성한 insertsql, deletesql (중괄호는 보통 사용자가 만든 모듈)가져온다.


const router = express.Router();



// 데이터 베이스 안의 employee, department 테이블 출력
router.get("/", async(req, res) => {
    const employee =  await selectSql.getEmployee();
    const department = await selectSql.getDepartment();
    res.render("delete", {
        title: "직원 삭제 기능",
        title2: "부서 삭제 기능",
        employee,
        department
    });
});


//get은 데이터를 받아서 보여주고 post는 데이터를 처리할때
//삭제 버튼을 눌렀을 경우 delete query를 실행하며 조회 페이지로 이동
router.post("/", async (req, res) => {

    //delete.hbs에서 버튼을 눌렀을때 req를 받는데 delBtn1은 employee 테이블, delBtn2는 department 테이블의 삭제버튼 클릭시 받아온다.
    const vars = req.body;
        if (!vars.delBtn2) {
            //입력받은 객체에 delBtn2가 없으면 즉 employee면
        const data = {
            Ssn: vars.delBtn1,
            //Ssn을 delBtn1으로 설정
        };
       await  deleteSql.deleteEmployee(data);
       //그리고 deletesql을 불러온다
    }
    else{
        //department면
    const data = {
        Dnumber: vars.delBtn2,
        //Dnumber를 delBtn2로 설정
    }
    await deleteSql.deleteDepartment(data);
    //그리고 deletesql을 불러온다
    }
    res.redirect("/delete");
    //다끝나면 /delete로 redirect 새로고침 효과
});

module.exports = router;