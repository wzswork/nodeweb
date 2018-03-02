

class Api {
  constructor(){

  }
  getLabels(req, res, next){
    res.send([{id:1, name:'javascript'}, {id:2, name:'生活文字'}, {id:3, name:'前端杂谈'}]);
  }
}