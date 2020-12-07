function saveHello(person: string) { //疑问这种参数带类型是ES2015中还是TS? 
    return 'hello' + person;
}
let person: boolean = true;
let usr = 'Tom';
let myAge: number = 20;
let myName: string = 'tom';
console.log(saveHello(usr));
var sentence = `hello,my name is ${myAge},I will ${myAge - 1}`;
console.log(sentence);

//空值
function alertName(): void {
    console.log('my name is tom');
}
alertName();
let u: undefined = undefined;
let n: null = null;

//任意值
let bag: any = 'server';
bag = 9;
let bag1;

//联合类型 相关属性或方法
let light: string | number;
light = 'serven';
light = 8
console.log(light);
function getLength(something: string | number): string {
    return something.toString();
}

//对象的类型-接口 interfaces

interface Person {
    readonly  name: string;//可以只读。
    age?: number;//用？变量中可以把age属性去掉。
    [propName:string]:string|number;//定义任务类型
}
let tom: Person = {
    name: 'Tom',
    age: 20,
    gen:'abc',
    ccc:20
};
//tom.name='52';//报错只读属性
tom.age=21;

//数组的类型
let ball :number[] = [1,2,3,4];

//泛型 
function creatArray(length:number,value:any):Array<number>{
    let result = [];
    for(let i=0;i<length;i++){
        result[i]=value;
    }
    return 
}

creatArray(3,'aaa');

//理解泛型类型
class Collection{
    private _things:string[];
    constructor(){
        this._things=[];
    }
    add(something:string){
        this._things.push(something);
    }
    get(index:number):string{
        return this._things[index];
    }
}

let Stringss = new Collection();
Stringss.add('hello');

//用接口表示数组
interface NumberAray{
    [index:number]:number;
}

let fib:NumberAray=[1,1,2,3,5]

//函数的类型
function sum(x:number,y:number):number{
    return x+y
}
sum(1,2)

let mySum = function(x:number,y:number):number{
    return x*y
}

//可选参数
function buildName(firstName:string,lastName?:string){
    //可选参数后面不允许再出现必需参数了
    if(lastName){
        return firstName+''+lastName;
    }else{
        return firstName
    }
}

let tomcat = buildName('liu','zhang');
console.log(tomcat);

let tomcat1 = buildName("li");
console.log(tomcat1);

//参数默认值
//TypeScript 会将添加了默认值的参数识别为可选参数：
function buildName1(firstName:string,lastName:string='cat'){
    return firstName+""+lastName;
}
let tomcat2 = buildName1('Tom','cat');
console.log(tomcat2);
let tom1 = buildName1('Tom');
console.log(tom1)