
// const hello = (name='imooc') => {
//   console.log(`hello ${name}!`)
// }

// hello()
// hello('woniu')


// function hello(name1,name2){
//   console.log(name1,name2)
// }

// let arr = ['imooc','woniu123'];
// hello.apply(null,arr)
// hello(...arr)

//object 扩展 Objec.keys 、values、entries
// const obj = {name:'imooc',course:'React 开发App'}
// console.log(Object.keys(obj))
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// const name = 'imooc';
// const obj = {
//   name,
//   [name]:'hello',
//   hello1:function(){},
//   hello(){}
// }
// console.log(obj)

// const obj = {name:'imooc',course:'React'}
// const obj2 = {type:'IT',name:'woniu'}
// console.log({...obj,...obj2})

//解构赋值
// const arr = ['hello','imooc'];
// let [arg1,arg2] = arr
// console.log(arg1,arg2);

// const obj = {name:'imooc',course:'React'}
// const {name,course} = obj;
// console.log(name,course)

//类
// class MyApp{
//   constructor(){
//     this.name = 'imooc';
//   }
//   sayHello(){
//     console.log(`hello ${this.name}`)
//   }
// }

// const app = new MyApp();
// app.sayHello()

//Set Map Symbol

// import {name,sayHello} from './module1';
// console.log(name)
// sayHello()

const arr = [1,2,3]
console.log(arr.map(v=>v*2))