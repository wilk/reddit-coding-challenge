/*
 Node ids: ( 1 )  →  ( 2 ) → ( 3 ) → ( 4 ) → ( 6 ) → ( 7 ) → ( 8 )
                                       |             
                                     ( 5 ) → ( 16 ) → ( 17 )
           ( 9 )
*/


// Input: 

const inputNodes = [
// (node id, parent id)
  [8, 7],
  [7, 6],
  [6, 4],
  [5, 4], // ht[4] -> [5, 6]
  [4, 3],
  [3, 2],
  [2, 1],
  [1, null],
  [9, null],
];

// Output:  [1, 7, 9]


function simpleCommentView(inputNodes) {
  const nodesHM = new Map();
  const rootNodes = [];
  for (let i = 0; i < inputNodes.length; i++) {
    const node = inputNodes[i];
    
    if (node[1] === null) {
      rootNodes.push(node[0]);
    } else {
      let nodeList = nodesHM.get(node[1]);
      if (!currentNode) nodeList = [];
      nodeList.push(node[0]);
      
      nodesHM.set(node[1], nodeList);
    }
  }
  
  const result = [];
  for (let i = 0; i < rootNodes.length; i++) {
    const rootNode = rootNodes[0];
    
    const queue = [{level: 0, node: rootNode}];
    while (queue.length > 0) {
      const el = queue.shift();
      const currentNodeList = nodesHM.get(el.node);
      for (let j = 0; j < currentNodeList.length; j++) {
        const currentNode = currentNodeList[j];
        queue.push({level: el.level + 1, node: currentNode});
      }
      
      if (el.level === 0 || el.level % 5 === 0) result.push(el.node);
    }
  }
  
  return result;
}

