export function sayHello(word, session) {
    console.log(`${word || 'Hello'} ${session}`);
}


class Main {
  
    test = 2;
  
    constructor(session = 'Sesiunea x') {
      this.session = session;
    }
  
    // falsy values 0, '', null, undefined, NaN, false
  
    sayHi(word) {
      // console.log(word || 'Hello' + ' ' + this.session);
  
      sayHello(word, this.session);
    }
  }

 export class SecondMain extends Main {
     constructor(session) {
         super(session);
         this.session += 'Second Main'; 
     }
 }

export const HI = 'Hi';

export default Main;