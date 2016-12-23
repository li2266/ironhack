exports.check_user_id = 'select * from user where user_id = ?';
exports.login = 'select * from user where user_id = ? and password = ?';
exports.register = 'insert into user values ( ?, ?, ?)';