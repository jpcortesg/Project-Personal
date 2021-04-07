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

  // To set node
  setButton : document.querySelector('.set button'),
  setInput : document.querySelectorAll('.set input'),

  // To remove node
  removeButton : document.querySelector('.remove button'),
  removeInput : document.querySelector('.remove input'),

  // For alerts
  alert : document.querySelector('.alert'),
  sizeList: 0
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
  callInsertNextPosition()
})

// Inser node in some position
dom.insertButton.addEventListener('click', function(event){
  event.preventDefault()
  callInsertSomeIndex()
})

// Set data node in some position
dom.setButton.addEventListener('click', function(event){
  event.preventDefault()
  callSetSomeIndex()
})

// Remove node with index
dom.removeButton.addEventListener('click', function(event){
  event.preventDefault()
  callRemoveNode()
})