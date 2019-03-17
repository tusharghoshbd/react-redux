
let initialState={
    count:100
}

const rootReducer = (state=initialState, actions)=>{

    if(actions.type === 'PLUS'){
        return {
            count :state.count + 1
        }
    }
    else if(actions.type === 'MINUS'){
        return {
            count :state.count - 1
        }
    }

    return state;
}

export default rootReducer;
