

  const containerDom = document.querySelector('.container');
 
for (let i = 1; i <= 100; i++ ) {
    const quadratino = document.createElement('div');
    quadratino.classList.add('square');
    quadratino.append(i);
    containerDom.append(quadratino);
     if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
        quadratino.innerHTML = 'FizzBuzz';
        quadratino.style.backgroundColor = "red";
      } else if (i % 3 == 0) {
        console.log('Fizz');
        quadratino.innerHTML = 'frizz';
        quadratino.style.backgroundColor = "yellow";
      } else if (i % 5 == 0) {
        console.log('Buzz');
        quadratino.innerHTML = 'Buzz';
        quadratino.style.backgroundColor = "green";
      } else {
        console.log(i);
      }
}
