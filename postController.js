// postController.js
// MVC패턴 (Model,View,Cotroller)
// DB 관련한 CRUD   로직 처리

const pool = require('../config/dbPool');

exports.createPost = (req, res) => {
    console.log('createPost들어옴');
    res.json({ message: 'test중...' });
};
