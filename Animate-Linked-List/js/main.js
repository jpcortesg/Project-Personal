const dom = {
  // For changes in the Dom
  menuIcon : document.querySelector('.menu i'),
  menu : document.querySelector('.menu'),
  titleIcon : document.querySelector('.title i'),
  body : document.querySelector('body'),
  title : document.querySelector('.title h1'),

  // For de program operation
  list : document.querySelector('.list'),
  addButton : document.querySelector('.add button'),
  addInput : document.querySelector('.add input'),
  alert : document.querySelector('.alert'),
}

dom.menuIcon.addEventListener('click', deployMenu)
dom.titleIcon.addEventListener('click', changeTheme)

const linkedlist = new LinkedListMy()
linkedlist.viewList()

dom.addButton.addEventListener('click', function(event){
  event.preventDefault()
  linkedlist.insertNextPosition(dom.addInput.value)
  console.log(dom.list);
})