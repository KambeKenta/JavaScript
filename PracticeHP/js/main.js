'use strict';

var target = document.getElementById('sample');
target.addEventListener('click',sample,false);
 function sample(){
     console.log('sample');
 }

 for(i=1; i<5; i++){
 var target = document.getElementById('method'+i);
 target.addEventListener('click',sample,false);
  function sample(){
      console.log('method');
  }
}

var h1 = document.getElementById("title");
h1.textContent = "Changed the title!!";

var p = document.createElement("p");
var text = document.createTextNode("plus1");
document.body.appendChild(p).append(text);

var str = 'user=1,user=2,user-3';
var result = str.split(',');
console.log(result);

var area = document.getElementById('area');
var btn = document.getElementById('btn');

btn.addEventListener('click',function(){
    console.log(area.nodeValue.split(/\n/));
})

var lists = 'apple, banana, melon, strawberry, watermelon';
var result = lists.split(',');
console.log(result);

var result2 = lists.split(',',3);
console.log(result2);

var str = 'user-1,user-2 user-3';
var result = str.split(/,|\s/);
console.log(result);

var str = '2017/07/10';
var reslut = str.split('/'.join('-'));
conosle.log(result);

var str = 'user1,usr2,user3,user4,user5';
str.split(',').forEach(function(value){
    console.log(value);
})

var lists = 'apple , banana , melon ';
var result = lists.split(/\s+/);
console.log(result);
var reslut = list.split(/\s+/).join('');
console.log(result);

var str = 'user-123';
var result = str.substr(0,4);
console.log(result);
var result = str.substr(5);
console.log(result);

var str = 'user-123';
var result = str.substring(0,4);
console.log(result);
var result = str.substring(-2,4);
console.log(result);

var str = 'user-123';
var result = str.slice(0,4);
console.log(result);
var result = str.slice(-3);
console.log(result);
console.log('全体の文字数:'+str.length);

var str = 'user-test';
var result = str.charAt(3);
console.log(result);

var str = 'user-123';
var result = '';
for (var i = 0; i,str.length; i++){
    result += str.charAt(i);
}
console.log(result);

var str = '2017-03-30';
var result = str.split('-');
console.log(result);

var str = '2017-03-30,2017_04_01,2017/04/02';
var result = str.split(/-|_|\/|,/);
console.log(result);

(function(){console.log("test")}());

var result = 0;
calc = function(){
    var a = 1,
        b =2;
    return a + b ;
};

reslut = calc();
console.log(result);

var result = 0;
reslut = (function(){
    var a = 1;
        b = 2;
    return a + b;
}());

console.log(result);

console.log(function(){
    return 1 + 2;
}());

(function(x,y){
    console.log(x+y);
})(1,2);

var x = 0;
(function(x){
    ++x;
    conosle.log(x);
})(x);
conosle.log(x);

var hoge = 'hoge';
(function(hoo){
    hoo = 'hoo';
    alert(hoge);
    alert(hoo);
})(hoge);

let normalFunc = function(x){
    console.log(x);
}

let arrowFunc = (y) =>{
    console.log(y);
}

var person = {
    name: 'meijileben',
    hobby: 'programming',
    callHobbyLater: function(){
        setTimeout(function(){
            console.log('My hobby is' + this.hobby);
        }.bind(this),1000);
    },
    callname: function(){
        console.log("My name is" + HTMLDListElement.name);
    }
}

person.callHobbyLater();
person.callName();

var person = {
    name: 'meijileben',
    hobby: 'programming',
    callHobbyLater: function(){
        setTimeout(()=>{
            console.log('My hobby is' + this.hobby);
        },1000);
    },
    callName: function(){
        console.log("My name is" + this.name);
    }
}

person.callHobbyLater();
person.callName();

function inc(x){
    return x + 1;
}

const inc = (x) => x + 1;

const data = [
    {id: 101, name: 'Alice'},
    {id:102, name: 'Bob'},
    {id: 103, name: 'Charlie'},
];

const ids = data.map((row)=>{
    return row.id;
});
console.log(ids);

const ids = data.map((row)=>row.id);
console.log(ids);

const ids = data.map(v => v.id);
console.log(ids);


var e = document.getElementById('main');
e.outerHTML == '<div id = "main">A</id>'

var a = document.getElementsByClassName('cls');
var e = a[0];
e.outerHTML == '<span class ="cls">A</span>';
document.getElementsByClassName('cls')[1].outerHTML == '<span class="cls">B</span>'

document.getElementsByClassName('XXX').length == 0;
document.getElementsByClassName('cls').length == 1;

var a = document.getElementsByTagName('div');
a[0].outerHTML == '<div id="wrapper"><div>B</div></div>';
a[1].outerHTML == '<div>A</div>';
a[2].outerHTML == '<div>B</div>';

document.getElementsByTagName('html')[0]
document.documentElement

document.firstChild
document.documentElement

document.documentElement.outerHTML == '<html><body></body></html>'
document.documentElement.innerHTML == '<head></head><body>hello</body>'

const a = "abc";
const b = "def";
const c = Object.assign(a,b);

const array = ['aa','bb','cc','dd','ee','ff','gg'];
const newArray = array.slice(-4,-1);
const newArray = array.slice(3,-1);

const array = ['a','b','c'];
array.join("");

var setUp = function(){
    var count = 0;
    return function(){
        return (count += 1);
    }
};
var next = setUp();

function fun(){
    return Array.from(arguments)
}fun(1,2,3)

