import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    //여기서 의미하는 /는 select/를 의미
    const department = await selectSql.getDepartment();
    const employee = await selectSql.getEmployee();
//department, employee 테이블 정보를 select해와서 저장
    res.render("select", {
        title: "Employee",
        title2: "Department",
        department,
        employee
    });
    //여기서부터 select.hbs랑 연동해서 출력
});

module.exports = router;