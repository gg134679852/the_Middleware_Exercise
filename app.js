const express = require('express')
const app = express()
const port = 3000
const dt = new Date()


app.use((req, res, next) => {
  const req_ms = Date.now()
  
  res.on('finish',()=>{
    const res_ms = Date.now()
    console.log(`${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} |${req.method} from ${req.originalUrl}|total time:${res_ms - req_ms}ms`)
  })
  next();
});

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})