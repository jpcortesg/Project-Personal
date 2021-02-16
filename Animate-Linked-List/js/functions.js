function checkData(data){ // Check the data entered
  if(data === '') return['No data', 'danger']
  let isPossible = isNaN(data)
  if (isPossible) return['The data must be a number', 'danger']
  if(parseInt(data) < 0) return['The data must be positive', 'danger']
  return ['Data added success fully', 'success']
}

function alertJs(text, type){ // Show alert, with text and type
  alert.classList.add('down', type)
  alert.innerHTML = text 
  alert.addEventListener('transitionend', function(){ 
    alert.classList.remove('down', type)
    alert.addEventListener('transitionend', function(){ alert.innerHTML = '' })
  })
}

function changeTheme(){
  if(titleIcon.classList.contains('fa-cloud-sun')) changeMode(true) // Change to night
  else changeMode(false) // Change to day
}

function deployMenu(){
  if(menu.classList.contains('deploy')) changeMenu(true) // Collapse the menu
  else changeMenu(false) // Deploy the menu
}

function changeMode(condition){ // Change the color and shape of the components
  titleIcon.classList.add('shrink')
  titleIcon.addEventListener('transitionend', function(){ 
    titleIcon.classList.remove(condition === true ? 'fa-cloud-sun' : 'fa-cloud-moon')
    titleIcon.classList.add(condition === true ? 'fa-cloud-moon' : 'fa-cloud-sun' )
    titleIcon.classList.remove('shrink')
  });
  if (condition === true){
    body.classList.remove('night')
    title.classList.remove('night')
    menu.classList.remove('night')
    
  }else{
    body.classList.add('night')
    title.classList.add('night')
    menu.classList.add('night')
  }
}

function changeMenu(condition){ // Deploy or collapse the menu
  menuIcon.classList.add('shrink')
  menuIcon.addEventListener('transitionend', function(){
    condition === true ? menu.classList.remove('deploy') : menu.classList.add('deploy')
    menuIcon.classList.remove(condition === true ? 'fa-times' : 'fa-bars')
    menuIcon.classList.add(condition === true ? 'fa-bars' : 'fa-times')
    menuIcon.classList.remove('shrink')
  })
}