





let numberStar = 5

for (let i = 0; i < numberStar; i++) {
    let star = ''
    for (let j = 0; j <= numberStar-i; j++) {
        star = star + ' '
    }
    for (let j = 0; j <= i; j++) {
        star = star + '* '
    }
    console.log(star);
}

for (let i = numberStar; i > 0; i--) {
    let star = ' '
    for (let j = 0; j <= numberStar-i; j++) {
        star = star + ' '
    }
    for (let j = 0; j < i; j++) {
        star = star + '* '
    }
    console.log(star);
}