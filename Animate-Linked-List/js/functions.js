// Check the data entered
function checkData(data){ 
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

// Show alert, with text and type
function alertJs(text, type){ 
  dom.alert.classList.add('down', type)
  dom.alert.innerHTML = text 
  dom.alert.addEventListener('transitionend', function(){ 
    dom.alert.classList.remove('down', type)
    dom.alert.addEventListener('transitionend', function(){ dom.alert.innerHTML = '' })
  })
}

function changeTheme(){
  if(dom.titleIcon.classList.contains('fa-cloud-sun')) changeMode(true) 
  else changeMode(false) 
}

function deployMenu(){
  if(dom.menu.classList.contains('deploy')) changeMenu(true) 
  else changeMenu(false) 
}

// Change the color and shape of the components
function changeMode(condition){ 
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

// Deploy or collapse the menu
function changeMenu(condition){
  dom.menuIcon.classList.add('shrink')
  dom.menuIcon.addEventListener('transitionend', (event) => {
    condition === true ? dom.menu.classList.remove('deploy') : dom.menu.classList.add('deploy')
    dom.menuIcon.classList.remove(condition === true ? 'fa-times' : 'fa-bars')
    dom.menuIcon.classList.add(condition === true ? 'fa-bars' : 'fa-times')
    dom.menuIcon.classList.remove('shrink')
  })
}

// Change the class within of a set Time out
function toggleClasswithTime(it, clas, time){
  setTimeout(function(){
    it.classList.toggle(clas)
  }, time)
}

// Change the class within of a set Time out, but with promise
function toggleClasswithTime2(it, clas, time){
  return new Promise(resolve => {
    setTimeout(() => {
      it.classList.toggle(clas)
      resolve()
    }, time)
  })
}

// Makes node animation possible
async function animateNodes(node){
  await toggleClasswithTime2(node.nodeView, 'select', 10)
  await toggleClasswithTime2(node.arrowNode, 'select', 250)
  await toggleClasswithTime2(node.nodeView, 'select', 10)
  await toggleClasswithTime2(node.arrowNode, 'select', 250)
}

// Call the function "insertNextPosition"
function callInsertNextPosition(){
  let data = dom.addInput.value
  dom.addInput.value = ''
  dom.addButton.disabled = true
  const [message, type] = checkData(data)
  if(type === 'danger'){
    alertJs(message, type)
  }
  else{
    linkedlist.insertNextPosition(data)
    alertJs(message, type)
  }
  dom.addButton.disabled = false
}


// Call function InsertSomeIndex
function callInsertSomeIndex(){
  let index = dom.insertInput[0].value
  let data = dom.insertInput[1].value
  dom.insertButton.disabled = true
  index.value = ''
  data.value = ''
  if(parseInt(index)*2 > this.size){
    alertJs('Index out of range', 'danger')
  }else{
    const [message, type] = checkData([index, data])
    if(type === 'danger'){
      alertJs(message, type)
    }else{
      linkedlist.insertSomeIndex(index, data)
      alertJs(message, type)
    }
  }
  dom.insertButton.disabled = false
}