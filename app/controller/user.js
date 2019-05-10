'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  // 增 ！
  async add() {
    // const data = this.ctx.request.body;
    const data = this.ctx.query;
    const res = await this.ctx.service.user.add(data);
    this.ctx.status = 200;
    this.ctx.body = {
      status: 200,
      res: res
    };
  }
  // 删 ！
  async dele() {
    const userId = this.ctx.query.id;
    const res = await this.ctx.service.user.dele(userId);
    this.ctx.status = 200;
    this.ctx.body = {
      status: 200,
      res: res
    };
  }
  // 改 ！
  async update() {
    const data = this.ctx.query;
    const res = await this.ctx.service.user.update(data);
    this.ctx.status = 200;
    this.ctx.body = {
      status: 200,
      res: res
    };
  }
  // 查 ！
  async info() {
    const userId = this.ctx.query.id;
    const userInfo = await this.ctx.service.user.find(userId);
    this.ctx.status = 200;
    this.ctx.body = {
      status: 200,
      res: userInfo
    };
  }
}
module.exports = UserController;