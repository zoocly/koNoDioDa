export default {
  addMore: (state, getter) => (num = 1) => {
    state.counter += num;
  }
  // addMore(state, getter){
  //   return (num = 1)=>{
  //     state.counter += num;
  //   }
  // }
}
