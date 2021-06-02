
            var n;
            var arr=[];
            var t;
            var bubcount=0;
            var velo;
            /*var velo = document.getElementById("vel").value;*/
          /*document.getElementById("sel").addEventListener("click",selsort(count));*/
    const timer = ms => new Promise(res => setTimeout(res, ms)); 

    
    function fill(g,h,_fir,_sec,sort)
{
            var k=0;
            let i=0;
            var c = document.getElementById("can");
            var ctx = c.getContext("2d");


 if((sort=="sel"))
        {
        for(i=0;i<g;i++)
           {
                var c = document.getElementById("can");
                var ctx = c.getContext("2d");
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.fillRect(k,0,Math.ceil(100/n),arr[i]);
                ctx.stroke();
                k=k+1+Math.ceil(100/n);
           }
        }


    for(i;i<n-bubcount;i++)                                              /*This is a general for loop to go through the complete array and 
                                                                                    assign its respective color*/
        {
            var c = document.getElementById("can");
            var ctx = c.getContext("2d");
            t=k;
                
            if(i==g)
            {
        
                ctx.fillStyle = _fir;
                ctx.beginPath();
                ctx.fillRect(k,0,Math.ceil(100/n),arr[i]);
                ctx.stroke();
                k=k+1+Math.ceil(100/n);
            }

            else if(i==h)
            {
                ctx.fillStyle = _sec;
                ctx.beginPath();
                ctx.fillRect(k,0,Math.ceil(100/n),arr[i]);
                ctx.stroke();
                k=k+1+Math.ceil(100/n);
            }

            else
            {
            ctx.fillStyle = "yellow";
            ctx.beginPath();
            ctx.fillRect(k, 0, Math.ceil(100/n), arr[i]);
            ctx.stroke();
            k=k+1+Math.ceil(100/n);
            }
        }


        if(sort=="bub")
        {
            for(var p=i;p<n;p++)
            {
            ctx.fillStyle = "green";
            ctx.beginPath();
            ctx.fillRect(k, 0, Math.ceil(100/n), arr[p]);
            ctx.stroke();
            k=k+1+Math.ceil(100/n);
            }
        }
    }


        function clear()
    {
        var c = document.getElementById("can");
        var ctx = c.getContext("2d");
        ctx.clearRect(0,0,can.width,can.height);
    }



        function create()
            { 
            var i;
            clear();
            n = document.getElementById("ran").value;
            arr.splice(0,arr.length);
            for(i=0;i<n;i++)
            {
                arr.push(Math.floor(Math.random()*100));
            }
            fill();
            }



       async function selsort()
    {
        var i,b;
        for(i=0;i<n;i++)
        {
            for(var j=i+1;j<n;j++)
            {
                clear();
                fill(i,j,"blue","red","sel");
                await timer(1000-velo);
                if(arr[j] < arr[i])
                {
                    clear();
                    fill(i,j,"blue","blue","sel");
                    await timer(1000-velo);
                    b = arr[j];
                    arr[j] = arr[i];
                    arr[i] = b;
                }
            }
            clear();
            fill(i,j,"green","yellow","sel");
            await timer(1000-velo);
        }
    }


    async function bubsort()
    {
        var b;
        for(var i=0;i<n-1;i++)
        {
            
            for(var j=0;j<n-i-1;j++)
            {
                clear();
                fill(j,j+1,"red","red","bub");
                await timer(1000-velo);
                if(arr[j]>arr[j+1])
                {
                    b = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = b;
                }
            }
            bubcount++;
            if(bubcount==n-1)
            {
                bubcount++;
            }
            clear();
            fill(i,n-bubcount,"green","green","bub");
            await timer(1000-velo);
            if(bubcount==n)
            {
                bubcount=0;
            }
        }
    }



    async function inssort()
    {
        var key;

        for (var i=1; i<n; i++) {
            key = arr[i];
            var j = i - 1;
            clear();
            fill(i,j,"blue","red","");
            await timer(1000-velo);
        while ((arr[j]>key) && (j >= 0) ) {
                arr[j + 1] = arr[j];
                clear();
                fill(i,j,"blue","blue","");
                await timer(1000-velo);
                j=j-1;
        }
            arr[j + 1] = key;
           /* clear();
            fill(j+1,i,"blue","yellow","");*/
        }
            clear();
            for(i=n-1;i>=0;i--)
            {   
                var c = document.getElementById("can");
                var ctx = c.getContext("2d");
                ctx.fillStyle = "green";
                ctx.beginPath();
                ctx.fillRect(t,0,Math.ceil(100/n),arr[i]);
                ctx.stroke();
                t=t-1-Math.ceil(100/n);
            }
   }


        function speed()
        {
            velo = document.getElementById("vel").value;
        }



  /*function merge(left,right)
 { 
    sorted = [];
    
    while(left && left.length>0 && right && right.length>0){
    if(left[0]<=right[0])
    {
        sorted.push(left.shift());
    }
    else
    {
        sorted.push(right.shift());
    }

    }
sorted = sorted.concat(left);
sorted = sorted.concat(right);
arr = sorted;
}


  function mergeSort(a){
     if(a.length>1)
     {
    var mid = Math.round(a.length/2);
    var left = a.slice(0,mid);
    var right = a.slice(mid);
   
    merge(mergeSort(left),mergeSort(right));
     }
 } */


