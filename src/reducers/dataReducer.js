
const init = {
  open : false,
  menu : false,
  user : {
    info : {
      name: "정건호",
      phone: "",
      email: "jkh2801@naver.com",
      git: "https://github.com/jkh2801",
      website: "https://jkh2801.github.io/my-portfolio/"
    },
    project: [
      
    ]
  }
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