// 参数不限
// js 函数很灵活，参数的数量都可以不定
function sum() {
    // this 自动生成, 函数执行的方式决定
    //arguments 所有的参数
    console.log(arguments);
  
    let total = 0;
    Arry.form(arguments).forEach(i => {
      total += i;
    })
    return total;
  }
  console.log(sum(1,2,3,4,5,6,7,8,9,10));
  