var a = +'10';
typeof a
isNaN(a);
a.toString();
var a = parseInt('10',10);

var sayHi = function(name){
    return 'hello!' + (name ? name : '');
};
sayHi('kenji');
sayHi();
sayHi.apply(null,['kenji']);
var greeting = {
    sayHi: function(name){
        return 'hello' + (name ? name : '');
    }
};

greeting.sayHi.apply(greeting,['kenji']);
greeting.sayHi.apply(greeting);

var arr = ['2','23','0','16'];
arr.sort(function(a,b){return a - b ;});
Object.freeze(arr);
arr.sort();

var count = 1234;
var ee = count.toString();
var arr = [];
for(var i = 0; i<ee.length; i++){
    arr[i] = ee.charAt(i);
}
console.log(arr)

var fafa = [['one','info@fa'],['two','send@fafa'],['three','hoso@fafa']];
var map = new Map(fafa);
map.set('four','fafa@eee');

/\w+\s\w+3/.exe('morita kenji')

x = new Boolean(false);
if(x){
}

var falseValue = new Boolean(false);
console.log(fakseValue)
if(falseValue){
}

console.log(Boolean(0));
console.log(Boolean(-0));

var now = new Date();
var nowtime = now.getHours()+now.getMinutes()+now.getSeconds();
nowtime

var aa = [{name: 'kenji'},{name:'morita'}];
var result = aa.map(function(ele,i){
    return ele.name + 'san';
});

var obj = {x:2, y:3}

var arry = ['f','o','x','k'];
arr.forEach(function(ele){
    console.log(ele);
})

var Speaker = {
    say : function(wordsGetter){
        var words = wordsGetter();
        alert(words);
    }
};
function Person(nickname){
    this.nickname = nickname;
}

person.prototype.sayName = function(){
    self = this;
    Speaker.say(function(){
        return self.nickname;
    });
};
var person = new Person('moriken');
person.sayName();

var Speaker = {
    say: function(wordsgetter){
        var words = wordsGettr();
        alert(words);
    }
};
function Person(nickname){
    this.nickname = nickname;
}

Person.prototype.sayName = function (){
    Speaker.say(function(){
        return this.nickname;
    }.bind(this));
};
var person = new Person('moriken');
person.sayName();

var ii = function(){
    var pp = 'my';
    return function(value){
        console.log(pp+value);
    }
}
var kk = ii();
kk('home');

var arr = ['ooo','eee'];
var Iterator = arr[Symbol.iterator]();
console.log(Iterator.next());
console.log(Iterator.next());
console.log(Iterator.next());

var a = [{val: 1},{val: 2},{val: 3}];
var uu = a.map(function(el){
    el.val++;
    return el.val
});
a
uu

var a =[{val: 1},{val: 2},{val: 3}];
a.forEach(function(el){
    el.val++;
    console.log(el.val);
});

var a = [1,2,3];
    b = [];
a.forEach(function(el){
    b.push(el + 1);
});

var a = [1,2,3];
var b = a.map(function(elem){
    return elem + 1;
});
a
b

cat.forEach(function(cat){
    cat.meow();
})

var oo = [2,3,4,5,6];
var aa = oo.map(function(x){
    return x + 1;
});
aa

var oo = [2,3,4,5,6];
var aa = oo.map(function(x){
    return x + 1;
});
aa

var oo = [2,3,4,5,6];
var aa = oo.map(function(x){
    return x + 1;
});
aa

function getKey(k){
    return `a key named ${k}`;
}
const obj = {
    id: 5,
    name: 'San Francisco',
};
obj[getKey('enable')] = true;
function getKey(k){
    return `a key named ${k}`;
}
const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]:true,
};

var text = 'key and value';
var arraytext = ii.match(/\w+/g);
arraytext
['text','and','value']

var array = [];
array.length !== 0

var fragment = document.createDocumentFragment();
for(var i = 0; i < 10; i++){
    var Child = document.createElement('div');
    fragment.appendChild(child);
}

document.getElementById('parent').appendChild(fragment);

const str222 = 'My name is john';
const re222 = /「(.+?)」/ig;
let result;
while((result = re222.exec(str222)) !== null){
    console.log(result[0],'here')
}

var i = document.getElementById();
i.parentNode.tagName
nodetype[1] = ElementNOde;
nodetype[2] = AttributeNode;
nodetype[3] =textNode;
i.childNodes;
i.forstChild

var objA = {
    add(a,b){
        return a + b;
    }
}
objA.add(2,5);

var objA = {
    add: (a,b) => {
        return a+b;
    }
}
objA.add(2,5);

var target = document.getElementById('target');
target.onclick = function toggleStyle(){
    this.classList.toggle('foo-after');
    this.classList.toggle('foo-before');
}

<input type = "radio" name = "test">
$('input').change(function(){
    console.log($(this).val());
});

<option>おはよう</option>
$('select').change(function(){
    var text = $('optiona:selected').text();
    console.log(text);
});

<input type = "radio" name = "sample" value = "one"></input>
$('input').change(function(){
    var text = $(this).val();
    console.log(text);
})

<option>sample1</option>
<option>sample2</option>

$('input,select').change(function(){
    console.log('changed!');
});

var d = document.getElementById("d1");
d.setAttribute("align","center");

