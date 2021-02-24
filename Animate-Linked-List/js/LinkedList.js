function LinkedListMy(){
  this.head = null
  this.size = 0
  this.list

  // Insert in next position
  this.insertNextPosition = async function(data){
    dom.addInput.value = ''
    dom.addButton.disabled = true
    const [message, type] = checkData(data)
    if(type === 'danger') alertJs(message, type)
    else {
      let newNode = new Node(data)
      if (this.head === null){ // If there are no nodes in the list
        this.head = newNode
        this.head.showNode(this.size)
        alertJs(message, type)
      }else{
        let actualNode = this.head 
        await animateNodes(actualNode)  
        while (actualNode.nextNode !== null){ // Find last node
          actualNode = actualNode.nextNode
          await animateNodes(actualNode)
        }
        actualNode.nextNode = newNode
        newNode.showNode(this.size)
        alertJs(message, type)
      }
      this.size += 2
    }
    dom.addButton.disabled = false
  }

  // Insert in some index
  this.insertSomeIndex = async function(index, data){
    index.value = ''
    data.value = ''
    dom.insertButton.disabled = true
    if(parseInt(index)*2 > this.size) alertJs('Index out of range', 'danger')
    else{
      const [message, type] = checkData([index, data])
      if(type === 'danger') alertJs(message, type)
      else{
        let newNode = new Node(data)
        if(parseInt(index) === 0){
          newNode.nextNode = this.head
          this.head = newNode
          this.head.showNode(parseInt(index))
          alertJs(message, type)
        }else{
          cont = 1
          let actualNode = this.head
          await animateNodes(actualNode)
          while (cont < index){
            cont += 1
            actualNode = actualNode.nextNode
            await animateNodes(actualNode)
          }
          let help = actualNode
          newNode.nextNode = help.nextNode
          actualNode.nextNode = newNode
          newNode.showNode(index*2)
          alertJs(message, type)
        }
        this.size += 2
      }
    }
    dom.insertButton.disabled = false
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