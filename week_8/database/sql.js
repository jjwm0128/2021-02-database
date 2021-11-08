import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: "localhost",
        user: "root",
        database: "week8",
        password: "!wnaudtb3023",
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async / await 사용
const promisePool = pool.promise();

// select query
// select문으로 조회해와서 return
export const selectSql = {
    //외부에서 함수를 쓰려면 위에처럼 export를 앞에 붙여야함
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows);
        return rows;
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows;
    }
}

// insert query
export const insertSql = {
    //data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
    //home.js에서 사용할 insertSql 구현
    setEmployee : async (data) => {
        // ` 안에 ${}을 넣으면 변수도 사용가능하기때문에 '을 넣는다
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;
            
            await promisePool.query(sql);
            //쿼리문 시작
    },

    setDepartment : async (data) => {
        const sql = `insert into department value (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;

            await promisePool.query(sql);
            //employee랑 동일
    }
}

// update query
//where을 사용 특정 조건에서 값을 수정
export const updateSql = {
    // 매개변수로 data값을 가져오게 수정함
    updateEmployee : async (data) => {
        const sql = `update employee set Salary = "${data.Salary}" where Minit = "A"`;
        await promisePool.query(sql);
        //Minit이 A면 data.salary수정
    },
    updateDepartment : async (data) => {
        const sql = `update department set Dname = "${data.Dname}" where Dnumber = 3`;
        await promisePool.query(sql);
        //Dnumber가 3이면 data.Dname 수정
    }
}