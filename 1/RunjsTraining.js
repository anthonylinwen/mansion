function Person(name,age,gender) {
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.sayName= function(){
      console.log(this.name);
    }
}

var per1= new Person('Tom',26,'男') ;
  per1.sayName() ;


  var obj={o1:111,o2:222,o3:{s1:"aaa",s2:"bbb"}}


  這段程式碼 obj.birth?.month 使用了 可選鏈 (Optional Chaining, ?.) 運算符，讓 JavaScript 在存取物件屬性時更安全，避免 undefined 或 null 錯誤。

🔹 解釋 obj.birth?.month
這段程式碼的作用是：

檢查 obj.birth 是否存在（不是 null 或 undefined）
如果 obj.birth 存在，則返回 obj.birth.month
如果 obj.birth 為 null 或 undefined，則返回 undefined，而不會產生錯誤


function init{
    var 
     countdown();

}

function countdown(){

}

<html>
<title>
 
</title>
        
<body onload="fn1();">
    <span id="timer">3</span>
    <script>
        var timer;
        function fn1(){
            console.log(999);
            timer=document.getElementById("timer") ;
            fn2() ;
        }
    
        function fn2(){
            if (timer.innerHTML>0){
                timer.innerHTML -= 1 ;
                setTimeout(fn2,1000) ; 
            }
            else{
                window.location.href="http://www.google.com"
            }
        }
    
    </script>   
</body>
</html>
