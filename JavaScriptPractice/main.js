/*
$(document).ready(function(){
    $.simpleWeather({
        location: 'Tokyo, JP',
        unit: 'c',
        success: function(weather){

        },
        error: function(error){

        }
    });
});
*/


$(function(){
    $('#button').bind("click",function(){
        var txt =$(this).find("td:eq(0)").html();
        if(txt.match(re) !=null){
            $(this).show();
        }else{
            $(this).hide();
        }
    });
});
li = document.querySelectorAll("li");
console.log(li.length);

var list = document.querySelector(".list");
var li = document.createElement("li");
li.textContent = "4";
list.appendChild(li);

var items = document.querySelectorAll("li");
items.forEach(function(element,index,obj){
    console.log("ElementOfText:"+element.innerText+"\nIndex:"+
    index+"\nElementOfText(getting by Index):"+obj[index].innertext);
})

var items = document.getElementsByClassName("list");
for(var i = 0; i<items.length; i++){
    console.log("ElementOfText:"+items[i].innerText+"\nIndex:"+i);
}

document.getElementById("btn-change").addEventListener("click",function(){
    document.getElementById("style-change").disabled =!
    document.getElementById("style-change").disabled;
});

var list = ["A","B","C"];
for(var i=0;i<=list.length; i++){
    console.log(list[i]);
}

var list = ["A","B","C"];
for(var key in list){
    console.log(list[key]);
}

var list = {A:1,B:2,C:3};
Object.prototype.meth = function(){};
for(var key in list) {
    console.log(key+":"+list[key]);
}

var list = ["A","B","C"];
for(var val of list){
    console.log(val);
}

var list =["A","B","C"];
console.log(list.unshift("S"));
var list =["A","B","C"];
console.log(list.push("S"));
var list =["A","B","C"];
console.log(list.pop());
var list1 =["A","B","C"];
var list2 =["E","F","G"];
var list =list1.concat(list2);

var list =["A","B","C"];
console.log(list.join("-"));
var list =["A","B","C"];
console.log(list.indexOf("A"));
console.log(list.lastIndexOf("A"));
var list =["A","B","C"];
list2 = list.slice();
console.log(list2);

var list =["A","B","C"];
var ret = Math.floor(Math.random()*list.length);
console.log(list[ret]);

var list= [100, 10, 50, 25,0];
console.log(Math.max.apply(null,list));
console.log(Math.min.apply(null,list));

var list =["A","B","C"];
var result = items.map(function(value){
    return value*2;
});
console.log(result);

var result=[1,2,3].forEach(function(value){
    return value*2;
});
console.log(result); //undefined

var list =["A","B","C"];
var result = items.map(function(value, index, array){
    if(index%2!==0){
        return value*2;
    }else{
        return value;
    }
});
console.log(result);
let array = ['japanese','english','chinese']
let upper = array.map(language => language.toUpperCase())
console.log(upper)

let names = ['Sato','Ito','Kato']
let ages = [20,24,31]
let persons = names.map((name,i)=>
({
    name: names[i],
    age: ages[i]
}))
console.log(persons)

var counter = (function () {
    var count = 0;

    return {
        increment: function () {
            count += 1;
            console.log(count);
        }
    };
}());
counter.increment();
counter.increment();

//チェーンメソッド
jQuery('duv').width(100).height(100).css({
    backgroundcolor: '#000'
});

var builder = function(str){
    if(typeof str === 'undefined'){
        this._str = '';
    }else{
        this.str = '' + str;
    }
};
builder.prototype = {
    append: function(str){
        this._str +=''+str;
        return this;
    },
    get: function(){
        return this._str;
    }
}

var result = new builder().append('hoge').append('fuga').append('moge').get();
console.log(result);


var num = "100";
console.log(num.length);
var n = 16;
console.log(n*60);

s_1 = "a";
s_2 = "decade";
console.log("Best in"+" " +s_1+ " "+s_2);

var n = 12;
var m = 5;
console.log(6000*n+4000*m);

const n = 3;
console.log(100+n*10);

'use strict';
n = 3;
console.log(7-n);

d_1 = 5;
d_2 = 8;
d_3 = 19;
d_4 = 25;
d_5 = 31;
g_1 = d_2-d_1;
g_2 = d_3-d_2;
g_3 = d_4-d_3;
g_4 = d_5-d_4;
console.log(g_1);
console.log(g_2);
console.log(g_3);
console.log(g_4);

var N = 3;
var H = 5; var W = 5;
boxContents = H*W;
console.log(boxContents%N)

m_g = "Gold"; n_g = "Ono";
m_s = "Silver"; n_s = "Orujov";
m_b = "Bronze"; n_b = "Shavdatuashvili";
console.log(m_g +" "+n_g);
console.log(m_s +" "+n_s);
console.log(m_b +" "+n_b);

function date (y,m,d){
    console.log(y+"/"+m+"/"+d);
} 
date(2016,2,12);

var S = "Paiza";
var c = "X";
console.log(c+S+c);

