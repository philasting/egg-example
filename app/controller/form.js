'use strict';

const Controller = require('egg').Controller;
class FormController extends Controller {
    async post(){
        this.ctx.body = {
          msg: this.ctx.response,
          res: this.ctx.request.body
        }
    }
}
module.exports = FormController;