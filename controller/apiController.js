import BlogModel from '../model/blog'
import crypto from 'crypto'
import formidable from 'formidable'
import dtime from 'time-formater'

class Api {
  constructor(){

  }
  async login(req, res, next){
		const form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			if (err) {
				res.send({
					status: 0,
					type: 'FORM_DATA_ERROR',
					message: '表单信息错误'
				})
				return
			}
			const {username, password, status = 1} = fields;
			try{
				if (!username) {
					throw new Error('用户名参数错误')
				}else if(!password){
					throw new Error('密码参数错误')
				}
			}catch(err){
				console.log(err.message, err);
				res.send({
					status: 0,
					type: 'GET_ERROR_PARAM',
					message: err.message,
				})
				return
			}
			const newpassword = this.encryption(password);
			try{
				const admin = await AdminModel.findOne({username})
				if (!admin) {
					const adminType = status == 1 ? '管理员' : '超级管理员'
					const adminId = await this.getId('adminId');
					const newAdmin = {
						username, 
						password: newpassword, 
						id: adminId,
						create_time: dtime().format('YYYY-MM-DD HH:mm'),
						type: adminType,
						status,
					}
					await AdminModel.create(newAdmin)
					req.session.adminId = adminId;
					res.send({
						status: 1,
						success: '注册管理员成功',
					})
				}else if(newpassword.toString() != admin.password.toString()){
					console.log('管理员登录密码错误');
					res.send({
						status: 0,
						type: 'ERROR_PASSWORD',
						message: '该用户已存在，密码输入错误',
					})
				}else{
					req.session.adminId = admin.id;
					res.send({
						status: 1,
						success: '登录成功'
					})
				}
			}catch(err){
				console.log('登录管理员失败', err);
				res.send({
					status: 0,
					type: 'LOGIN_ADMIN_FAILED',
					message: '登录管理员失败',
				})
			}
		})
	}
  getLabels(req, res, next){
    res.send([{id:1, name:'javascript'}, {id:2, name:'生活文字'}, {id:3, name:'前端杂谈'}]);
  }
  getDigests(req, res, next){

  }
  addBlog(req, res, next){
    const from = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
				res.send({
					status: 0,
					type: 'FORM_DATA_ERROR',
					message: '表单信息错误'
				})
				return
			}
			const {content, title, label, digest} = fields;

			try {
				const newBlog = {
					title: title,
					digest: digest,
					label: label,
					updateTime: new Date(),
					createTime: new Date()
				}
				await BlogModel.create(newBlog);
				res.send({
					status: 1,
					success: '创建文章成功',
				})
			} catch (error) {
				console.log('创建文章失败', err);
				res.send({
					status: 0,
					type: 'CREATE_BLOG_FAILED',
					message: '创建文章失败',
				})
			}
			}
    })
  }

  encryption(password){
		const newpassword = this.Md5(this.Md5(password).substr(2, 7) + this.Md5(password));
		return newpassword
	}
	Md5(password){
		const md5 = crypto.createHash('md5');
		return md5.update(password).digest('base64');
	}
}

export default new Api()