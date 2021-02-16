const menuIcon = document.querySelector('.menu i')
const menu = document.querySelector('.menu')
menuIcon.addEventListener('click', deployMenu)

const titleIcon = document.querySelector('.title i')
const body = document.querySelector('body')
const title = document.querySelector('.title')
titleIcon.addEventListener('click', changeTheme)


const addButton = document.querySelector('.add button')
const addInput = document.querySelector('.add input')
const alert = document.querySelector('.alert')

menuIcon.addEventListener('click', deployMenu)


let linkedlist = new LinkedListMy()

addButton.addEventListener('click', function(){
  linkedlist.insertNextPosition(addInput.value)
  linkedlist.print()
})