(fumnction(){
    'use strict';

    google.charts.load('current',{packages:['corechart']});
    google,charts.setOnLoadCallback(drwChart);

    function drwChart(){
        var date = new google.visualization.DateTable();
        data.addColumn('string','Love');
        data.addColumn('number','Votes');
        data.addRow(['Rust'],30);
        data.addRow(['Ruby'],20);
        data.addRow(['R'],10);

        var option = {
            title: 'R Chart',
            width: 500,
            height: 300,
            is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('target'));
        chart.draw(data,options);
    }

})();

(function(){
    'use strict';
    google.charts.load('current', {package: ['corechart']};
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart(){
        var query = new google.visualization.Query('sharingFileURL');
        query.send(handleQueryResponse);
    }
    
    function handleQueryResponse(response){
        var data = response.getdataTable();
        var options = {
            title: 'My Chart',
            width: 500,
            height: 300
        };

        var chart = new google.visualization.PieChart(document.getElementById('target'));
        chart.draw(data,options);
    }
})();

function ShowConfirmDialog(){
    if (confirm("this is Confirm dialog")){
        alert("cliked OK button");
    }else{
        alert("clicked Cancel button");
    }
}

var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    window.confirm('Clicked!')
})

var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    var result = window.confirm('click the button!');
    if(result){
        console.log('Clicked OK button');
    }else{
        console.log('click Cancel button');
    }
})

document.myform.btn.addEventListener('click',function(){
    var result = window.confirm('Submit?');
    if(result){

    }
    else{

    }
})

google.charts.load('current',{packages: ['corecahrt','bar']});
google.chart.setOnLoadCallback(drwChart);

function drawChart(){
    var data = new google.visualization.DataTable();
    data.addColumn('string','City');
    data.addColumn('number','2018 Population');
    data.addColumn('number','2019 Population');
    data.addRows([
        ['New York City, NY', 810, 450]
    ]);

    var options = {
        title: 'Population of Lagest U.S. Cities',
        isStacked: false,
        animation: {
            duration: 2000,
            easing: 'out',
            startup: true
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data,options)
}

google.load('visualization','1.0',{'packages':['corechart']});
google.setOnLoadCallback(drwchart);

function drawChart(){
    var data = new google.visualization.DataTable();
    data.addColumn('string','Date');
    data.aaColumn('number','Weight');
    data.addRows([
        ['1/1',72.3],
        ['2/1',72.5],
        ['3/1',72.7],
        ['4/1',72.8],
        ['5/1',72.9]
    ]);
    var options = {'title' : 'Record of weight',
                    'width':400,
                    'height':300};
    var chart = new google.visualization.LineChart(document.getElementById('chart'));


    function selectHandler(){
        var selectItem = chart.getSelection()[0];
        if(selectedItem){
            var selectedDate = data.getValue(selectedItem.row, 0);
            var weight = data.getValue(selectedItem.row,1);
            alert(selectedDate + "Weight is" + weight + "kg");
        }
    }

    google.visualization.events.addEventListener(chart, 'select', selectHandler);
    chart.draw(data,options);
}

google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(drawChart);

function drawChart(){
    var data = new google.visualization.DataTable();

    data.addColumn('string','date');
    data.addColumn('number','Weight');
    data.addRows([
        ['1/1',72.3],
        ['2/1',72.5],
        ['3/1',72.7],
        ['4/1',72.8],
        ['5/1',72.9]
    ]);
    var options = {'title': 'Record'
                    'width': 400,
                    'height': 300};
    var chart = new google.visualization.LineChart(document.getElementById('chart'));
    chart.draw(data, options);
}

google.load('visualization', '1.0');
google.setOnLoadCallback(drawChart);

function drawChart(){
    var wrapper = new google.visualization.ChartWrapper({
        chartType: 'lineChart',
        DataTable: [['date','weight'],
                    ['1/1',72.3],
                    ['2/1',72.5],
                    ['3/1',72.7],
                    ['4/1',72.8],
                    ['5/1',72.9]],
        
    })
}

var result1 = $('p').html();
var result2 = $('p').text();
var result3 = $('p').append();

$('button').on('click',function(){
    console.log('clicked!');
})
$('button').on('click',function(){
    console.log('clicked!');
})
$('#one').on('click',{name:'Tarou'}, showtext);
$('#two').on('click',{name:'Hanako'}, showtext);
function showText(e){
    console.log(e.data.name + 'Hello!');
}

$('ul').on('click','li',function(){
    console.log('click');
})

$('div').on('click','button',function(){
    console.log('on');
})
$('div').append('<button>Button2</button>');

$('button').on({
    'mouseenter': function(){
        console.log('mouse entered');
    },
    'mouseleave': function(){
        console.log('mouse leaving');
    }
})

$('button').on('click',function(){
    console.log('clicked');
})
$('button').off('click');

document.querySelector("ul").addEventListener("click",function(eve){
    if([].indexOf.call(this.children,eve.target)>=0){

    }
},false);

$("#parent").children('img');
$("#parent").find('.child-image');

$(document.body).click(function(){
    $("div:hidden:first").fadeIn("slow");
});

$.ajax({
    type: "GET"
}).done(function(data, textStatus,jqXHR){
}).fail(function(jqXHR,textStatus,errorThrown){
});

$(function(){
    $.ajax({
        type: "GET",
        url: "test.php",
        data: "method=dksjdkf",
    }).done(function(data, textStatus, jqXHR){
        $("div.result").text(data);
    }).fail(function(jqXHR, textStatus, errorThrown){
        $("div.result").text("Error Occured. Status:" + jqXHR.status);
    });
});

function hideProgressBar(){
    DHTMLAPI.hide("progressBar");
    calcProgress(o,o);
}

$.when(
    $.ajax({
        type: 'GET',
        url: File,
        dataType: 'html',
        success: function(data){
            $('memo').html(data);
        }error:function(){
            alert('eroor occured');
        }
    })
).done(function(){
    $('#memo_btn').click(function(){
        alert('clicked button');
    });
});

$.when(
    console,log('1'),
    console.log('2')
).done(function(){
    console.log('3');
    console.log('4');
});

$.when(
    $("div").animate({left:300})
).done(function(){
    $("div").fadeout()
}).fail(function(){
    console.log('error');
});

$.when(
    $('#sample').animate({'marginleft':
'200px'})
).done(function(){
    $('#sample').anmiate({'marginTop':'200px'});
});

jQuery(function($){
    $('#sample').fadeIn(5000);
});

jQuery(function($){
    $('#sample').fadeout(5000);
});

$(function(){
    $('button').on('click', function(){
        $.when(

        ).done(function(){
            
        });
    });
});

$(function(){
    var menu = $('#sideMenu');
    $('#sideButton').on('click', function(){
        menu.toggleClass('open');
        if(menu.hasClass('open')){
            menu.stop(true, false).animate({'right': 0}, 300);
        }else{
            menu.animate({'right': -menuWidth}, 300),
        }
    });
});

$.when(
    $.getJSON('a.json'),
    $.getJSON('b.json')
).done(function(data_a, data_b){
    console.log(data_a,data_b);
}).fail(function(){
    console.log('error');
});

$.when(
    $.getJSON('a.json'),
    $.getJSON('b.json')
).done(function(data_a, data_b){
    console.log(data_a,data_b);
}).fail(function(){
    console.log('error');
});

$.when($.get('hoge', $.get('hige'), $.get('homu'))
.done(function(hoge, hige, homu){
}));

google.load("visualization", "1", {packages:["coreChart"]});
google.setOnLoadCallback(drawChart);
function drawchart(){
    var data = google.visualization.arryToDatTbale([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
    ]);
    var options = {
        pieSliceText: 'label',
        title: 'Test Chart'
    };
    var chart = new google.visualization.Piechart(document.getElementById('piechart'));
    chart.draw(data, options);
}

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawchart);
function drawchart(){
    var data = google.visualization.arrayToDataTable([
        ['year','height','weight'],
        ['2019',175,71],
        ['2020',180,75]
    ]);

    var options = {
        title: 'sample',
        hAxis: {title: 'year'},
        width: 500,
        height: 250,
        pointsize: 6
    };

    var chart = new google.visualization.LineChart(document.getElementById('sample'));
    chart.draw(data,options);
}


