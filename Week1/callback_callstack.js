// CallStack
// Web Api
// CallBack
// Event Loop


function TT () {
    // 2. it will go to first web api,  when ever seconds will over it will go to next step.
    // 3. then after go to callback function.
    // 4. whenever CallStack will be free. Event Loop will take action from CallBack and will set in CallStack.
    console.log('HERE IN TIME OUT...!!!');
}

setTimeout(TT, 1000);

for (let i = 0; i < 100; i++) {
    // 1. first program came here and store proccess in CallStack
    console.log('HERE IN LOOP : ', i);
}