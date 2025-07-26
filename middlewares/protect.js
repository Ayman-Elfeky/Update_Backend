const protect = async (req, res, next) => {
    let token = req.headers.authorization || req.headers.Authorization;
    if (!token || token.split(' ')[1] !== process.env.ACCESS_TOKEN) {
        return res.status(401).json({ success: false, message: "Unauthorized User" })
    }
    next();
}

module.exports = protect