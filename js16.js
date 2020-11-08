class Calc {
    sum (a,b) { return a+b; }
}
class QuadCalc extends Calc{
    sum (a,b) { return super.sum(a,b) ** 2; }
}
const mycalc = new QuadCalc();
console.log(mycalc.sum(2,2))