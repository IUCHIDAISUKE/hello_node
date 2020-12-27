# hello_node

This is 42 project.  
This is the beginning for server-side javascript.


>Mac OS : Big Sur  
node : v12.10.0

## ex00

**OUTLINE**
```shell
$ node output.js
HELLO WORLD
$
```

まずは、`HELLO WORLD`をconsoleに出力します。  
<!-- これには、`console.log()`を使えば良いので、

**hello-world.js**
```js
console.log("HELLO WORLD");
```
となります。

実行すると、
```shell
$ node hello-world.js
HELLO WORLD
$
``` -->

consoleに出力する関数である[`console.log()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)について調べてみます。

> **Syntax**  
>1. console.log(obj1 [, obj2, ..., objN]);  
>2. console.log(msg [, subst1, ..., substN]);  
>
>- `obj1` ~ `objN`  
>    - A list of JavaScript objects to output.
>  
>- `msg`  
>    - A JavaScript string containing zero or more substitution strings.
>
>- `subst1` ~ `substN`  
>    - JavaScript objects with which to replace substitution strings within msg. 


例文で構文を確認していきます。

まず、1を確認します。オブジェクトが一つのとき、

**ex01.js**
```js
let test = { str: "abcde", num: 42 };
console.log(test);
```

```shell
$ node ex01.js
{ str: 'abcde', num: 42 }
$
```

オブジェクトが複数のとき、


**ex02.js**
```js
let test = { str: "abcde", num: 42 };
let test2="GREAT"
console.log(test,", How was your test?",test2);
```

```shell
$ node ex02.js
{ str: 'abcde', num: 42 } , How was your test? GREAT
$
```

次に2を確認します。

これは、C言語でいうところの、`printf()`を同じような意味合いで、`%d`だったり、`%i`だったりが使えるよ。ということです。詳細は[ここ](https://developer.mozilla.org/ja/docs/Web/API/console)


**ex03.js**
```js
let test = { str: "abcde", num: 42 };
let test2 = "GREAT";
let test3 = 100;
console.log("%o , How was your test? %s, %i", test, test2, test3);
```

```shell
$ node ex02.js
{ str: 'abcde', num: 42 } , How was your test? GREAT, 100
$
```

これで`console.log()`の2種類のSyntaxについて確認できました。

## ex01

**OUTLINE**
```shell
$ node output.js
42 is a string.
42 is a number.
42 is an object.
[object Object] is an object.
true is a boolean.
undefined is an undefined.
$
```

上記の内容をコンソールに出力させます。

まずは、それぞれの型について確認します。  
型を確認するコマンドは、`typeof`で確認できます。

**ex01.js**
```js
let a = 42;
let b = "abcdef";
let c;
let d = { str: "test", num: 42 };

console.log(`value = ${a},              type = ${typeof a}`);
console.log(`value = ${b},          type = ${typeof b}`);
console.log(`value = ${c},       type = ${typeof c}`);
console.log(`value = ${d}, type = ${typeof d}`);
```

```shell
$ node ex01.js
value = 42,              type = number
value = abcdef,          type = string
value = undefined,       type = undefined
value = [object Object], type = object
$
```

ここでは、`undefined`と`object`について確認します。  
`undefined`は文字のごとく、未定義を表します。

`let c`は明示的に初期化してないので、`undedfined`で定義されていますね。  
Goでいうところの、ゼロ値みたいなイメージに近いのかな?

次に、`object`について、[ここ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)から、
>The Object class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.



データ型のひとつなので、`object`は`property`(変数)を自分で割り当てることができます。また、`object`には`method`(関数)を割り当てることができ、これを用いると、同じような動作するものを`object`として定義することで、簡略化、再利用することができます。

詳しくは、オブジェクト指向とかで検索しましょう。

また、`object`の定義は、`let testObject = {}`か`let test = new Object()`でできます。

`[object Object]`に関しては、[ここ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)から
>Every object has a toString() method that is automatically called when the object is to be represented as a text value or when an object is referred to in a manner in which a string is expected. By default, the toString() method is inherited by every object descended from Object. If this method is not overridden in a custom object, toString() returns "[object type]", where type is the object type. The following code illustrates this:

とのこと。

以下のような使い方をすることで、object classの判別も行うことができる。


```js
console.log(Object.prototype.toString.call(d)) // [object Object]
console.log(Object.prototype.toString.call(a)) // [object Number]
```

