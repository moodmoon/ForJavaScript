const sum = (n1, n2) => {
    return n1 + n2
}

const section = 'Group1'
// commonJs
//module.exports = { sum, section}

// ES modules - browser
export { sum , section } //named export
//export { sum as default , section } //เปลี่ยนชื่อได้