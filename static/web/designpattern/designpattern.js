/*
	Javascript 设计模式 4.2.1 原型链
	很重要的一章, 记得回看, 只例举了部分例子
*/

/* Class Person */

function Person(name) {
	this.name = name;
}

Person.prototype.getName = function() {
	return this.name;
}

/* Class Author */

function Author(name, books) {
	/*
		理解:
		此处的Person.call()方法只是为了执行一下Person函数内代码, 也可以先注释掉, 然后var author = new Author(),
		当实例化之后在用 Person.call(author, name); 也可以达到同样效果, 为的就是执行Person内的代码, 把name挂到author这个实例中.
	*/
	//Person.call(this, name);  //去耦合

	Author.superclass.constructor.call(this, name);

	this.books = books;
}

/*
	书:
	在使用new运算符的时候, 系统会为你做一些事. 它先创建一个空对象, 然后调用构造函数, 在此过程, 这个空对象处于作用域链的最前端.
	而在Author函数盅调用超类的构造函数时, 你必须手工完成同样的任务.
	"Person.call(this, name)" 这条语句条用了Person构造函数, 并且在此过程中让那个空对象(用this代表)处于作用域链的最前端, 而name则被作为参数传入.
*/
//Author.prototype = new Person();
/*
	书:
	因为把prototype属性设置为Person的实例时, constructor属性被抹除了.
*/
//Author.prototype.constructor = Author;

Author.prototype.getBooks = function() {
	return this.books;
};

extend(Author, Person);

/* 4.2.2 类式继承 */

function extend(subClass, superClass) {
	var F = function() {};
	F.prototype = superClass.prototype;
	subClass.prototype = new F();
	//subClass.prototype = new superClass(); /* 此处为自己修改, 此处的F函数就===Person()函数, 只是改了个名字, 实例__proto__指向F, F的实例__proto__ 指向Person的prototype*/
	subClass.prototype.constructor = subClass;

	subClass.superclass = superClass.prototype;
	/* 
		没看懂 
		它的最后3行代码则用来确保超类的constructor属性已被正确设置(即使超类就是Object类本身), 在用这个新的superclass属性调用超类的构造函数时这个问题很重要.
	*/
	if(superClass.prototype.constructor == Object.prototype.constructor) {
		superClass.prototype.constructor = superClass;
	}
}


/* 4.3.2 clone函数 原型式继承 */
/* clone function */
function clone(object) {
	function F() {}
	F.prototype = object;
	return new F();
}










/* 
	第五章 单体模式
*/

/* 单体模式的究极形态, 可在constructor中加入分支 */
var MyNamespace = {} ,
	MyNamespace.Singleton = (function(){
		var uniqueInstance;

		function constructor() {
			// Private members.
			var privateAttribute1 = false,
				privateAttribute2 = [1, 2, 3];

			function privateMethod1() {

			}

			function privateMethod2() {
				
			}

			return { // Public members.
				publicAttribute1: true,
				publicAttribute2: 10,

				publicMethod1: function() {

				},

				publicMethod2: function() {

				}
			}
		}

		return {
			getInstance: function() {
				if(!uniqueInstance) {
					uniqueInstance = constructor();
				}
				return uniqueInstance;
			}
		}

	})();

/* 调用形式 */

MyNamespace.Singleton.getInstance().publicMethod1();








/* 
	第六章 链式调用
*/






