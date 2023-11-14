function functionName() {
	alert("functionName");
	 alert(arguments.callee.name);
}
functionName();

function AccioJob() {
	alert("AccioJob");
	 alert(arguments.callee.name);
}
AccioJob();