google.charts.load('current',{packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	var data = new google.visualization.DataTable();
	data.addColumn('string','Love');
	data.addColumn('number','Votes');
	data.addRow('Rust',30);
	data.addRow('Ruby',20);
	data.addRow('R',10);

	var options = {
		title: 'R Chart',
		width: 500,
		height: 300
	};

	var chart = new.google.visualization.PieChart(document.getElementById('target'));
  chart.draw(data, options);
}

google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart(){
	var data = google.visualization.arrayToDateTable([
		['task', 'House per Day'],
		['Work', 11],
		['Eat', 2],
		['Commute', 2],
		['Watch TV', 2],
		['Sleep', 7]
	]);
	var options = {
		pieSliceText: 'label',
		title: 'Test chart'
	};
	var chart = new google.visualization.Piechart(document.getElementById('Piechart'));
	chart.draw(data, options);
}

$(function(){
    function buildHTML(todo){
        var html = $('<li class ="to do">').append(todo.content);
        return html;
    }

    $('.js-form').on('submit', function(e){
        e.preventDefault();
        var textField = $('.js-form_text-field');
        var todo = textField.val();

        $.ajax({
            type: 'POST',
            url: '/todos.json',
            data: {
                todo: {
                    content: todo
                }
            },
            dataType: 'json'
        })
        .done(function(data){
            var html = buildHTML(data);
            $('.todos').append(html);
            textField.val('');
        })
        .fail(function(){
            alert('error');
        });
    });
});

$(function(){
    $('#ajax').on('click',function(){
        $.ajax({
            url: '',
            type:'POST',
            data:{
                'userid':$('#userid').val(),
                'password':$('#password').val()
            }
        })
        .done((data)=>{
            $('.result').html(data);
            console.log(data);
        })
        .fail((data)=>{
            $('.result').html(data);
            console.log(data);
        })
        .always((data)=>{

        });
    });
});

$('li').on('click',function(){
    $(this).css('color','red');
});

$(ul).on('click', 'li', function(){
    $(this).css('color','red');
});

$('ul').on('click', function(e){
    $target.text(e.target.tagName.toLowerCase());
    $currentTarget.text(e.currentTarget.tagName.toLowerCase());
});

$('ul').on({
    'mouseenter':function(){
        $(this).css('color','red');
    },
    'mouseleave':function(){
        $(this.css('color','black');
    }
}, 'li');

$('select').click(function(){
    $(this).addClass('select');
});

$('li').click(function(e){
    $(this).addClass('select');
    e.stopPropagation();
});

$('section').click(function(){
    $(this).addClass('select');
});

$('a').click(function(){
    $(this).addClass('select');
    return false;
});

$(function(){
    $('.element').on('mouseover', function(){

    }).on('.mouseleave', function(){

    });
});

$(function(){
    $('.input.element').on('foucus', function(){

    }).on('blur',function(){

    });
});

$(function(){
    $('input.element').on('keydown keyup keypress change', function(){

    });
});

$('a').on('click',function(){
    alert('clicked!');
});
$('a').off('click');

$(document).on('click','a', function(){
    $(this).clone(false).insertAfter(this);
});
$(document).off('click','a');

$('#button').on({
    'mouseenter': function(){
        alert('mouseoevered');
    },
    'mouseleve': function(){
        alert('mouseout');
    }
});

$('#button').click(function(){
    alert('clicked');
});

$(function(){
    $("#play").on("click",function(){
        videocontrol("playVideo");
    });

    $("#pause").on("click",function(){
        videocontrol("pauseVideo");
    });

    $("#stop").on('click',function(){
        videoControl("stopVideo");
    });

    $("#clear").on("click",function(){
        videoControl("clearVideo");
    });

    function videocontrol(action){
        var $playwindow = $('#popup-YouTube-player')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
    }
});

switch ($_GET['id']){
    case 1:
        echo "Tanaka";
        break;
    case 2:
        echo "Satou";
        break;
    default:
        echo "nothing"
        break;
}

$.get("sample.php", {
    id:$("[type=number]").val()
},function(data){
    $("span").text(data);
});

$.get(url, {
    id :1,
    category: 3,
    name :"Suzuki"
}, function(){

});

$.get(url, date, function(data){
    $("span").text(data);
});

$data = array();
$data["name"] = "Satou";
$data["age"] = 10;
Headers('Content-type: application/json; charset=utf-8');
echo json_encode($data);

$.get(url, data, function(data){
    console.log("name:", data.name);
    console.log("age:", data.age);
});

$name = $POST["name"];
$tel= $_POST["tel"];
$age = $_POST["age"];
$sex = $_POST["sex"];
$doui = $_POST["doui"];
$hidden = $_POST["hidden"];

if($doui == null){
    $data["message"] = "2";
}else{
    $data["message"] = "5";
}

Headers('Content-Type: application/json; charset=utf-8');
echo json_encode($data);

$(function(){
    $("[type=button]:eq(0)").on("click", function(){
        $("#result").load("test1.html",function(){
            $("#sample").css("color","blue");
        });
    });

    $("[}type=button:eq(1)").on("click", function(){
        $("#result").load("test1.html #sample, p", function(){
            $("#sample").css("color","blue");
        });
    });

    $("[type=button]:eq(2)").on("click",function(){
        $("#result").load("test.php",{name:"Murata", age: 25},function(){
            alert("download error");
        });
    });
});

$("#searchForm").submit(function(event){
    event.preventDefault();

    var $form = $(this),
    term = $form.find('input[name="s"]').val(),
    url = $form.attr('action');

    var posting =$.post(url, {
        s: term
    });

    podting.done(function(data){
        var content = $(data).find('#content');
        $("#result").empty().append(content);
    });
});

$("#searchForm").submit(function(event){
    event.preventDefault();
    var $form = $(this),
    term = $form.find('input[name="s"]').val(),
    url = $form.attr('action');
    var posting = $.post(url,{
        s:term
    });
    posting.done(function(data){
        var content = $(data).find('#content');
        $("#result").empty().append(content);
    });
});

$(document).on('submit', 'form.AjaxForm', function(){
    $ajax({
        url: $(this).attr('action'),
        type: $(this).attr('method'),
        dataType: 'json',
        data: $(this).specialize(),
        success: function(data){
        alert('Submitted');
        },
        error: function(xhr, err){
            alert('Error');
        }
    });
    return false;
});

function insectAllInputFields(){
    var count = 0;
    $('.requireInput').each(function(i){
        if($(this).val() === ''){
            $('#submitBtn').prop('disabled',false);
        }else{
            $('#dubmitBtn').prop('disabled',true);
        }
    });
}

$('#the-from').submit(function(event){
    event.preventDefault();

    var $form = $(this);
    var $button = $(this);

    $.ajax({
        url: $form.atr('action'),
        type: $form.attr('method'),
        data: $form.serialize(),
        timeout: 1000,

        beforeSend: function(xhr, setttings){
            $button.attr('dissabled', true);
        },
        complete: function(xhr, textStatus){
            $button.attr('disabled', false);
        },
        sucess: function(result, textStatus, xhr){
            $form[0].reset();
            alert('OK');
        },

        error: function(xhr, textStatus, error){
            alert('NG...');
        }
    });
});

$('#the-form').submit(function(event){
    event.preventDefault();
    var $form = $(this);
    var $buttton = $form.find('button');
    $.ajax({
        url: $form.attr('action'),
        type: $form.attr('method'),
        data: $form.serialize(),
        timeout: 1000,

        beforeSend: function(xhr, setttings){
            $button.addClass('loading');
        },

        complete: function(xhr, textStatus){
            $button.attr('disabled',false);
        },

        success: function(result, textStatus, xhr){
            $form[0].reset();
            alert('OK');
        },

        error: function(xhr, textStatus,error){
            alert('NG...');
        }
    });
});

function postForm(value){
var form = document.createElement('form');
var request = document.createElement('input');

form.method= 'POST';
form.action = 'https://.org/post';

request.type = 'hidden';
request.name = 'text';
request.value = value;
form.appendChild(request);

from.appendChild(form);

form.submit();

}

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        console.log( xhr.responseText);
    }
}

