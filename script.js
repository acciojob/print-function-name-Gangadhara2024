function functionName() {
     alert(arguments.callee.name);
}
functionName();

function AccioJob() {
	alert(arguments.callee.name);
}
AccioJob();