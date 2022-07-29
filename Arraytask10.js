var arr=[{company:"Samsung", Model:"Galaxy", Memory:64,Price:15000,Quantity:3,Rating:""},
{company:"Nokia", Model:"S730", Memory:128,Price:22000,Quantity:2,Rating:""},
{company:"Xiaomi", Model:"Note", Memory:32,Price:12000,Quantity:4,Rating:""},
{company:"Motoroala", Model:"G10", Memory:32,Price:15000,Quantity:1,Rating:""},
{company:"Apple", Model:"S12", Memory:64,Price:25000,Quantity:5,Rating:""}
];
populated();
function populated(){
var text="";
text+="<table id='tbl1'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th></tr>";

for(var i=0;i<arr.length;i++)
{
    text+="<tr><td>"+arr[i].company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"+arr[i].Price+"</td><td>"+arr[i].Quantity+"</td></tr>"
    // +"<tr><td>"+array[1].company+"</td><td>"+array[1].Model+"</td><td>"+array[1].Memory+"</td><td>"+array[].Price+"</td></tr>"
    
    "</table>"

}
document.getElementById('outer1').innerHTML=text;


}
function searchProduct()
{
    var min=document.getElementById('minimum').value;
    // console.log(min);
    var max=document.getElementById('maximum').value;
    // console.log(max);
    var text="";
text+="<table id='tbl1'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th></tr>";
    for(i=0;i<arr.length;i++)
    {
        
       if(min<=arr[i].Price && max>=arr[i].Price)
       {
        
        text+="<tr><td>"+arr[i].company+"</td><td>"+arr[i].Model+"</td><td>"+arr[i].Memory+"</td><td>"+arr[i].Price+"</td><td>"+arr[i].Quantity+"</td></tr>"
       
       }
       

    }
    document.getElementById('outer3').innerHTML=text;
   
       



}