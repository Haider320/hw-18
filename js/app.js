// for(var i =1; i<=31; i++) {
    // document.write('<h1>'+i+'</h1>');
// }

document.getElementById('toggle').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active')
} )


document.getElementById('on').addEventListener('click', function(){
    document.getElementById('light').src ='pic_bulbon.gif'
})

document.getElementById('off').addEventListener('click', function(){
    document.getElementById('light').src ='pic_bulboff.gif'
})



document.getElementById('eye').addEventListener('click',function() {
    

    if (document.getElementById('password')==='text'){
        document.getElementById('password').type='password';

    } else{
        document.getElementById('password').type='text';
    }
})

document.getElementById('password').addEventListener('keyup', function() {
   var inputval = document.getElementById('password').value

   if(inputval .length >8){
    console.log('strong password')
   }else{
    console.log('week password')
   }

})