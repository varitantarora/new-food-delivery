import { createSlice } from "@reduxjs/toolkit";

//create slice is a function that takes a configuration to create the slice

const cartSlice = createSlice({
  name: "cart",
  //initial state specifies what the slice named cart will contain initially, here we have specified that initially it will be empty
  //initial stae is an object

  initialState: {
    items: [],
  },
  //we write reducer functions corresponding to those actions,  //reducer is again an object
  //actions are like small api to communicate with redux store   //actions->egs:  add an itemm, remove an item, clear the cart etc... 
  reducers: {
    //action gets access to state and our action, and it modifies the state according to the action
    addItem: (state, action) => {
        //mutating the state , we are directly modifying our state
        
      state.items.push(action.payload);
    },

    removeItem : (state, action) =>{
        state.items.pop()
    },

    ClearCart: (state, action) =>{
        state.items.length = 0
    },
  },
});


//cartSLice will return objects such as  actions and reducers 

export const {addItem, removeItem, ClearCart} = cartSlice.actions;

export default cartSlice.reducer;