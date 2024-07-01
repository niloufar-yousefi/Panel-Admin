let _barMenu = document.getElementById('_barMenu')
let _return =document.getElementById('_return')
let _search  =document.getElementById('_search"')
let _hidden = document.querySelectorAll('._hidden')
let _mainContent =document.getElementById('_mainContent')
let flag = 0

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

// page swich
function users() {
  window.location.href = 'users.html'
}


//chart 1
const ctx = document.getElementById('myChart');
Chart.defaults.color = '#EDE7F6';
Chart.defaults.backgroundColor = '#9BD0F5';

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['page1', 'page2', 'page3', 'page4'],    
    datasets: [{
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 2,
      borderColor: '#EDE7F6'
    }]
  },
  options: {
    plugins: {
        legend: {
            display: false,            
        }
    }
  }
});

//chart 2
(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('myChart2'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            backgroundColor: '#EDE7F6',
            data: data.map(row => row.count)
          }
        ]
      },
      options: {
        plugins: {
            legend: {
                display: false,            
            }
        }
      }
    }
  );
})();

//chart 3
const ctx3 = document.getElementById('myChart3');
new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ['page1', 'page2'],       
    datasets: [{
      data: [12, 20],
      borderWidth: 2,
      borderColor: 'rgb(94,53,177)', 
      backgroundColor: ['#EDE7F6', '#EDE7F6'],    
    }]
  }, 
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});


//chart 4
const ctx4 = document.getElementById('myChart4');
Chart.defaults.color = '#EDE7F6';
Chart.defaults.backgroundColor = '#9BD0F5';

new Chart(ctx4, {
  type: 'line',
  data: {
    labels: ['page1', 'page2', 'page3', 'page4'],    
    datasets: [{
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 2,
      borderColor: '#EDE7F6'
    }]
  },
  options: {
    plugins: {
        legend: {
            display: false,            
        }
    }
  }
});

//chart5
const ctx5 = document.getElementById('myChart5');
new Chart(ctx5, {
  type: 'doughnut',
  data: {
    labels: ['page1', 'page2'],       
    datasets: [{
      data: [12, 20],
      borderWidth: 2,
      borderColor: 'rgb(94,53,177)', 
      backgroundColor: ['#EDE7F6', '#EDE7F6'],    
    }]
  }, 
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

