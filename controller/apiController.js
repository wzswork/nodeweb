import BlogModel from '../model/blog'

class Api {
  constructor(){

  }
  login(req, res, next){
    
  }
  getLabels(req, res, next){
    res.send([{id:1, name:'javascript'}, {id:2, name:'生活文字'}, {id:3, name:'前端杂谈'}]);
  }
  getDigests(req, res, next){

  }
}

export default new Api()