$(function(){
    $('form').submit(function(event){
        event.preventDefault();
        var f =$(this);
        $.ajax({
            url: f.prop('action'),
            type: f.propop('type'),
            data: f.realize(),
            timeout: 10000,
            dataType: 'text'
        })
        .done(function(data){

        })
        .fail(function(data){

        })
        .always(function(data){

        });
    });
});

$(function(){
    $.ajax({
        url: 'http://user-domain/index.php',
        type: 'post',
        data: {
            text: $('#text').val()
        },
        timeout: 10000,
        dataType:'text'
    })
    .donr(function(data){

    })
    .fail(function(data){

    })
    .always(function(data){

    });
});

$(function(){
    $('form').submit(function(event){
        event.preventDefault();
        var f = $(this);
        $.ajax({
            url: f.prop('action'),
            type: f.prop('type'),
            data: f.serialize(),
            timeout: 10000,
            dataType: 'text'
        })
        .done(function(data){

        })
        .fail(funciton(data){

        })
        .always(function(data){

        });
    });
});

$(function(){
    $('#button').click(function(){
        $.ajax({
            url: 'http://user-domain/index.php',
            type: 'post',
            data: {
                text: $('#text').val()
            },
            timeout: 10000,
            dataType: 'text'
        })
        .done(function(data){

        })
        .fail(function(data){

        })
        .always(function(data){

        });
    });
});

