
const init = {
  open : false,
  menu : false
}

function dataReducer(state = init, action){
  switch(action.type) {
    case "OPEN" : 
       return Object.assign(state, {open : true})
    case "MENU" : 
       return Object.assign(state, {menu : action.menu})
    default : return state
  }
}
export default dataReducer