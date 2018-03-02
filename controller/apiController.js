

class Api {
  constructor(){

  }
  getLabels(req, res, next){
    console.log(1)
    res.send([{id:1, name:'javascript'}, {id:2, name:'生活文字'}, {id:3, name:'前端杂谈'}]);
  }
}

export default new Api()