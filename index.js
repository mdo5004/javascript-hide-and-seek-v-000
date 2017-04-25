//const app = document.getElementById('app')
function getFirstSelector(selector){
    return document.querySelector(selector)
}
function nestedTarget(){
    return getFirstSelector(".target")
}
function deepestChild(){
    var grand_node = document.querySelector("div.grand-node")
    
}
function increaseRankBy(n){

}

function find(array, criteriaFn) {
  
  let current = array
  let next = []
 
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
 
      if (Array.isArray(current)) {
      for (let i = 0, l = current.length; i < l; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}