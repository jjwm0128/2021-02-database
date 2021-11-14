# 2021-02-database

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
     - (SSH 설정한 경우) git clone git@github.com:mskim1024/2021-02-database.git
     - (token을 사용하는 경우) git clone https://github.com/mskim1024/2021-02-database.git
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
3. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root', // 본인의 mysql user id
    database: 'tutorial', // 본인이 만든 데이터베이스 이름
    password: 'password', // 본인의 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);
</code>
</pre>

<br>

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111|
이순신|인공지능공학과|인공지능|12181111|
<br>

## 텍스트 강조
 - **데이터베이스** 실습은 재미 ~~없어요~~있어요.

<br>

## 3주차 DB 테이블
<center>user 테이블</center>

---

num|학번|이름|학과|입학일|이메일
---|---|---|---|---|---|
1|12171111|홍길동|정보통신공학과|2017-03-01|gildong@gmail.com|
2|12171112|김현수|정보통신공학과|2017-03-01|hyunsoo@gmail.com|
3|12191111|고우석|정보통신공학과|2019-03-01|wooseok@gmail.com|

이용자의 pk인 num, 학번, 이름, 학과, 입학일 이메일이 들어있는 user 테이블 입니다.

<br>

## 8주차 DB 테이블
<center>employee 테이블</center>

---

성|Minit|이름|사번|생일|주소|성별|연봉|상관|부서번호
---|---|---|---|---|---|---|---|---|---|
고|A|우석|11111111|1999-01-01|서울|남|1000|null|1|
김|B|현수|11111112|1999-01-01|서울|남|1200|null|2|
정|C|우영|11111113|1999-01-01|서울|남|1200|null|3|
유|D|강남|11111114|1999-01-01|서울|남|1300|null|2|
채|E|은성|11111115|1999-01-01|서울|남|1500|null|3|

직원의 성, Minit, 이름, 사번, 생일, 주소, 성별, 연봉, 상관, 부서번호가 들어있는 employee 테이블 입니다.

<br>
<center>department 테이블</center>

---

부서명|부서번호|담당직원|부서창설일
---|---|---|---|
정보통신공학과|1|11111111|2010-01-01|
신소재공학과|2|11111112|2010-01-01|
경영학과|3|11111113|2010-01-01|

부서의 부서명, 부서번호, 담당직원, 창설일이 들어있는 department 테이블 입니다.

<br>

## 10주차 DB 테이블
<center>employee 테이블</center>

---

성|Minit|이름|사번|생일|주소|성별|연봉|상관|부서번호
---|---|---|---|---|---|---|---|---|---|
John|B|Smith|123456789|1965-07-09|Fondren|남|30000|333445555|5|
Franklin|T|Wong|333445555|1995-12-08|Voss|남|40000|888665555|5|
Joyce|A|English|453453453|1972-07-31|Rice|여|25000|333445555|5|
Ramesh|K|Narayan|666884444|1962-09-15|Fire Oak|남|38000|333445555|5|
James|E|Borg|888665555|1937-11-10|Stone|남|55000|null|1|
Jennifer|S|Wallace|987654321|1941-06-20|Berry|여|43000|888665555|4|

직원의 성, Minit, 이름, 사번, 생일, 주소, 성별, 연봉, 상관, 부서번호가 들어있는 employee 테이블 입니다.

<br>
<center>department 테이블</center>

---

부서명|부서번호|담당직원|부서창설일
---|---|---|---|
정보통신공학과|1|null|null|
컴퓨터공학과|2|null|null|
신소재공학과|3|null|null|

부서의 부서명, 부서번호, 담당직원, 창설일이 들어있는 department 테이블 입니다.