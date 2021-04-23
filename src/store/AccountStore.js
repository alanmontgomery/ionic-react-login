import { Store } from "pullstate";

const AccountStore = new Store({
    
    logged_in: false,
    coffee_ids: []
});

export default AccountStore;

// export const addToCart = (coffeeID) => {

//     CartStore.update(s => { s.coffee_ids = [ ...s.coffee_ids, `${ parseInt(coffeeID) }` ]; });
// }

// export const removeFromCart = coffeeIndex => {

//     CartStore.update(s => { s.coffee_ids.splice(coffeeIndex, 1) });
// }