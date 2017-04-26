//const app = document.getElementById('app')
function getFirstSelector(selector){
    return document.querySelector(selector)
}
function nestedTarget(){
    return getFirstSelector(".target")
}
function deepestChild(){
    var grand_node = document.querySelector("div#grand-node")
    
    let current = grand_node
    let next = []

    while (current) {
            
        
        if (current.children.length) {
            for (let i = 0, l = current.children.length; i < l; i++) {
                next.push(current.children[i])
            }
        } else {
            return current
        }
//           debugger 
        current = next.shift()
    }
    
}
function increaseRankBy(n){
    var ranks = document.querySelectorAll(".ranked-list li")
    for (var i = 0; i < ranks.length; i++){
        ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
    }
}
