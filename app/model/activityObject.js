/*
 * @Author: your name
 * @Date: 2020-02-22 12:50:34
 * @LastEditTime: 2020-03-11 11:37:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /activity_server/app/model/activityObject.js
 */
'use strict';

/**
 * @param {Egg.model} app - 项目表
 */
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  /**
   * 项目表
   */
  const ObjectSchema = new Schema({
    textName: { type: String }, // 项目中文名
    name: { type: String }, // 项目路由名
    titlePage: { type: String }, // 项目缩略图
    disp: { type: String }, // 项目描述
    height: { type: Number }, // 页面高度
    background: { type: String }, // 项目背景色
    time: { type: Number }, // 项目创建的时间
  });
  return mongoose.model('activityObject', ObjectSchema);
};
