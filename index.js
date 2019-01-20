const constants = {
    CHANGE_SWEATER:`CHANGE_SWEATER`,
    CHANGE_COLOR:`CHANGE_COLOR`,
    CHANGE_DOG:`CHANGE_DOG`
};

const mutations = {
    changeSweater(sweater){
        return {
            type: constants.CHANGE_SWEATER,
            sweater
        }
    },
    changeColor(color){
        return {
            type: constants.CHANGE_COLOR,
            color
        }
    },
    changeDog(dog){
        return {
            type: constants.CHANGE_DOG,
            dog
        }
    }
};
const defaultState = {
    dog: `PUG`,
    sweater: `TURTLENECK`,
    color: `CHARTREUSE`
};

const reducer = (state = defaultState, action)=>{
    switch (action.type) {
        case constants.CHANGE_SWEATER:
            return {...state, sweater: action.sweater};
        case constants.CHANGE_COLOR:
            return {...state, color: action.color}
        case constants.CHANGE_DOG:
            return {...state, dog: action.dog}

    }
    return state;
};

const store = Redux.createStore(reducer);

const render = ({dog, sweater, color})=>{
    document.getElementById(`app`).innerHTML = `<img width="400" src=assets/${dog}-${color}-${sweater}.jpg>`;
};
store.subscribe(()=>{
    render(store.getState());
});

render(store.getState());

