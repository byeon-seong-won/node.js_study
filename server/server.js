const express = require("express"); // npm i express | yarn add express
const mysql   = require("mysql");   // npm i mysql | yarn add mysql
const app     = express();
const PORT    = 3001; // 포트번호 설정

const db = mysql.createPool({
  host: "127.0.0.1", // 호스트
  user: "root",      // 데이터베이스 계정
  password: "6524",      // 데이터베이스 비밀번호
  database: "product",  // 사용할 데이터베이스
});




// post 요청 시 값을 객체로 바꿔줌
app.use(express.urlencoded({ extended: true })) 

// 서버 연결 시 발생
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});


app.get("/api/product", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  
  const sqlQuery = "SELECT * FROM products";

  db.query(sqlQuery, (err, result) => {
      res.send(result);
  });
});







