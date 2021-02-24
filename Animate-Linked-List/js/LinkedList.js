function LinkedListMy(){
  this.head = null
  this.size = 0
  this.list

  // Insert in next position
  this.insertNextPosition = function(data){
    const [message, type] = checkData(data)
    alertJs(message, type)
    if(type === 'success'){
      let newNode = new Node(data)
      if (this.head === null){ // If there are no nodes in the list
        this.head = newNode
        this.head.showNode(this.size)
      }else{
        let actualNode = this.head
        while (actualNode.nextNode !== null){ // Find last node
          actualNode = actualNode.nextNode
        }
        actualNode.nextNode = newNode
        newNode.showNode(this.size)
      }
      this.size += 2
    }
    dom.addInput.value = ''
  }

  // Insert in some index
  this.insertSomeIndex = function(index, data){
    if(parseInt(index)*2 > this.size) alertJs('Index out of range', 'danger')
    else{
      const [message, type] = checkData([index, data])
      alertJs(message, type)
      if (type === 'success') {
        let newNode = new Node(data)
        if(parseInt(index) === 0){
          newNode.nextNode = this.head
          this.head = newNode
          this.head.showNode(parseInt(index))
        }else{
          cont = 1
          let actualNode = this.head
          while (cont < index){
            cont += 1
            actualNode = actualNode.nextNode
          }
          let help = actualNode
          newNode.nextNode = help.nextNode
          actualNode.nextNode = newNode

          actualNode.nextNode = newNode
          newNode.showNode(index*2)
        }
        this.size += 2
      }
    }
  }

  // Create list view
  this.viewList = function(){
    this.list = document.createElement('div')
    this.list.classList.add('list')
    dom.body.appendChild(this.list)
    dom.list = this.list
  }

  // Show in log
  this.print = function(){
    let actualNode = this.head
    while (actualNode !== null){
      console.log(actualNode.data);
      actualNode = actualNode.nextNode
    }
  }
}

// Class node
function Node(data){
  this.data = data
  this.nextNode = null
  this.nodeView = null
  this.arrowNode = null

  // Show node in DOm
  this.showNode = function(position){
    this.createNodedView()
    this.arrowNodeView()
    dom.list.insertBefore(this.arrowNode, dom.list.childNodes[position])
    dom.list.insertBefore(this.nodeView, dom.list.childNodes[position])
    toggleClasswithTime(this.nodeView, 'pre', 100)
    toggleClasswithTime(this.arrowNode, 'pre', 250)
  }

  // Create the node view for the Dom
  this.createNodedView = function(){
    this.nodeView = document.createElement('div')
    this.nodeView.classList.add('node', 'pre')
    this.nodeView.innerText = data
    return this.nodeView
  }

  // Create the arrow for the next node view for the Dom
  this.arrowNodeView = function(){
    this.arrowNode = document.createElement('div')
    this.arrowNode.classList.add('arrow', 'pre')
    return this.arrowNode
  }
}