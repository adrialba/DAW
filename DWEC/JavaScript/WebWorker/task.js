postMessage("I\'m working befor postMessage(\'ali\').");
onmessage = function (oEvent) {
    postMessage("Hi " + oEvent.data);
};