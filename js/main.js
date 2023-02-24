

  const containerDom = document.querySelector('.container');
  
for (let i = 1; i <= 100; i++ ) {
    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    quadratino.append(i);
    containerDom.append(quadratino);
     if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
      } else if (i % 3 == 0) {
        console.log('Fizz');
      } else if (i % 5 == 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
}
