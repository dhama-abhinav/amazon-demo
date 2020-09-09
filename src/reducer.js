export const initialState = {
  user: null,
  basket: [],
};
export const actionTypes = {
  //define all actions here
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  SET_USER : 'SET_USER'
};

//using selector in reducer
export const getBasketTotal = (basket)=> basket?.reduce( (amount ,item) => item.price + amount ,0)


const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {

    case  actionTypes.SET_USER :
      return {
        ...state,
        user : action.user
      }

    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case actionTypes.REMOVE_FROM_BASKET:
        //here we cloned the basket
      let newBasket = [...state.basket];
      //checking if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product ( id : ${action.id})`);
      }
      return {
        ...state,
        basket: newBasket,
      };
      
    default:
      return state;
  }
};
export default reducer;
