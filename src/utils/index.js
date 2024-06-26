const bcrypt = require('bcrypt');

const createHash = async(password) =>{
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salts);
}

const passwordValidation = async(user,password) => bcrypt.compare(password,user.password);

module.exports = {
    createHash,
    passwordValidation
}