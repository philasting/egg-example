'use strict';

const Controller = require('egg').Controller;
class NewsController extends Controller {
    async list() {
        const dataList = await this.other();
        this.ctx.body = {
            code:0,
            masg:'news list success',
            data:dataList
        };
    }

    async other() {
        return {
            list: [
                { id: 1, title: 'this is news 1', url: '/news/1' },
                { id: 2, title: 'this is news 2', url: '/news/2' }
            ]
        }
    }
}
module.exports = NewsController;