var S = "Paiza";
var c = "X";
console.log(c+S+c);

var m =30; var n =10;
console.log(m-n);

S = 'paizaatcodeattest';
s = S.replace(/at/g, "@");
console.log(s);

var N = 20;
console.log(Math.floor(N/2));

var sum = 0;
var n = 10;
for (var i = 1; i <= n; i++){
  sum += i;
}
console.log(sum);

var N = "aabbccdd";
var S = 5;
console.log(N.slice(0, S));

var sum = 0;
function pollen(p_1,p_2,p_3,p_4,p_5,p_6,p_7,p_8,p_9,p_10){
        if(p_1,p_2,p_3,p_4,p_5,p_6,p_7,p_8,p_9,p_10<=2){
        sum = sum+1;
        }else{
        } 
    console.log(sum);
    }
pollen(1,1,3,4,5,4,4,2,3,1);

const n = "paiza";
const m = "paiza";
if(n===m){
    console.log("Yes");
}else{
    console.log("No")
}

const a = 4;
const b = 10;
const c = 5;
console.log(a*b*c);

let a = 14;
let b = 14;
let c = 14;
if(a===b&&b===c){
    console.log("YES");
}else{
    console.log("NO");
}

let S = 20;
function Showa(){
    console.log(1926+S-1);
}
Showa();
function Heisei(){
    console.log(1989+H-1);
}

//D099:短冊づくり　一文字づつ改行を加える方法
var S = "paiza";
console.log("p\na\ni\nz\na");

let a = 100;
let b = 20;
result = a*b;
if(result<=9999){
    console.log(result);
}else{
    console.log("NG");
}

var L=1; var M=1; var N=1;
var rei ="A"; var hakushu = "B";
result = rei.repeat(L)+hakushu.repeat(M)+rei.repeat(N);
console.log(result);

var c = 3;
if(c===0 || c===1){
    console.log(1);
}else{
    console.log(3*c);
}

var n = 3;
var times = n%2;
if(times = 1){
    console.log("ON");
}else{
    console.log("OFF");
}

let S_1 = "paiza";
let S_2 = "pizza";
str1=S_1.length;
str2=S_2.length;
if(str1===str2){
    console.log("Yes");
}else{
    console.log("No");
}

const pi = "3.141592653589793";
let N = 2;
let a = pi.slice(0,N+2);
console.log(a);

var s = "PAIZA";
var result = s.split('A').length - 1;
console.log(result);

let n =3;
for(i=n;i>0;i--){
console.log(i);
}

d_1=1; d_2=3; d_3=5;
console.log(Math.max(d_1,d_2,d_3));


var a_1 = 1;
var a_2 = 0;
var a_3 = 1;
var a_4 = 1;
var a_5 = 1;
var a_6 = 1;
var a_7 = 0;
var weather = [a_1,a_2,a_3,a_4,a_5,a_6,a_7];
var strweat = weather.join(',');
var a =strweat.split('1').length-1;
if(a>=5){
    console.log("yes");
}else{
    console.log("no");
}

var n = 32;
console.log(n-24);

var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var S = "C";
console.log(characters.indexOf('C')+1);

var a_1 = 50;
var a_2 = 50;
var a_3 = 70;
var a_4 = 40;
var a_5 = 70;
var a_6 = 80;
var a_7 = 60;
var X = 60;
var avr =(a_1+a_2+a_3+a_4+a_5+a_6+a_7)/7;
if(avr>=X){
    console.log("pass");
}else{
    console.log("failure");
}

var L = 60;
var lg = 60/3;
console.log(lg*15);

document.getElementsByClassName("sample1").innerHTML = "text";
var elements = document.getElementsByTagName("del");

function getRadiovalue(){
    var elements = document.getElementsByName("name1");
    for(i=0; i<elements.length; i++){
        if(elements[i].checked){
            return elements[i].value;
        }
    }
}
document.writeln("abc");
document.writeln("document.URL=" + document.URL);

var N = 6;
var a_1 = 4;
var a_2 = 5;
var a_3 = 2;
var a_4 = 3;
var a_5 = 6;
var a_6 = 1;
console.log(a_1+a_2+a_3+a_4+a_5+a_6);

$("button").click(function(){
    $("div").css("background-color","#FC9");
    $("div").text("buttonがクリックされました");
});
$("button").click(function(){
    $("div").css("background-color","#FC9").text("buttonがクリックされました");
});

var s = "paiza";
console.log(s.toUpperCase());

var W = "ngword";
var S = "thisisngword";
if ( S.match(W)) {
    console.log("NG");
}else{
    console.log(W);
}

var n = 98;
function zeroPad(num,length){
    return ('000' + num).slice(-length);
}

var num = zeroPad(n,3);
console.log(num);

var t = 7;
console.log(Math.ceil(24/7));

$("p").assClass('color');
console.log($()).attr("href")
$().attr("href","http://www.google.com/")

