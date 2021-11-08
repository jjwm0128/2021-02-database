import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    //여기서 의미하는 /는 select/를 의미
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();

    res.render("select", {
        title: "직원 테이블",
        title2: "부서 테이블",
        employee,
        department
    });
    //여기서부터 select.hbs랑 연동
});

module.exports = router;