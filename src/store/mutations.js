export default {
  add(state, {payload}) {
    const {val} = payload;
    state.counter += val
  },
  change(state, {payload}) {
    state.changeObj = payload;
  }
}
