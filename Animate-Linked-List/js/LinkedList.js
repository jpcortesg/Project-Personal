function LinkedListMy(){
  this.head = null
  this.size = 0

  // Insert in next position
  this.insertNextPosition = function(data){
    const [message, type] = checkData(data)
    alertJs(message, type)
    if(type === 'success'){
      let newNode = new Node(data)
      if (this.head === null){ // If there are no nodes in the list
        this.head = newNode
      }else{
        let actualNode = this.head
        while (actualNode.nextNode !== null){ // Find last node
          actualNode = actualNode.nextNode
        }
        actualNode.nextNode = newNode
      }
      showNode(newNode)
      this.size += 1
    }
  }

  // Insert in some index
  this.insertSomeIndex = function(data, index){
    const newNode = new Node(data)
    if(index === 0){
      newNode.nextNode = this.head
      this.head = newNode
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
      }
    this.size += 1
  }

  // Show in log
  this.print = function(){
    let actualNode = this.head
    while (actualNode !== null){
      console.log(actualNode.data);
      actualNode = actualNode.nextNode
    }
  }

  // Show node in DOm
  function showNode(node){
    node.createNodedView()
    dom.list.appendChild(node.nodeView)
    toggleClasswithTime(node.nodeView, 'pre', 1)
    node.arrowNodeView()
    dom.list.appendChild(node.arrowNodeView)
    toggleClasswithTime(node.arrowNodeView, 'pre', 250)
  }
}

// To create news nodes
function Node(data){
  this.data = data
  this.nextNode = null
  this.nodeView = null
  this.arrowNode = null

  // Create the node view for the Dom
  this.createNodedView = function(){
    this.nodeView = document.createElement('div')
    this.nodeView.classList.add('node', 'pre')
    this.nodeView.innerText = data
    return this.nodeView
  }

  // Create the next node view for the Dom
  this.arrowNodeView = function(){
    this.arrowNodeView = document.createElement('div')
    this.arrowNodeView.classList.add('arrow', 'pre')
    return this.arrowNodeView
  }
  
  

  // node.remove = function (data, previusNode, data){
  //   if (this.data == data){
  //     previusNode.nextNode = this.nextNode
  //   }else{
  //     if(this.nextNode !== null){
  //       this.nextNode.remove(data, this)
  //     }
  //   }
  // }
}