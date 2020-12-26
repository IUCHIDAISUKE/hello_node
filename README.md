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
これには、`console.log()`を使えば良いので、

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
```

ここで、もう少し[`console.log()`](https://developer.mozilla.org/ja/docs/Web/API/Console/log)について調べてみます。

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

出力自体は先程とさほど変わらないですね。

## ex01