$("select").change(function(){
    var value = $('option:selected').val();
    console.log(value)
})

$("p").click(function(){
    $(this).text("Goodbye");
})

console.log($('p').data('str'))

$("ul").find("li").css("color","red")

$("button").click(function(){
    $("p").hide();
});

$("p").click(function(){
    $(this).removeClass('color');
})

$("#show").click(function(){
    $("div").show();
})

$("button").click(function(){
    $("p").toggle();
})

console.log($("p").text());
weekArray = ["monday", "tuesday", "wednesday","thursday", "friday"]
$(".get").click(function(){
    $(this).text(weekArray[new.Day().getDay()]+"")
});

var f = function(){
    for(var i =0; i<arguments.length;i++)
    console.log(arguments.length[i]);
};
f(1,2,3);

var a = [0,1,2,3,4,5];
console.log(a.join());

var M = 4;
switch(M){
  case 1:
     console.log("January");
     break;
  case 2:
     console.log("February");
    break;
  case 3:
     console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
     console.log("May");
    break;
  case 6:
     console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
     console.log("August");
    break;
  case 9:
     console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
     console.log("November");
    break;
  case 12:
     console.log("December");
}

var m = 10;
var n = 13;
var hp = n-m;
if(hp<0){
    console.log("No");
}else{
    console.log(hp);
}

//D065:エラーコードの分類類　指定範囲内に含む数値があるかどうか
var n = 404;
if(n==[199-300]){
    console.log("ok");
}else if(n==[399-500]){
    console.log("error");
}else{
    console.log("unknown");
}

let a = 4;
console.log(6*a**2);

var x = 1080;
var org = (Math.floor(x*0.01))*100;
console.log(org);

var a =8;
var tax = 1+a*0.01;
var b =126;
var taxed = b*tax;
console.log(Math.floor(taxed));

var s_1 = "Noda";
var s_2 = "F";
if(s_2==="M"){
    console.log("Hi, Mr. "+s_1);
}else{
    console.log("Hi, Ms. "+s_1);
}

var n = 5;
var s = "SSRSR";
var Sun= s.split('S').length-1;
var Rain=s.split('R').length-1;
console.log(Sun+" "+Rain);


N=5;
switch(N){
    case 1:
        console.log("E");
    break;
    case 2:
        console.log("D");
    break;
    case 3:
        console.log("C");
    break;
    case 4:
        console.log("B");
    break;
    case 5:
        console.log("A");
}


var t = 25;
var m = 50;
if(t>=25 || m <=40){
    console.log("Yes");
}else if(t>=25 && m <=40){
    console.log("No");
}

//051:衣替え　効率的な変数代入の方法
var c_1 = "W";
var c_2 = "W";
var c_3 = "W";
var c_4 = "W";
var c_5 = "W";
var c_6 = "S";
var c_7 = "S";
var c_8 = "S";
var c_9 = "S";
var c_10 ="S";
var clothes = c_1+c_2+c_3+c_4+c_5+c_6+c_7+c_8+c_9+c_10;
var result = clothes.split('W').length-1;
if(result>=5){
    console.log("OK");
}else{
    console.log("NG");
}

var A = "paiza";
var B = "application";
var lastA = A.charAt(-1);
var beginB = B.charAt(0);
var lastB = B.charAt(-1);
if(lastA===beginB && lastB !="n"){
    console.log("OK");
}else{
    console.log("NG");
}

var c_1 = "K";
var c_2 = "Q";
if(c_1==="J" && c_2==="J"){
    console.log(c_1+"Q");
}else{
    console.log(c_1+" "+ c_2);
}


var n = -1;
var N = Math.abs(n);
console.log(N)

!function(window){ //即時関数?
var clac = function(num){
    if(num instanceof calc){
        return num;
    }
    if(typeof num !== 'number'){
        num = 0;
    }
    return new clac.prototype.init(num);
}

calc.prototype = {
    init: function(num){
        this._num = num;
    },

    plus: function(num){
        this._num += calc(num).get();
        return this;
    },
    minus: function(num){
        this._num -= calc(num).get();
        return this;
    },
    multiply: function(num){
        this._num *= calc(num).get();
        return this;
    },
    divide: function(num){
        this._num /= calc(num).get();
        return this;
    },
    get: function(){
        return this._num;
    }
}

calc.prototype.init.prototype = calc.prototype;
window.calc = calc;
}(window);

calc(10).plus(20).get();
calc(9).minus(7).multiply(5).get();
calc(3).mmultiply(calc(1).plus(3)).divide(6).get();

var builder = function(str){
    return new builder.prototype.init(str);
};

builder.prototype = {
    init: function(str){
        if(typeof str === 'undefined'){
            this._str = '';
        }else{
            this.str = '' + str;
        }
    },

    append:function(str){
        this._str += '' + str;
        return this;
    },
    get:function(){
        return this._str;
    }
}

buieder.init.prototype = builder.prototype;

var result = builder().append('hoge').append('fuga').append('moge').get();
console.log(result);

