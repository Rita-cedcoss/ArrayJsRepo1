var array=[{company:"Samsung", Model:"Galaxy", Memory:64,Price:15000},
{company:"Nokia", Model:"S730", Memory:128,Price:22000},
{company:"Xiaomi", Model:"Note", Memory:32,Price:12000},
{company:"Motoroala", Model:"G10", Memory:32,Price:15000},
{company:"Apple", Model:"S12", Memory:64,Price:25000}
];
populate();
function populate(){
var text="";
text+="<table id='tbl2'><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";

for(var i=0;i<array.length;i++)
{
    text+="<tr><td>"+array[i].company+"</td><td>"+array[i].Model+"</td><td>"+array[i].Memory+"</td><td>"+array[i].Price+"</td></tr>"
    // +"<tr><td>"+array[1].company+"</td><td>"+array[1].Model+"</td><td>"+array[1].Memory+"</td><td>"+array[].Price+"</td></tr>"
    
    "</table>"

}
document.getElementById('outer1').innerHTML=text;
}


function Sorting(){

    var sorted=document.getElementById('selidsort').selectedIndex;
    // console.log(sorted);
    var sortel=document.getElementById('selid').selectedIndex;
    
      if(sorted==1)
      {
         if(sortel==1)
         {
            
          array.sort((a, b) => {
                let fa = a.company.toLowerCase(),
                    fb = b.company.toLowerCase();
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
            populate();
 

         }
         if(sortel==2)
         {
               
          array.sort((a, b) => {
            let fa = a.Model.toLowerCase(),
                fb = b.Model.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        populate();
        
        
  
     }

     if(sortel==3)
     {
      array.sort((a, b) => {
            return a.Memory - b.Memory;
        });
        populate();
        
       

     }

     if(sortel==4)
     {
      array.sort((a, b) => {
            return a.Price - b.Price;
        });
        populate();
       

     }


      }

      if(sorted==2)
      {
         if(sortel==1)
         {
            
          array.sort((a, b) => {
                let fa = a.company.toLowerCase(),
                    fb = b.company.toLowerCase();
            
                if (fb < fa) {
                    return -1;
                }
                if (fb > fa) {
                    return 1;
                }
                return 0;
            });
            populate();
            
            // array.forEach((e) => {
            //     console.log(`${e.company} ${e.Model} ${e.Memory} ${e.Price}`);
            // });   

         }
         if(sortel==2)
         {
               
          array.sort((a, b) => {
            let fa = a.Model.toLowerCase(),
                fb = b.Model.toLowerCase();
        
            if (fb < fa) {
                return -1;
            }
            if (fb > fa) {
                return 1;
            }
            return 0;
        });
        populate();
        
        // array.forEach((e) => {
        //     console.log(`${e.company} ${e.Model} ${e.Memory} ${e.Price}`);
        // });   
  
     }

     if(sortel==3)
     {
      array.sort((a, b) => {
            return b.Memory - a.Memory;
        });
        populate();
        // array.forEach((e) => {
        //     console.log(`${e.company} ${e.Model} ${e.Memory} ${e.Price}`);
        // });

     }

     if(sortel==4)
     {
      array.sort((a, b) => {
            return b.Price - a.Price;
        });
        populate();
        // array.forEach((e) => {
        //     console.log(`${e.company} ${e.Model} ${e.Memory} ${e.Price}`);
        // });

     }


      }




   }

     



    
   
