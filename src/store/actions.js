export default {
  changeSth(context, {payload}) {
    console.log(context);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit({
          type: 'change',
          payload
        })
        resolve(payload)
      }, 2000);
    })
  }
}
