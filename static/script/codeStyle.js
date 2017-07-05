/**
 * @file provides javsscript code style.
 * @author yangwei(yangwei14@baidu.com)
 */

/************************注释*******************************/

/**
 * @namespace
 */
var util = {};

/**
 * @calss
 * @extends Developer
 */
function Fronteer() {
    Developer.call(this);

    /**
     * indentity of Fronteer
     * @type {?number}
     * @private
     */
    this.id = null;
}

/**
 * 描述
 * @private
 * @return {string} 描述
 */
Fronteer.prototype._getLevel = function () {

};

/**
 * get max number
 * @param {number} a first param
 * @param {number} b second param
 * @param {Object} option 对象型参数
 * @param {string} option.url
 * @param {string=} option.method
 * @returns {number} the max number
 */
function getMaxNumber(a, b) {
    return a > b ? a : b;
}


/**
 * 点击处理 事件注释@event 广播事件@fires，时间调
 *
 * @fires Select#change
 * @private
 */
Select.prototype.clickHandler = function () {
    /**
     * 值变更时触发
     *
     * @event Select#change
     * @param {Object} e e描述
     * @param {string} e.before before描述
     * @param {string} e.after after描述
     */
    this.fire(
        'change',
        {
            before: 'foo',
            after: 'bar'
        }
    );
};

/************************写法*******************************/

if (age === 30) {
    // ....避免隐士类型转换
}


// 字符串为空
// good
if (!name) {
    // ......
}
// bad
if (name === '') {
    // ......
}


// 字符串非空
// good
if (name) {
    // ......
}
// bad
if (name !== '') {
    // ......
}


// 数组非空
// good
if (collection.length) {
    // ......
}
// bad
if (collection.length > 0) {
    // ......
}


// 布尔不成立
// good
if (!notTrue) {
    // ......
}
// bad
if (notTrue === false) {
    // ......
}


// null 或 undefined
// good
if (noValue == null) {
    // ......
}
// bad
if (noValue === null || typeof noValue === 'undefined') {
    // ......
}

// good
switch (typeof variable) {
    case 'object':
        // ......
        break;
    case 'number':
    case 'boolean':
    case 'string':
        // ......
        break;
}

//循环体中不要定义函数
//循环体中都用到的不变的变量提前定义
//数组的length要缓存，避免每次都去调用读取length的函数
function inti(dom, a) {
}
var width = $(body).scrollTop();
for (var i = 0, len = elements.length; i < len; i++) {
    var element = elements[i];
    fire(element, width, init);

}

//顺序无关时，可以逆序，节省变量，优化代码
var len = elements.length;
while (len--) {
    var element = elements[len];
}


//类型检测 typeof == null--------------------------
// string
typeof variable === 'string'

// number
typeof variable === 'number'

// boolean
typeof variable === 'boolean'

// Function
typeof variable === 'function'

// Object
typeof variable === 'object'

// RegExp
variable instanceof RegExp

// Array
variable instanceof Array

// null
variable === null

// null or undefined
variable == null

// undefined
typeof variable === 'undefined'


//类型转换----------------------------------
//转string
num + '';
//转number
+str;
//string 转换成 number ，要转换的字符串结尾包含非数字并期望忽略时，使用 parseInt，且必须指定进制
parseInt('100px', 10);

//转boolean
!!3.14;

//number去掉小数点Math.floor / Math.round / Math.ceil

//字符串
var html = ''
    + '<div class="cls">'
        + '<a href="baidu.com">this is baidu!</a>'
    + '</div>';

// 使用数组拼接字符串
var str = [
    // 推荐换行开始并缩进开始第一个字符串, 对齐代码, 方便阅读.
    '<ul>',
    '<li>第一项</li>',
    '<li>第二项</li>',
    '</ul>'
].join('\r\n');



//for in 遍历对象时, 使用 hasOwnProperty 过滤掉原型中的属性。--------------------------
//示例
var newInfo = {};
for (var key in info) {
    if (info.hasOwnProperty(key)) {
        newInfo[key] = info[key];
    }
}

//清空数组使用 .length = 0




//面向对象-----------------------
//1.类继承时要修正constructor
/**
 * 构建类之间的继承关系
 *
 * @param {Function} subClass 子类函数
 * @param {Function} superClass 父类函数
 */
function inherits(subClass, superClass) {
    var F = new Function();
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
}



//2.直接prototype等于对象时，需要修正constructor
function Animal(name) {
    this.name = name;
}

// 直接prototype等于对象时，需要修正constructor
Animal.prototype = {
    constructor: Animal,

    jump: function () {
        alert('animal ' + this.name + ' jump');
    }
};

// 这种方式扩展prototype则无需理会constructor
Animal.prototype.jump = function () {
    alert('animal ' + this.name + ' jump');
};


//3.属性在构造函数中声明，方法在原型中声明，可以节约内存占用，方法被所有实例共享
function TextNode(value, engine) {
    this.value = value;
    this.engine = engine;
}

TextNode.prototype.clone = function () {
    return this;
};





