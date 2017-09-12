"use strict";



function enterString() {
   var tmp = null;
   var arr = [];
   do {
      tmp = prompt("Enter string", "");
      arr.push(tmp);
   }
   while (tmp !== "end");
   return arr;
}


function containNumbers(str) {
   var res;
   for (var i = 0; i < str.length; i++) {
      if (!isNaN (Number(str.charAt(i))) && str.charAt(i) !== " ") {
         res = "Numbers: " + str;
         break;
         }  
      else {
         res = "No numbers: " + str;
         }
   }
   return res;
}

function outputResult() {
   var arr = enterString();
   for(var key in arr) {
   console.log(arr[key] + "; " + containNumbers(arr[key]));
   
   }
   
}


outputResult();



/*
Задание №3. Встроенные типы объектов
Напишите программу, которая запрашивает у пользователя строки (prompt()). Ввод строк должен быть завершен, когда пользователь вводит строку end. Далее программа проверяет, есть ли в строке цифры, если да, добавляет в начало строки текст "Numbers: ", если нет – "No numbers: " и выводит результат в виде следующей таблицы:

+-----------------+---------------------+
| Исходная строка | Обработанная строка |
+-----------------+---------------------+
| строка_1        | строка_1_обр        |
+-----------------+---------------------+
| строка_2        | строка_2_обр        |
+-----------------+---------------------+

*/