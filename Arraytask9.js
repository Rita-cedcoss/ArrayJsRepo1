var array=[{company:"Samsung", Model:"Galaxy", Memory:64,Price:15000,Quantity:3,Rating:""},
{company:"Nokia", Model:"S730", Memory:128,Price:22000,Quantity:2,Rating:""},
{company:"Xiaomi", Model:"Note", Memory:32,Price:12000,Quantity:4,Rating:""},
{company:"Motoroala", Model:"G10", Memory:32,Price:15000,Quantity:1,Rating:""},
{company:"Apple", Model:"S12", Memory:64,Price:25000,Quantity:5,Rating:""}
];
populated();
function populated(){
var text="";
text+="<table id='tbl1'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th><th>Rating</th></tr>";

for(var i=0;i<array.length;i++)
{
    text+="<tr><td>"+array[i].company+"</td><td>"+array[i].Model+"</td><td>"+array[i].Memory+"</td><td>"+array[i].Price+"</td><td>"+array[i].Quantity+"</td><td>"+array[i].Rating+"</td></tr>"
    // +"<tr><td>"+array[1].company+"</td><td>"+array[1].Model+"</td><td>"+array[1].Memory+"</td><td>"+array[].Price+"</td></tr>"
    
    "</table>"

}
document.getElementById('outer1').innerHTML=text;


}

var selectFrom=document.getElementById('selProduct');
for(i=0;i<array.length;i++)
{
    var opt = array[i].company;
    var select1 = document.createElement("option");
    select1.textContent = opt;
    selectFrom.appendChild(select1);
    
}
var rateArr=[1,2,3,4,5];
var selectFrom=document.getElementById('selRating');
for(i=0;i<rateArr.length;i++)
{
    var opt = rateArr[i];
    var select1 = document.createElement("option");
    select1.textContent = opt;
    selectFrom.appendChild(select1);
    
}
function rateAdd()
{
  var product = document.getElementById('selProduct').value;
  console.log(product);
  var rate= document.getElementById('selRating').value;
  console.log(rate);
  for(i=0;i<array.length;i++)
  {
  if(array[i].company==product)
  {
    array[i].Rating=rate;
    
  }
  }
  populated();
  document.getElementById('selProduct').value="";
  document.getElementById('selRating').value="";
}


