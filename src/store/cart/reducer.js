import * as types from './actionTypes';

const initialStates = [];

const cartReducer = (state = initialStates, action) => {
  const removeProduct = () => {
    const index = state.findIndex(item => item.itemNo === action.payload);
    if (index !== 0) {
      return [...state.slice(0, index), ...state.slice(index + 1)];
    } else {
      if (state.length === 1) {
        return [];
      } else {
        return [...state.slice(1)];
      }
    }
  };

  switch (action.type) {
    case types.ADD_ITEM_TO_CART:
      if (!findStateItem(action.payload.itemNo)) {
        return [...state, {
          imageUrls: action.payload.imageUrls[0],
          name: action.payload.name,
          color: action.payload.color,
          sizes: action.payload.sizes,
          currentPrice: action.payload.currentPrice,
          quantity: action.payload.quantity,
          userQuantity: 1,
          itemNo: action.payload.itemNo
        }];
      } else {
        const actual = findStateItem(action.payload.itemNo);
        if (actual.quantity > actual.userQuantity) {
          actual.userQuantity++;
          return [...state];
        } else {
          return [...state];
        }
      }

    case types.INCREASE_QUANTITY: {
      const actual = findStateItem(action.payload);
      if (actual) {
        if (actual.quantity > actual.userQuantity) {
          actual.userQuantity++;
          return [...state];
        } else {
          return [...state];
        }
      } else {
        return [...state];
      }
    }
    case types.DECREASE_QUANTITY: {
      const item = findStateItem(action.payload);
      if (item.userQuantity > 1) {
        item.userQuantity--;
        return [...state];
      } else {
        return removeProduct();
      }
    }
    case types.LOAD_ITEMS_TO_CART:
      return action.payload;

    case types.REMOVE_ITEM_FROM_CART: {
      return removeProduct();
    }

    default:
      return state;
  }

  function findStateItem (itemNo) {
    return state.find(item => item.itemNo === itemNo);
  }
};

export default cartReducer;