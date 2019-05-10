// app/service/curl.js
const Service = require('egg').Service;

class CurlService extends Service{

    async get(){
        const res = await this.ctx.curl('https://httpbin.org/get?foo=bar', {
            dataType: 'json',   // 自动解析 JSON response
            timeout: 3000,      // 3 秒超时
        });
        return res;
    }

    async post(){
        const res = await this.ctx.curl('https://httpbin.org/post',{
            method: 'POST',       // 必须指定 method
            contentType: 'json',  // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            data: {               // 传递参数
                hello:'world',
                now: Date.now(),
            },
            dataType: 'json'      // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
        });
        return res;
    }

    async put(){
        const res = await this.ctx.curl('https://httpbin.org/put',{
            method: 'PUT',
            contentType: 'json',
            data: {
                update: 'foo bar'
            },
            dataType: 'json'
        });
        return res
    }

    async delete(){
        const res = await this.ctx.curl('https://httpbin.org/delete',{
            method: 'DELETE',
            dataType:'json',
        })
        return res;
    }
}

module.exports = CurlService;