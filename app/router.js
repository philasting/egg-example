'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // Example get | post
  router.get('/', controller.home.index);
  router.get('/list', controller.news.list);
  router.post('/form', controller.form.post);
  // user CRUD 
  router.get('/userInfo', controller.user.info);      // 查
  router.get('/addUser', controller.user.add);        // 增
  router.get('/deleUser', controller.user.dele);      // 删
  router.get('/updateUser', controller.user.update);  // 改
};
