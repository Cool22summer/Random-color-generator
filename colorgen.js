function generatecol(){
let prefix='#';
let x="0123456789ABCDEF"
for(var i=0;i<6;i++)
{
    
    let output=Math.floor(Math.random()*16);
    prefix+=x[output];

}
document.getElementById('prefix').innerHTML=prefix;
//document.querySelector('button').style.backgroundColor = color;
document.body.style.backgroundColor=prefix;

}

generatecol();
