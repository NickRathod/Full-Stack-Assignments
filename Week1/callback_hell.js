







setTimeout(function TT1 () {
    console.log('HERE IN 1 TIME OUT...!!!');
    setTimeout(function TT2 () {
        console.log('HERE IN 2 TIME OUT...!!!');
        setTimeout(function TT3 () {
            console.log('HERE IN 3 TIME OUT...!!!');
            setTimeout(function TT4 () {
                console.log('HERE IN 4 TIME OUT...!!!');
                setTimeout(function TT5 () {
                    console.log('HERE IN 5 TIME OUT...!!!');
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);