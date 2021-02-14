const express = require('express')
const app = express()
const port = 3000
const dt = new Date()
let req_ms = ""
let res_ms = ""

app.use((req, res, next) => {
  req_ms += Date.now()
  next();
});

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
  res_ms += Date.now()
  if (req_ms.length !== 0 ) {
    console.log(`${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} |${req.method} from ${req.originalUrl}|total time:${res_ms-req_ms}ms`)
  }
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
  res_ms += Date.now()
  if (req_ms.length !== 0 ) {
    console.log(`${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} |${req.method} from ${req.originalUrl}|total time:${res_ms-req_ms}ms`)
  }
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
  res_ms += Date.now()
  if (req_ms.length !== 0 ) {
    console.log(`${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} |${req.method} from ${req.originalUrl}|total time:${res_ms-req_ms}ms`)
  }
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
  res_ms += Date.now()
  if (req_ms.length !== 0 ) {
    console.log(`${dt.getFullYear()}-${dt.getMonth()}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} |${req.method} from ${req.originalUrl}|total time:${res_ms-req_ms}ms`)
  }
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})