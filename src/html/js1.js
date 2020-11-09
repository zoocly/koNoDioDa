function f() {
    let a = 0;
    return function (){
        a++;
        console.log(a,'aaaa')
        if(a%2 !== 0){
            $('#btn').text('点了我了');
        }else {
            $('#btn').text('点我');
        }
    }
}