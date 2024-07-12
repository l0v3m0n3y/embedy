# embedy
JavaScript library for embedy.cc
# main
```js
async function main(){
    const {embedy} = require('./embedy');
    const bedy= new embedy();
    let req=await bedy.get_video("id","high")
    console.log(req)
}
main()
```
