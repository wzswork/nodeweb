import apiRouter from './api'


export default app=>{
  app.get('/', function(req, res, next){
    let html = fs.readFileSync(resolve('./views/' + 'index.html'), 'utf-8')
    res.send(html)
  })
  app.use('/api', apiRouter)
}
