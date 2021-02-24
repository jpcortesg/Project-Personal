function checkData(data){ // Check the data entered
  if(Array.isArray(data)){
    let indexAns = checkData(data[0])
    let dataAns = checkData(data[1])
    if (indexAns[1] === 'danger' && dataAns[1] === 'danger'){
      if (indexAns[0] !== dataAns[0]){
        let message = indexAns[0] + ' and ' + dataAns[0]
        return [message, 'danger']
      }
      return indexAns
    }
    else if(indexAns[1] === 'danger') return indexAns
    else if (dataAns[1] === 'danger') return dataAns
    return ['Data added success fully', 'success']
  }
  if(data === '') return['No data', 'danger']
  if (isNaN(data)) return['The data must be a number', 'danger']
  if(parseInt(data) < 0) return['The data must be positive', 'danger']
  return ['Data added success fully', 'success']
}

function alertJs(text, type){ // Show alert, with text and type
  dom.alert.classList.add('down', type)
  dom.alert.innerHTML = text 
  dom.alert.addEventListener('transitionend', function(){ 
    dom.alert.classList.remove('down', type)
    dom.alert.addEventListener('transitionend', function(){ dom.alert.innerHTML = '' })
  })
}

function changeTheme(){
  if(dom.titleIcon.classList.contains('fa-cloud-sun')) changeMode(true) // Change to night
  else changeMode(false) // Change to day
}

function deployMenu(){
  if(dom.menu.classList.contains('deploy')) changeMenu(true) // Collapse the menu
  else changeMenu(false) // Deploy the menu
}

function changeMode(condition){ // Change the color and shape of the components
  dom.titleIcon.classList.add('shrink')
  dom.titleIcon.addEventListener('transitionend', function(){ 
    dom.titleIcon.classList.remove(condition === true ? 'fa-cloud-sun' : 'fa-cloud-moon')
    dom.titleIcon.classList.add(condition === true ? 'fa-cloud-moon' : 'fa-cloud-sun' )
    dom.titleIcon.classList.remove('shrink')
  });
  if (condition === true){
    dom.body.classList.remove('night')
    dom.title.classList.remove('night')
    dom.menu.classList.remove('night')
    dom.list.classList.remove('night')
    
  }else{
    dom.body.classList.add('night')
    dom.title.classList.add('night')
    dom.menu.classList.add('night')
    dom.list.classList.add('night')
  }
}

function changeMenu(condition){ // Deploy or collapse the menu
  dom.menuIcon.classList.add('shrink')
  dom.menuIcon.addEventListener('transitionend', (event) => {
    condition === true ? dom.menu.classList.remove('deploy') : dom.menu.classList.add('deploy')
    dom.menuIcon.classList.remove(condition === true ? 'fa-times' : 'fa-bars')
    dom.menuIcon.classList.add(condition === true ? 'fa-bars' : 'fa-times')
    dom.menuIcon.classList.remove('shrink')
  })
}

function toggleClasswithTime(it, clas, time){ // Change the class within of a set Time out
  setTimeout(function(){
    it.classList.toggle(clas)
  }, time)
}