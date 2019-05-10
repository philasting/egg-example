// app/service/user.js
const Service = require('egg').Service;
class UserService extends Service {
  // 增 ！
  async add(data) {
    try {
      const res = await this.app.mysql.insert('t_user', data);
      return res
    } catch (error) {
      return error
    }
  }
  // 删 ！
  async dele(uid) {
    const res = await this.app.mysql.delete('t_user', {user_id: uid});
    return res
  }
  // 改 ！
  async update(data) {
    const options = {
      where: {
        user_id: data.user_id
      }
    };
    const res = await this.app.mysql.update('t_user', data, options);
    return res
  }
  // 查 ！
  async find(uid) {
    let user;
    if (uid) {
      user = await this.app.mysql.get('t_user', { user_id: uid });
    } else {
      user = await this.app.mysql.select('t_user');
    }
    return user
  }
}

module.exports = UserService;