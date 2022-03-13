console.log('vòng lập vô tận')

function* helloFunc() {
   // while(true){
      yield 'test1';
      yield* test();
   // }
}


function* test(){
   yield 'tet holiday';
   yield 'tet_holi';
}

const res = helloFunc(); // iterators thu được sau khi chạy hàm helloFunc nên có thể lấy giá trị qua next()
console.log('res 1: ', res.next());
console.log('res 2: ', res.next());
console.log('res 3: ', res.next());
console.log('res 4: ', res.next());


// hàm helloFunc được thực thi 2 lần riêng biệt nên tạo ra 2 instance Iteritor khác nhau
// console.log('result1: ', helloFunc().next());
// console.log('result2: ', helloFunc().next());
