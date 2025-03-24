document.addEventListener('DOMContentLoaded', function(){
   
    const likes = {}
    let count=0;
    const timer=document.getElementById('counter');


    
    let IsPaused = false;
    let timerId;
    
    function startCounter(){
        timerId = setInterval(()=>{
            count ++;
            timer.textContent= count;

        },1000)
    }startCounter()

    /*setInterval(() =>{
        count++;
        timer.textContent = count
    },1000);*/

    
    const btnminus=document.getElementById('minus')
        btnminus.addEventListener('click',function(){
          count --
          timer.textContent=count
        
        })
    const btnplus=document.getElementById('plus')
        btnplus.addEventListener('click',function(){
            count ++
            timer.textContent = count;
        })

    const btnheart=document.getElementById('heart')
    const likeslist = document.querySelector('.likes')
        btnheart.addEventListener('click',function(){
          if(!likes[count]){
            likes[count] = 1;
            const li =document.createElement('li');
            li.id =`like-${count}`
            li.textContent = `${count} has been liked 1 time`
            likeslist.appendChild(li);
          } else {
            likes[count] ++;
            const li = document.getElementById(`like-${count}`);
            li.textContent = `${count} has been liked ${likes[count]} times`
          }
        })

    const form=document.getElementById('comment-form')
    const commentList= document.getElementById('list')
            form.addEventListener('submit',function(e){
                e.preventDefault();
                const comment=document.getElementById('comment-input').value
                const p = document.createElement('p');
                p.textContent = comment;
                commentList.appendChild(p)
                form.reset();

            })


    const btnPause=document.getElementById('pause')
            btnPause.addEventListener('click',function(){
                if(!IsPaused){
                    clearInterval(timerId);
                    IsPaused = true;
                    btnPause.textContent='resume';
                    btnminus.disabled=true;
                    btnplus.disabled=true;
                    btnheart.disabled=true;
                    
                }else{
                    startCounter()
                    IsPaused = false;
                    btnPause.textContent='pause'
                    btnminus.disabled=false;
                    btnplus.disabled=false;
                    btnheart.disabled=false
                }
            })
   
        

})