document.write("Сценарий загружается")
var txt,num
txt="<hr>Значение числа: "
num=123
document.write(txt+num)
var x="3 + (5*2 + 6) / 4"
document.write('<br>'+x+" = ")
document.write(eval(x))
var n=100; var k=1; var s=0
var txt="1<sup>2</sup> + 2<sup>2</sup> + … + "
txt+=n+"<sup>2</sup> = "
while(k<=n){    s+=k*k;     k++; }
document.write('<br>'+txt+s+'<hr>')
/*
Васильев А.Н. JavaScript в примерах и задачах  – Москва : Издательство «Э», 2017. – 720 с
,142 !! локальные переменные создаются в самом начале выполнения функции, причем вне зависимости от того,
 где именно в программном коде функции находится инструкция объявления локальной переменной.
 */
var isItGlobal = "Global"
document.write(isItGlobal+'<br>')
f()
document.write(isItGlobal+'<br>')

function f() {
isItGlobal = "Is It Global of Local ?"
document.write('f:' + isItGlobal+'<br>')
    document.write('f:' + window.isItGlobal+'<br>')
    var isItGlobal
}
//,154
f1(isItGlobal)
f1(5)
f1(true)
f1()
f1([1,2])
function f1(arg) {
    switch (typeof arg) {
        case "string":document.write('String type'+'<br>');break
        case "boolean":document.write('Boolean type'+'<br>');break
        case "number":document.write('Number type'+'<br>');break
/*,156 при вызове функции несоответствие количества переданных функции аргументов
 количеству аргументов, указанных при описании функции, само по себе не вызывает ошибки*/
        case "undefined":document.write('No argument'+'<br>');break
        default:document.write('Other type'+'<br>')
    }
}
/*,168 Главная особенность внутренней функции связана с тем,
что она имеет доступ к локальным переменным внешней функции
(эта особенность внутренних функций называется замыканием).
При этом внешняя функция не имеет доступа к локальным переменным внутренней функции.
*/
function mlog(x){
var s=0,k; var n=100; for(k=1;k<=n;k++) s-=power(-x,k)/k ; return s
    function power(z,m){
        var p=1,i;  for(i=1;i<=m;i++) p*=z ;  return p
    }
}
var x=0.5
document.write("<hr>Вычисление логарифма: ln(1+"+x+") = " + mlog(x) + "<br>")
document.write("Проверка: "+Math.log(1+x)+"<hr>")
/*,174 Функции на самом деле являются объектами.
воспользуемся маленьким побочным эффектом:
 - функции можно присваивать значениями переменным. Более того
 - имени функции также можно присвоить новое значение,
     причем, совсем не обязательно должно быть функцией.
2) => имя функции удобно интерпретировать как ссылку на функцию.
1) 2 прохода...

*/
show("Вызов Ф-ции show()")
var f
f=show
f("Теперь это ф-ция f()")
show="А теперь Текстовое значение"
// show("Вызов Ф-ции show()") <--Uncaught TypeError: show is not a function
document.write(show+"<br>")
f("Снова ф-ция f()")
function show(msg){  document.write(msg+"<hr>") }

var f=function(msg){  document.write(msg+"<hr>") }
f("Анонимная ф-ция")
//!! (function(msg){document.write("<b>"+msg+"</b><hr>")}("Еще Анонимная ф-ция"))
/*,183 Внешние круглые скобки нужны,чтобы «объединить» код создания функции и скобки с аргументом в одно целое.
1) «одноразовая»
2) создается она в том месте, где в сценарии размещена команда создания функции,
    т.е.не при 1 проходе, и нельзя вызвать до...

,186 функция результатом может возвращать другую функцию. Откуда ?
1) внутреннюю (не-анонимная) функцию,
2) анонимная функция.
*/
function makePolynom(a,b,c){
    return function(x){ return a+b*x+c*x*x  } //Полином второй степени - анонимная функция
    }
var P,Q
P=makePolynom(1,2,1)
Q=makePolynom(2,-1,1)
var z=2
document.write("P("+z+") = "+P(z)+"<br>")
document.write("Q("+z+") = "+Q(z)+"<hr>")

function makeFibs(){ //последующее число = сумме 2х предыдущих
    var a=0,b=1
    return next       // Результат внешней функции
    function next(){  // Внутренняя функция - каждый вызов
        b=a+b; a=b-a  // изменяет значения локальных переменных внешней функции
        document.write('<sup>b='+b+'</sup>')
        return a      // Результат внутренней функции
    }                 // Окончание описания внутренней функции
}                     // Окончание описания внешней функции
var nextFib=makeFibs() // В переменную записывается результат вызова функции
for(var k=1;k<=15;k++){
    document.write(nextFib()+" | ") // Генерирование чисел Фибоначчи
}  /*--15 последовательных вызовов ф-ии next()
     - кот-ую возвращает makeFibs, да еще и хранит предыдущие a, b */
/*,196 в JavaScript есть объекты, но нет классов (в их традиционном понимании)


*/