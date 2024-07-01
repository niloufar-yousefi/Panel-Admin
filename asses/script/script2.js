let _barMenu = document.getElementById('_barMenu')
let _return =document.getElementById('_return')
let _search  =document.getElementById('_search"')
let _hidden = document.querySelectorAll('._hidden')
let _mainContent =document.getElementById('_mainContent')

let flag = 0
let _page = 1
 function myMenuMob() {
    _barMenu.style.left = 0
    _return.style.right = 0
}

function myMenuMobReturn(s) {
    s.style.right = -100 + '%'
    _barMenu.style.left = -100 + '%'
}

function myBorder1(s) {
   s.parentElement.classList.remove('border-[#FFFFFF]')
   s.parentElement.classList.add('border-[rgb(126,87,194)]')
}

function myBorder2(s) {   
    s.parentElement.classList.remove('border-[rgb(126,87,194)]')    
 }


function _widthMenu() {
  if(flag == 0){
    _hidden.forEach(element => {
      element.style.display = 'none' 
      element.parentElement.style.paddingLeft = '5px'   
    })
    _barMenu.style.width = '10%'
    _mainContent.style.width = '86%'
    flag = 1
  }else{
    _hidden.forEach(element => {
      element.style.display = 'flex'
      element.parentElement.style.paddingLeft = '16px'  
    })
    _barMenu.style.width = '18%'
    _mainContent.style.width = '78%'
    flag = 0
  }
} 

_getDate()
function _getDate(){ 
  const url = new URL('https://65325ff8d80bd20280f56efd.mockapi.io/api/niloofar/users');  
  url.searchParams.append('page', _page); 
  url.searchParams.append('limit',8); 
  
  fetch(url, {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(tasks => {
    console.log(tasks);
    for (let index = 0; index < tasks.length; index++) {  
      let x = tasks[index]          
                 
      let _div = document.createElement('div')
      _div.classList.add('*:w-[33%]','mb-5','lg:text-[1vw]','text-[2vw]')
      document.querySelector('#_mainContent > section').appendChild(_div)
      _div.innerHTML = `             
          <p> ${x.city}</p>            
          <p> ${x.fullName}</p>               
          <p> ${x.email}</p>    
        `            
  }
  }).catch(error => {
    // handle error
  }) 
}

function myReturn() {
  window.location.href = 'index.html'
}