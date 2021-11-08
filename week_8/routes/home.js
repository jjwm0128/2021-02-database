import express from "express";
import { insertSql, selectSql } from "../database/sql";

//sql.js에서 작성한 insertsql, selectsql (중괄호는 보통 사용자가 만든 모듈)가져온다

const router = express.Router();

router.get('/', (req, res) => {
    res.render("home"); 
});
//home.hbs파일을 찾아서 렌더링한다

router.post('/', (req, res) => {
    //삽입버튼을 눌렀을때 처리해야될거를 여기서 한다.(home.hbs에서 method를 post로 넘겨서)

    const vars = req.body;
    const var_length = Object.keys(req.body).length;
    //넘어오는걸 vars에 저장, 길이는 var_length에 저장

    if (var_length > 4) {
        //department와 employee구분을 위해 
        //employee는 4개이기 때문에 4개 초과면 department를 받고 아니면 employee를 받는다
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        insertSql.setEmployee(data);
        //insertsql에 data를 넘겨줌
    }
    else {
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);
    }
    res.redirect('/'); 
    //입력 후에 어떤페이지를 가느냐 원래 홈이었는데 다시 홈으로 가니까 새로고침
})

module.exports = router;