$(function(){
    $('#foo').click(function(){
        $.blockUI();
        $.ajax({
            url: "foo.cgi",
        })
        .done(function(){

        })
        .always(function(){
            $.unblockUI();
        });
    });
});

$(function(){
    $('#foo').click(function(){
        $.blockUI();
        $.ajax({
        url: "foo.cgi",
    })
    .done(function(){

    })
    .always(function(){
        $.blockUI();
    });
    });
});

var list = new Array('test1.html','test2.html','test3.html');
var foo = function(){
    var url = list.shift();
    $.ajax({
        url: url
    }).donr(function(html){
        console.log(html);
        if(list.length){
            foo();
        }
    });
};

var list = new Array('test1.html', 'test2.html', 'test3.html');
for(i = 0; i < 3; i++){
    var url = list.shift();
    $.ajax({
        url: url,
        async: false
    }).done(function(){
        console.log(html);
    });
}

var list = new Array('test1.html', 'test2.html', 'test3.html');
var foo =function(){
    var url = list.shift();
    $.ajax({
        url: url
    }).done(function(html){
        console.log(html);
        if(list.length){
            foo();
        }
    });
};
foo();

$(function(){
    $('#foo').click(function(){
        $.blockUI();
        $.ajax({
            url: "foo.cgi",
        }).donr(function(){

        }).always(function(){
            $.unblockUI();
        });
    });
});

$(function(){
    $('form').submit(function(event){
        var f =$(this);
        $.ajax({
            url: f.prop('action'),
            type: f.prop('type'),
            data: f.serialize(),
            timeout: 10000,
            dataType: 'text'
        })
        .donr(function(data){

        })
        .fail(function(data){

        })
        .always(function(data){

        });
    });
});

$(function(){
    $('#button').click(function(){
        $.ajax({
            url: 'http://user-domain/index.php',
            type: 'post',
            data: {
                text: $('#text').val()
            },
            tirmout: 10000,
            dataType: 'text'
        })
        .done(function(data){

        })
        .fail(function(data){

        })
        .always(function(data){

        });
    });
});

var Element = document.getElementById('foo');
var spanElements = document.getElementByTagName('foo');
var allElements = documrnt.getElementByTagName('*');
var fooSpans = foo.getElementByTagName('span');
alert(foospans.length);
var allSpans = document.getElementsByTagName('span');
alert(allspans.length);
var elem = document.createElement('div');
var text = documrnt.createTextNode('create text node');
document.body.appendChild(elem);
elem.appendChild(text);
var comment = document.createComment('comment node');
document.body.insertBefore(comment,elem);
var newNode = document.createElement('div');
var oldNode = document.getElementById('foo');
var parentNode = oldNofe.parentNode;
parentNode.replaceChild(newNode, oldNode);
var parent = document.getElementById('parent');
for (var o = 0; i < 10; i ++){
    var Child = document.createElement('div');
    parent.appendChild(child);
}
var fragment = document.createDocumentFragment();
for(var I = 0; i < 10; i ++){
    fragment.appendChild(child);
}
document.getElementById('parent').appendChild(fragment);

