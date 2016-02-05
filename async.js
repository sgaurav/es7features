/**
 * Stage: Proposal
 * Full proposal: https://github.com/tc39/ecmascript-asyncawait
 * 
 * Async functions allow you to `await` on a promise.
 * `await` halts function in a non blocking way, waits for resolve and returns a value.
 */

async function fetchDetails(){
  var details = await functionThatReturnsAPromise();
  console.log(details); // response from previously called function
}

