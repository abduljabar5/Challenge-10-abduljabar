const server = require("../server");

class employee{
    constructor(name, email, id) {
         this.name = name;
        this.email = email;
        this.id = id
    }
 employeecard(name,email){
    console.log("hi" + name + email);
    }}
module.exports = employee