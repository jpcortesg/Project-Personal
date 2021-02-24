const dom = {
  // For changes in the Dom
  menuIcon : document.querySelector('.menu i'),
  menu : document.querySelector('.menu'),
  titleIcon : document.querySelector('.title i'),
  body : document.querySelector('body'),
  title : document.querySelector('.title h1'),

  // To add a node
  addButton : document.querySelector('.add button'),
  addInput : document.querySelector('.add input'),

  // To insert a node
  insertButton : document.querySelector('.insert button'),
  insertInput : document.querySelectorAll('.insert input'),

  // For alerts
  alert : document.querySelector('.alert'),
}

// Call functions for change styles
dom.menuIcon.addEventListener('click', deployMenu)
dom.titleIcon.addEventListener('click', changeTheme)

// Create a linkedList
const linkedlist = new LinkedListMy()
linkedlist.viewList()

// Add a node in the end of the list
dom.addButton.addEventListener('click', function(event){
  event.preventDefault()
  linkedlist.insertNextPosition(dom.addInput.value)
})

dom.insertButton.addEventListener('click', function(event){
  event.preventDefault()
  linkedlist.insertSomeIndex(dom.insertInput[0].value, dom.insertInput[1].value)
})