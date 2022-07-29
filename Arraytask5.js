var arr=[{company:"Samsung", Model:"Galaxy", Memory:64,Price:15000,Quantity:3},
{company:"Nokia", Model:"S730", Memory:128,Price:22000,Quantity:2},
{company:"Xiaomi", Model:"Note", Memory:32,Price:12000,Quantity:4},
{company:"Motoroala", Model:"G10", Memory:32,Price:15000,Quantity:1},
{company:"Apple", Model:"S12", Memory:64,Price:25000,Quantity:5}
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
var selectFrom=document.getElementById('selid');
for(i=0;i<arr.length;i++)
{
    var opt = arr[i].company+" "+arr[i].Model;
    var select1 = document.createElement("option");
    select1.textContent = opt;
    selectFrom.appendChild(select1);
    
}


function populateNext()
{
    var text="";
    text+="<table id='tbl1'><tr><th>Discription</th><th>Quantity</th><th>Price</th></tr>";
    
    for(var i=0;i<tempArr.length;i++)
    {
        text+="<tr><td>"+tempArr[i].company+"</td><td>"+tempArr[i].quantity+"</td><td>"+tempArr[i].price+"</td></tr>"
        // +"<tr><td>"+array[1].company+"</td><td>"+array[1].Model+"</td><td>"+array[1].Memory+"</td><td>"+array[].Price+"</td></tr>"
    
        "</table>"
    }
    document.getElementById('outer3').innerHTML=text;
    
}

var tempArr=[];
var splitArr;

function getPrice(sel)
{
    for(i=0;i<arr.length;i++)
       { 
        // console.log(arr[i].company);
          if(arr[i].company==sel.split(' ')[0])
          {
            return arr[i].Price;
          }
        }

}
function indexid(sel)
{
    for(i=0;i<arr.length;i++)
       { 
        // console.log(arr[i].company);
          if(arr[i].company==sel.split(' ')[0])
          {
            return i;
          }
        }

}
function addProduct()
{
    var selValue=document.getElementById('selid').value;
 
    // var tblId=document.getElementById('populate').value
     
    var input=document.getElementById('input1').value;
    var pprice=getPrice(selValue);
    var arrindex=indexid(selValue);
    // console.log(input);
    splitArr=selValue.split(" ");
     var index= existElement();
   
    //  alert("i"+i);
     if(index==-1)
     {
       for(i=0;i<arr.length;i++)
       { 
        // console.log(arr[i].company);
          if(arr[i].company==splitArr[0])
          {
            if(parseInt(arr[i].Quantity)<parseInt(input))
        {
                return alert("stock not available");
            
        }
            
            var prodprice=input*arr[i].Price;
            
            objArr={company:selValue,quantity:input,price:prodprice};
            
            tempArr.push(objArr);
            arr[i].Quantity=parseInt(arr[i].Quantity)-parseInt(input);
            
          }

         
       }
       
     }
     else{
        if(parseInt(arr[arrindex].Quantity)<parseInt(input))
        {
                return alert("stock not available");
            
        }
        
        tempArr[index].quantity=parseInt(tempArr[index].quantity)+parseInt(input);
        tempArr[index].price=tempArr[index].quantity*pprice;
        arr[arrindex].Quantity=parseInt(arr[arrindex].Quantity)-parseInt(input);
    
            
     }     
    populateNext();
    populated();
     
}
function existElement()
{
    console.log(tempArr);
    console.log(splitArr[0]);
  for(i=0;i<tempArr.length;i++)
  {
    
    if(tempArr[i].company.split(' ')[0]==splitArr[0])
    {
        // alert("in");
          return i;
    }

  }
 return -1;
}

function bill()
 {
     var a=0;
    for(i=0;i<tempArr.length;i++)
    {
       
    a+= tempArr[i].price;

    }
    
    var text2="";
    text2="<table><tr><td>Total</td><td>"+a+"</td></tr></table>";
     document.getElementById('outer4').innerHTML=text2;
    //  document.getElementById('outer4').innerHTML="";
    // document.getElementById('addEle').innerHTML.style.Display="block";
    document.getElementById("addEle").style.display = "none";
    document.getElementById("btnBill").disabled="disabled";



 }


