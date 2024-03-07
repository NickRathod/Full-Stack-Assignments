let XnY = 5 // means pattern will be 5x5
let firrstElement = false
for (let i = 0; i < XnY; i++) {
    star = ''
    if(!firrstElement || i == XnY-1) {
        for (let j = 0; j < XnY; j++) {
            star = star + ' * '
        }
        console.log(i, star);
        firrstElement = true
    } else {
        let jFirrstElement = false
        for (let j = 0; j < XnY; j++) {
            if(!jFirrstElement || j == XnY-1) {
                star = star + ' * '
                jFirrstElement = true
            } else {
                star = star + '   '
            }
        }
        console.log(i, star);
    }
}