var fragment = documnet.createDocumentFragment();
webkitConvertPointFromPageToNode(var cnt = 0, len = songs.length; cnt<len; cnt++){
    var $li = document.createElement('li');
    var song = document.createTextNode(songs[cnt]);
    $li.appendChild($li);
}
$ul.appendChild(fragment);
var fragment = document.createDocumentFragment();
for(var cnt = 0, len = songs.length; cnt < len; cnt++){
    var $li = document.createElement('li');
    var song = dovcument.createTextNode(songs[cnt]);
    $li.appendChild(song);
    fragmwnt.appendChild($li);
}
$ul.appendChild(fragment);
function replace(){
    var e1 = document.getElementById('e1');
    e1.innerText = "replaced";

    var e2 = document.createElement('div');
    e2.setAttribute("id", "e2");
    e2.innertext = "create e2";
    var btnReplace = document.getElementById('btnReplace');
    var frmMain = document.getElementById('frmMain');
    frmMain.removeChild(btnReplace);
}
(function(){
    'use strict';
    goolge.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawchart(){
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'love');
        data.addColumn('number', 'Votes');
        data.addRow(['Rust', 30]);
        data.addRow(['Ruby', 20]);
        data.addRow(['R'], 10);
        var options = {
            title: 'R Chart',
            width: 500,
            height: 300
        };
        var chart = new google.visualization.PieChart(document.getElementById('target'));
        chart.draw(data, options);
    }
});
(function(){
    'use strict';
    google.charts.load('current', { packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart(){
        var query = new google.visualization.Query('URL');
        query.send(handleQueryResponse);
    }
    function handleQueryResponse(response){
        var data = response.getdataTable();
        var options = {
            title: 'My Chart',
            width: 500,
            height: 300
        };
        var chart = new google.visualization(document.getElementById('target'));
        chart.draw(data, options);
    }
})();
(function(){
    'use strict';
    google.charts.load('current', {package: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart(){
        var query = new google.visualization.Query('URL');
        query.send(handleQueryResponse);
    }
    function handleQueryResponse(response){
        var data = response.getdataTable();
        var options = {
            title: 'My Chart',
            width: 500,
            height: 300
        };
        var chart = new google.visualization.PieChart(document.getElementById('target'));
        chart.draw(data, options);
    }
})(); 

$(function(){
    $("#play").on("click", function(){
        videoControl("playvideo");
    });
    $("#pause"),on("click", function(){
        videoControl("pauseVideo");
    });
    $("#stop").on("click", function(){
        videoControl("stopVideo");
    });
    $("#clear").on("click", function(){
        videoConttrol("clearVideo");
    });
    function videoControl(action){
        $playWindow = $('#popup-YouTube-player')[0].contentWindow;
        $playerWindow.postMessage('{"event":"command", "func": "'+action+'","args":""}', '*');
    }
});
$(function(){
    $('form').submit(function(event){
        event.preventDefault();
        var f = $(this);
        $,ajax({
            url: f.prop('action'),
            type: f.serialize(),
            timeout: 10000,
            dataType: 'text'
        })
        .done(function(data){

        })
        .fail(function(){

        })
        .always(function(){

        });
    });
});
$(function(){
    $('#button').click(function(){
        $.ajax({
        url: 'http://user-domain/index.php',
        type: 'post',
        data: {
            text: $('#text').val()
        },
        timeout: 10000,
        dataType: 'text'
    })
    .done(function(data){

    })
    .fail(function(data){

    })
    .always(function(data){

    });
});
});

$(function(){
    $.blockUI();
    $.ajax({
        url: "foo.cgi",
    }).done(function(){

    }).always(function(){
        $.unblockUI();
    });
});
var list = new Array('test1.html','test.html2','test3.html');
var foo = function(){
    var url = list.shift();
    $.ajax({
        url: url
    }).done(function(html){
        console.log(html);
        if(list.length){
            foo();
        }
    });
};
var list = new Array('test1.html', 'test2.html', 'test3.html');
for(i = 0; i < 3; i ++){
    var url = list.shift();
    $.ajax({
        url: url,
        async: false
    }).done(function(html){
        console.log(html);
    });
}
var list = new Array('test1.html','test2.html','test3.html');
var foo = function(){
    var url = list.shift();
    $.ajax({
        url: urll
    }).done(function(html){
        console.log(html);
        if(list.length){
            foo();
        }
    });
};
var list = new Array('test1.html', 'test2.html', 'test3.html');
for (i = 0; i < 3; i++){
    var url = list.shift();
    $.ajax({
    url: url,
    async: false
    }).done(function(html){
        console.log(html);
    });
}
$('#form1').submit(function(event){
    event.preventDefault();
    $.ajax({
        url: '',
        type: 'GET',
        dataType: 'json',
        data: {getdata: 'test'},
        timeout: 10000,
        success:function(data){
            alert("OK");
        },
        error: function(XMLhttpRequest,textStatus,errorThrown){
            alert("OK");
        },
    });
});
function out(s){
    return function(e){
        e.stopPropagation();
        console.log(s);
    }
}
document.getElementById('outer').addEventListener('click',out('outer'));
documnet.getElementById('inner').addEventListener('click', out('inner'));
function aaa(){
    console.log('aaa!');
}
function bbb(){
    console.log('bbb!');
}
var P = document.getElementById('abcd');
p.addEventListener('click', aaa, false);
p.addEventListener('click', bbb, false);
function aaa(){
    console.log('aaa!');
}
var p = document.getElementById('abcd');
p.addEventListener('click', aaa, false);
p.removeEventListener('click', aaa, false);
function compareFunc(a, b){
    return a - b;
}
var div = document.createElement('div');
var text = document.createTextNode('foo');
var comment = document.createComment('== div ==');
var div = document.createElement('div');
var text = document.createTextNode('foo');
document.body.appendChild(div);
div.appendChild(text)
var comment = document.createComment('== div ==');
div.insertBefore(commment);
var div = document.createElement('div');
div.id = 'myDiv';
div.className = 'active';
div.style.display = 'inline-block';
var myDiv = document.getElementById('myDiv');
myDiv.innerHTML = '<p>Hello World!</P>';
var myDiv = document.getElementById('myDiv');
myDiv.textContent = '<p>Hello World!</p>'
var div = document.createElement('div');
var oldDiv = document.getElementBytagName('div')[0];
var parent = oldDiv.parentNode;
parent.replaceChild(div, oldDiv);
var div = document.getElementsByTagName('div')[0];
div.parentNode.removeChild(div);
var page = document.getElementById('page');
var parent = page.parentNode;
var page = document.getElementById('page');
var childs = page.childNodes;
var page = document.getElementById('page');
var firstChild = page.firstChild;
var page = document.getElementById('page');
var lastChild = page.lastChild;
var page = document.getElementById('page');
var next = page.nextSibling;
var page = document.getElementById('page');
var prev = page. previousSibling;
var page = document.getElementById('page');
var children = page.children;
var page =document.getElementById('page');
var firstChild = page.firstElementChild;
var page = document.getElementById('page');
var lastChild = page.lastElementChild;
var page =document.getElementById('page');
var next = page.nextElementSibling;
var page = document.getElementById('page');
var next = page.nextElementSibling;
var page = document.getElementById('page');
var prev = page.previousElementSibling;
var page = document.getElementById('page');
var elementCount = page.childElementCount;
var div =document.createElement('div');
var text = document.createTextNode('foo');
var comment = document.createComment('== div ==');
var div = document.createElement('div');
var text = document.createTextNode('foo');
document.body.apppendChild(div);
div.appendChild(text)
var comment = document.createComment('== div ==');
div.insertBefore(comment);
var div =document.createElement('div');
div.id = 'myDiv';
div.className = 'active';
div.style.display = 'inline-block';
var myDiv = document.getElementById('myDiv');
myDiv.innerHTML = '<p>hello World!</p>';
var content = myDiv.innerHTML;
var myDiv =document.getElementById('myDiv');
myDiv.textContent = '<p>helo World!</p>';
var div = document.createElement('div');
var oldDiv = document.getElementByTagName('div')[0];
var parent = oldDiv.parentNode;
parent.replaceChild(div, oldDiv);
var div = document.getElementByTagName('div')[0];
div.parentNode.removeChild(div);
document.getElementById("myBtn").addEventListener("click",function(){
    myFunction(p1, p2)
});
function myFunction(a, b){
    const result = a * b;
    document.getElementById("demo").innnerHTML = result;
}
var signal = "bule";
switch(signal){
    case "red":
        console.log("stop!");
        break;
    case "green", "blue":
        console.log("go!")
        break;
    case "yellow":
        console.log("slow down");
        break;
    default:
        console.log("wrong signal");
        break;
}
var i = 0;
while (i <= 10){
    console.log(i);
    i++;
}
var i = 200;
do{
    console.log(i);
    i++;
}while(i < 10);
for(var i = 0; i<= 10; i++){
    if(i ==5){
        continue;
    }
    console.log(i);
}
alert("hello");
confirm("are you sure?");
prompt("input your name...", "anonumous");
var hello =function(name){
    var msg  ="hello" + name;
    return msg;
}
var hello_name = hello("Bob");
console.log(hello_name);
(function(name){
    var user ="Miss." + name
    console.log(user)
})("Ann");
var i = 0;
function show(){
    console.log(i++);
    if(i>3){
        clearInterval(timer);
    }
}
var timer = setInterval(show, 1000);
var i = 0;
function show(){
    console.log(i++);
}
setTimeout(show, 1000);
function show(){
    console.log(i++);
    var timer = setTimeOut(show, 1000);
    if(i > 3){
        clearTimeout(timer);
    }
}
show();
console.log(window.document)
console.log(document)
var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    var pop = confirm('add text to ary?');
    var ary = document.getElementById('ary');
    var txt = document.createTextNode("1tap!/");
    if(pop == true){
        ary.appendChild(txt);
    }else{
        ary.textContent = "[Taps]";
    }
});
var btn = documrnt.getElementById('btn');
btn.addEventListener('click', function(){
    var pop = confirm('add text to ary?');
    var ary  = document.getElementById('ary');
    var txt = document.createTextNode("1tap!/");
    if(pop == true){
        ary.appendChild(txt);
    }else{
        ary.textContent = "[Taps]";
    }
});
var score = 80;
if(score > 60){
    console.log("OK!");
}else{
    ConstantSourceNode.log("NG!");
}
$('#form1').dubmit(function(event){
    event.preventDefault();
    $.ajax({
        url: 'http://localhost:8000/test',
        type: 'GET',
        dataType: 'jsonp',
        data: {getData: 'test'},
        timeout: 10000,
        success: function(data){
            alert("ok");
        },
        error: function(XMLhttpRequest, textStatus, errorThrown){
            alert("ok");
        }
    });
});
(function(){
    'use strict';
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart(){
        var query = new google.visualization.Query('URL');
        query.send(handleQueryResponse);
    }
    function handleQueryResponse(response){
        var data = response.getDataTable();
        var options = {
            title: 'My Chart',
            width: 500,
            height: 300
        };
        var Chart = new google.visualization.PieChart(document.getElementById('target'));
        chart.draw(data, options);
    }
})();
$(function(){
    $("#play").on("click", function(){
        videoControl("playVideo");
    });
    $("#pause").on("click",function(){
        videoControl("pauseVideo");
    });
    $("#stop").on("click",function(){
        videoControl("stopVideo");
    });
    $("#clear").on("click", function(){
        videoControl("clearVideo");
    });
    function videoControl(action){
        var $playWindow = $('"popup-YOuTube-player')[0].controlWindow;
        $playerWindow.postMessage('{"event":"command", "func":"'+action+'", "args":""}', '*');
    }
});
