    window.onload = function(){

        velo = "550";
        document.getElementById('ran').value = '75';
        document.getElementById('vel').value = '550';
    }
    // Global Variables
    var n;
    var arr=[];
    var t; // Variable associated with Insertion sort.
    var bubcount=0;
    var velo;
    var stats=0;

    function pause(){
        stats = 1;
    }

    document.querySelector(".pause").addEventListener("click",pause);

    const lagger =(ms) => new Promise(res => setTimeout(res, ms));
    
    document.querySelector(".reset").addEventListener("click", () => {
        location.reload();
        create();
    })
    var updateTimer;

    var repeat = ()=>{
        let p = parseInt(document.getElementById('seconds').innerHTML);
        
        if(p+1==60) {
            let q = parseInt(document.getElementById('minutes').innerHTML);
            document.getElementById('seconds').innerHTML = "00";
            if(q+1<=9) {
                document.getElementById('minutes').innerHTML = "0" + (q + 1);
            }
            else{
                document.getElementById('minutes').innerHTML = q + 1;
            }
        }
        else {
            if(p+1<=9) {
                document.getElementById('seconds').innerHTML = "0" + (p + 1);
            }
            else{
                document.getElementById('seconds').innerHTML = p + 1;
            }
            
        }
    }

    function startTimer() {
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";

        updateTimer = setInterval(repeat,1000);
    }

    function endTimer() {
        clearInterval(updateTimer);
    }

    document.getElementById('quick').addEventListener("click",() =>{

        quickSort(0,arr.length-1);
        
    })

    var i,index;
    async function partition(left, right) {
       return new Promise( async (resolve)=>{ var pivot_ind = Math.floor((right + left) / 2);
        var pivot   = arr[pivot_ind]; //middle element
        i = left; //left pointer
        var j = right; //right pointer

            clear();
            fill(i,j,"red","red","quick",pivot_ind);
            await lagger(1000-velo);

        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
                clear();
                fill(i,j,"red","red","quick",pivot_ind);
                await lagger(1000-velo);
            }
            while (arr[j] > pivot) {
                clear();
                fill(i,j,"blue","red","quick",pivot_ind);
                await lagger(1000-velo);
                j--;
            }

            clear();
            fill(i,j,"blue","blue","quick",pivot_ind);
            await lagger(1000-velo);

            if (i <= j) {
                swap(i, j);
                i++;
                j--;
            }
        }
        index = i;
        resolve("resolved");
    });
    }

    function swap(leftIndex, rightIndex){
        var temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
    }

   async function quickSort(left, right) {
        
        startTimer();
        let button = document.querySelectorAll('.disbut');
        button.forEach((item)=>{item.disabled = true;});
        button.forEach((item)=>{item.style.color = 'red'});

        if (arr.length > 1) {

            var pivot_ind = Math.floor((right + left) / 2);
            var pivot   = arr[pivot_ind]; //middle element
            var i = left; //left pointer
            var j = right; //right pointer

            clear();
            fill(i,j,"red","red","quick",pivot_ind);
            await lagger(1000-velo);

        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
                clear();
                fill(i,j,"red","red","quick",pivot_ind);
                await lagger(1000-velo);
            }
            while (arr[j] > pivot) {
                clear();
                fill(i,j,"blue","red","quick",pivot_ind);
                await lagger(1000-velo);
                j--;
            }

            clear();
            fill(i,j,"blue","blue","quick",pivot_ind);
            await lagger(1000-velo);

            if (i <= j) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
        }
        index = i;


          // await partition(left, right); //index returned from partition


            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(index, right);
            }
        }

        button.forEach((item)=>{item.disabled = false;});
        button.forEach((item)=>{item.style.color = 'green'});
        endTimer();
    }

    
    function fill(g,h,_fir,_sec,sort,pivot) {

            var k = 100 - document.getElementById('ran').value;
            let i = 0;
            var c = document.getElementById("can");
            var ctx = c.getContext("2d");

        if(sort=="sel") {

                for(i=0;i<g;i++)
                {
                       ctx.fillStyle = "green";
                        ctx.beginPath();
                        ctx.fillRect(k,0,Math.ceil(100/(n)),arr[i]);
                        ctx.stroke();
                        k=k+1+Math.ceil(100/(n));
                }
        }

        for(i; i < n - bubcount; i++) {
            t=k;               
            if(i==g){
                ctx.fillStyle = _fir;
            }

            else if(i==h) {
                ctx.fillStyle = _sec;
            }
            else if(i==pivot) {

                ctx.fillStyle = "white";
            }

            else {
                ctx.fillStyle = "yellow";
            }

            ctx.beginPath();
            ctx.fillRect(k,0,Math.ceil(100/(n)),arr[i]);
            ctx.stroke();
            k = k + 1 + Math.ceil(100/(n));
        }

        if(sort=="bub") {
                   
            for(var p=i;p<n;p++)
            {
                    ctx.fillStyle = "green";
                    ctx.beginPath();
                    ctx.fillRect(k, 0, Math.ceil(100/(n)), arr[p]);
                    ctx.stroke();
                    k=k+1+Math.ceil(100/(n));    
            }

        }  
    }


        function clear() {
            var c = document.getElementById("can");
            var ctx = c.getContext("2d");
            ctx.clearRect(0,0,can.width,can.height);
        }


       function create() {             
            var i;
            clear();
            n = document.getElementById("ran").value;
            arr.splice(0,arr.length);
            for(i=0;i<n;i++)
            {
                arr.push(Math.floor(Math.random()*100)+1);
            }
            fill();
        }



       async function selsort() {

        startTimer();

        let button = document.querySelectorAll('.disbut');
        button.forEach((item)=>{item.disabled = true;});
        button.forEach((item)=>{item.style.color = 'red'});
        var i,b;

        for(i=0;i<n;i++) {

            for(var j=i+1;j<n;j++) {

                clear();
                fill(i,j,"blue","red","sel");
                await lagger(1000-velo);
                if(arr[j] < arr[i]) {
                    clear();
                    fill(i,j,"blue","blue","sel");
                    await lagger(1000-velo);
                    b = arr[j];
                    arr[j] = arr[i];
                    arr[i] = b;
                }
                if (stats == 1) await pauser();
            }

            clear();
            fill(i,j,"green","yellow","sel");
            await lagger(1000-velo);
        }

        button.forEach((item)=>{item.disabled = false;});
        button.forEach((item)=>{item.style.color = 'green'});
       endTimer();
    }


    async function bubsort()
    {
        startTimer();

        let button = document.querySelectorAll('.disbut');
        button.forEach((item)=>{item.disabled = true;});
        button.forEach((item)=>{item.style.color = 'red'});

        var b;
        for(var i=0;i<n-1;i++)
        {
            
            for(var j=0;j<n-i-1;j++)
            {
                clear();
                fill(j,j+1,"red","red","bub");
                await lagger(1000-velo);
                if(arr[j]>arr[j+1])
                {
                    b = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = b;
                }
                if (stats == 1) await pauser();
            }
            bubcount++;

            if(bubcount == n-1) {
                bubcount++;
            }

            clear();
            fill(i,n-bubcount,"green","green","bub");

            await lagger(1000-velo);

            if(bubcount==n) {
                bubcount=0;
            }
        }

        button.forEach((item)=>{item.disabled = false;});
        button.forEach((item)=>{item.style.color = 'green'});
        endTimer();
    }



    async function inssort() {
        
        startTimer();

        let button = document.querySelectorAll('.disbut');
        button.forEach((item)=>{item.disabled = true;});
        button.forEach((item)=>{item.style.color = 'red'});

        var key;

        for (var i=1; i<n; i++) {
            key = arr[i];
            var j = i - 1;
            clear();
            fill(i,j,"blue","red","");
            await lagger(1000-velo);

            while ((arr[j]>key) && (j >= 0) ) {
                arr[j + 1] = arr[j];
                clear();
                fill(i,j,"blue","blue","");
                await lagger(1000-velo);
                j=j-1;
                if (stats == 1) await pauser();
            }
            arr[j + 1] = key;
           
        }
            clear();
            var c = document.getElementById("can");
            var ctx = c.getContext("2d");
            ctx.fillStyle = "green";

            for(i=n-1;i>=0;i--) {   
                ctx.beginPath();
                ctx.fillRect(t,0,Math.ceil(100/n),arr[i]);
                ctx.stroke();
                t=t-1-Math.ceil(100/n);
            }

            button.forEach((item)=>{item.disabled = false;});
            button.forEach((item)=>{item.style.color = 'green'});
            endTimer();
        }


    function speed() {
            velo = document.getElementById("vel").value;
        }

      
    function pauser() {

        return new Promise(resolve => {

            let playbuttonclick = function () {
                stats = 0;
                console.log('Reaching');
                document.querySelector(".pause").removeEventListener('click',playbuttonclick);
                document.querySelector(".pause").addEventListener('click',pauser);
                updateTimer = setInterval(repeat,1000);
                resolve("resolved");
            }
            
            document.querySelector(".pause").removeEventListener("click",pauser);
            document.querySelector(".pause").addEventListener("click",playbuttonclick);

            if(updateTimer!=undefined) {
                clearInterval(updateTimer);
            }           
        })
    }

    