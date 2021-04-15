# memo

## promiseの書式

```JS:promise
new Promise(
    (resolve,reject) => {
        resolve("any")
    }
)
```

## async function の書式(同期的に使用するための)

```JS:async function
async function functionName(){
    const waiter=await asyncFunc();
}
```

JSは基本、非同期を許容する動作をする。
