const order = true;


const breakfastPromise = new Promise ( (resolve, reject) => {
  setTimeout(() => 
    if (order) {
      resolve('Your order is done!');
    } else {
      reject( Error('Your order cant be made') );
    }  
  }, 3000);
});