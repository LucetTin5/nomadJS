const cal = {
  plus : function (a,b){
    return a + b;
  },
  minus : function (a, b){
    return a - b;
  },
  multiply : function (a, b){
    return a * b;
  },
  divide : function (a, b){
    return a / b;
  },
  power : function (a, b){
    return a ** b;
  }
}

cal.plus(2,3);
cal.minus(2,4);
cal.multiply(2,3);
cal.divide(4,2);
cal.power(2,3);
