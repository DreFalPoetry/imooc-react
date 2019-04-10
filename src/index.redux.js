const ADD = 'jia'
const RE = 'jian'

//reducer
export function counter(state=0,action){
  console.log(state)
  switch(action.type){
    case 'jia':
      return state + 1
    case 'jian':
      return state - 1
    default:
      return 10
  }
}

//action creactor
export function addGun(){
  return {type:ADD}
}

export function removeGun(){
  return {type:RE}
}

export function addGunAsync(){
  return dispatch=>{
    setTimeout(()=>{
      dispatch(addGun())
    },2000)
  }
}