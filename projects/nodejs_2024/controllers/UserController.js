const { security } = require('../conf/constant');
const Users = require('../models/Users')

async function register(req, res) {
    try {
        const auth = req.headers['security'];
        const { username, password, phone, email } = req.body;
        if (auth === security) {
            // kiểm tra phone hoặc email đã tồn tại chưa
            const checkUser = await Users.findOne({ $or: [{ phone: phone }, { email: email }] });
            if (checkUser) {
                return res.json({ message: 'User already exists', status: false });;
            }
            const user = new Users({ username: username, password: password, phone: phone, email: email })
            await user.save()
            res.json({
                message: 'User registered', status: true,
                user: { username: user.username, phone: user.phone, email: user.email, status: user.status, create_at: user.created_at }
            });
        } else {
            res.json({ message: 'Unauthorized', status: false });
        }
    } catch (error) {
        res.json({ message: 'error: ' + error.message, status: false });
    }
}

async function login(req, res) {
    try {
        const { username, password } = req.body;
        const user = await Users.findOne({ $or: [{ phone: username }, { email: username }] });
        if (user) {
            if (user.status === 'active') {
                if (user.password === password) {
                    res.json({
                        message: 'Login success', status: true,
                        user: { username: user.username, phone: user.phone, email: user.email, status: user.status, create_at: user.created_at }
                    });
                } else {
                    res.json({ message: 'Password is incorrect', status: false });
                }
            } else {
                res.json({ message: 'account has: ' + user.status, status: false });
            }
        } else {
            res.json({ message: 'User not found', status: false });
        }
    } catch (error) {
        res.json({ message: 'error: ' + error.message, status: false });
    }
}




module.exports = { login, register };
