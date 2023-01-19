/* //var i = 0;

function timedCount() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();  */

var limit = 1000;
var fibo = 0;

for(i=1; i <= limit; i++){
    fibo + i;
    postMessage(fibo);
}

