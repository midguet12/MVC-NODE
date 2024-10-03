import app from "./app.js";
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello como estas Midguet!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
