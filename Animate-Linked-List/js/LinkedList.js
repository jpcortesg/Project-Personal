function LinkedListMy(){
  this.head = null
  this.list = null

  // Insert in next position
  this.insertNextPosition = async function(data){
    let newNode = new Node(data)
    if (this.head === null){
      this.head = newNode
      this.head.showNode(dom.sizeList)
    }else{
      let actualNode = this.head 
      await animateNodes(actualNode)  
      while (actualNode.nextNode !== null){
        actualNode = actualNode.nextNode
        await animateNodes(actualNode)
      }
      actualNode.nextNode = newNode
      newNode.showNode(dom.sizeList)
    }
    dom.sizeList += 2
  }

  // Insert in some index
  this.insertSomeIndex = async function(index, data){
    let newNode = new Node(data)
    if(parseInt(index) === 0){
      newNode.nextNode = this.head
      this.head = newNode
      this.head.showNode(parseInt(index))
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
    }
    dom.sizeList += 2
  }

  // Set in some index
  this.setSomeIndex = async function(index, data){
    if(parseInt(index) === 0){
      await animationSetData(this.head, data)
    }else{
      cont = 1
      let actualNode = this.head
      await animateNodes((actualNode))
      while (cont < index){
        cont += 1
        actualNode = actualNode.nextNode
        await animateNodes(actualNode)
      }
      await animationSetData(actualNode.nextNode, data)
    }
  }

  // Remove with some index
  this.removeNode = async function(index){
    if(parseInt(index) === 0){
      const nodeDelete = this.head
      if(dom.sizeList > 2){
        this.head = nodeDelete.nextNode
      }else{
        this.head = null
      }
      await removeNode(nodeDelete)
    }else{
      cont = 1
      let actualNode = this.head
      await animateNodes(actualNode)
      while (cont < index) {
        cont += 1
        actualNode = actualNode.nextNode
        await animateNodes(actualNode)
      }
      const deleteNode = actualNode.nextNode
      if(index < dom.sizeList){
        actualNode.nextNode = deleteNode.nextNode
      }else{
        beforeNode.nextNode = null
      }
      await removeNode(deleteNode)
    }
    dom.sizeList -= 2
  }

  // Create list view
  this.viewList = function(){
    this.list = document.createElement('div')
    this.list.classList.add('list')
    dom.body.appendChild(this.list)
    dom.list = this.list
    dom.sizeList = dom.sizeList
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
  this.showNode = async function(position){
    this.createNodedView()
    this.arrowNodeView()
    dom.list.insertBefore(this.arrowNode, dom.list.childNodes[position])
    dom.list.insertBefore(this.nodeView, dom.list.childNodes[position])
    await toggleClasswithTime2(this.nodeView, 'pre', 250)
    await toggleClasswithTime2(this.arrowNode, 'pre', 500)
  }

  // Create the node view for the Dom
  this.createNodedView = function(){
    this.nodeView = document.createElement('div')
    this.nodeView.classList.add('node', 'pre')
    this.nodeView.innerText = this.data
  }

  // Create the arrow for the next node view for the Dom
  this.arrowNodeView = function(){
    this.arrowNode = document.createElement('div')
    this.arrowNode.classList.add('arrow', 'pre')
  }
}