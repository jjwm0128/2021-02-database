import mysql from "mysql2";

//데이터 베이스와 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: "localhost",
        user: "root",
        database: "week10",
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
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`);
        return rows;
    },
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        return rows;
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department order by Dnumber`);
        return rows;
    }
}


//delete query
//where을 사용 특정 조건에서 값을 삭제
export const deleteSql = {
    // 매개변수로 data값을 가져오게 수정함
    deleteEmployee : async (data) => {
        console.log('deleteSql.deleteEmployee:',data.Ssn);
        const sql = `delete from Employee where Ssn=${data.Ssn}`;
        await promisePool.query(sql);
    },
    //data.Ssn이 Ssn인 데이터를 delete
    deleteDepartment : async (data) => {
        console.log('deleteSql.deleteDepartment:',data.Dnumber);
        const sql = `delete from department where Dnumber=${data.Dnumber}`;
        await promisePool.query(sql);
    }
    //data.Dnumber가 Dnumber인 데이터 delete
}