/*
 async function mergeSort() {

    let n = arr.length;
    for (let size = 1; size <n; size=size*2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2*size) {
    
          let left = leftStart;
          let right = Math.min(left + size, n);
          if (right==n)
          {
              right = n-1;
          }
        let leftLimit = right;
          let rightLimit = Math.min(right + size, n);
          if(rightLimit==n)
          {
              rightLimit=n;
          }
        
          merge(left, right, leftLimit, rightLimit);  
        }
        
      }
    }

    
  async function merge(left,right, leftLimit, rightLimit) 
  {
      let comp_right = [];
      let comp_left = [];
      let i = left;
      var p,q;
        for(p=0;(p+left)<leftLimit;p++)
        {
            comp_left[p] = arr[left+p];
        }
        for(q=0;(right+q)<rightLimit;q++)
        {
            comp_right[q] = arr[right+q];
        }
        p=0;
        q=0;
        //Compare the two sub arrays and merge them in the sorted order
        while ( (p+left)<leftLimit && (q+right)<rightLimit) {
            clear();
            fill(left,right,"red","red","");
           await timer(1000-velo);
          if (comp_left[p] <= comp_right[q]) {
            
            arr[i++] = comp_left[p++];
          } 
          else {
            arr[i++] = comp_right[q++];
          }
        }
      
        //If there are elements in the left sub arrray then add it to the result
        while (p < leftLimit) {
          arr[i++] = comp_left[p++];
        }
      
        //If there are elements in the right sub array then add it to the result
        while (q < rightLimit) {
          arr[i++] = comp_right[q++];
        }
  }*/ 

  document.getElementById("mer").addEventListener("click",function()
    {
        var n = document.getElementById("ran").value;
        var l = 0;
        var r = n-1; 
        document.getElementById("demo").value =  mergeSort(arr,l,r);
       
        
        /*document.getElementById("demo").value = arr; */
        alert("Task done successfully!");
        clear();
        fill();
    });
        
function mergeSort(array,_l,_r)
{
    var left = [],right = [],mid;
    if(array.length>1)
    {
        mid = _l+ Math.floor( (_r - _l)/2 );
        left = array.slice(_l,mid+1);
        right = array.slice(mid+1);
        left = mergeSort(left,_l,mid);
        right = mergeSort(right,mid+1,_r);
        array = merge(left,right,_l,_r);

    }
    return array;
}

function merge(le,re,l,r)
{
    var sort = [];
    var left_comp = le;
    var right_comp = re;
    var stock = arr;
    arr = [];
    while(left_comp.length>0 && right_comp.length>0)
    {
        if(left_comp[0]<=right_comp[0])
        {
            sort.push(left_comp.shift());
            arr.push(left_comp.shift());
        }
        else
        {
            sort.push(right_comp.shift());
            arr.push(right_comp.shift());
        }
    }
    
    while(left_comp.length>0)
    {
        sort.push(left_comp.shift());
        arr.push(left_comp.shift());
    }
    while(right_comp.length>0)
    {
        sort.push(right_comp.shift());
        arr.push(right_comp.shift());
    }
   /* for(var i=0;i<sort.length;i++)
    {
        arr[i+l] = sort[i];
    }*/
    
    for(var i=sort.length;i<sort.length;i++)
    {
        arr.push(stock[i]);
    }
    clear();
    fill();
    return sort;
}



  