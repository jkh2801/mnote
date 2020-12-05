
const init = {
  open : false
}

function dataReducer(state = init, action){
  switch(action.type) {
    case "OPEN" : 
       return Object.assign(state, {open : true})
    default : return state
  }
}
export default dataReducer