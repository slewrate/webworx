var panel, flag;

function mousemoveReponse()
{ flag = false; panel.innerHTML += "Mouse is Over";}

function mouseoutResponse()
{ flag = true; }

function mousemoveReponse(e)
{
	var x,y;

	if( window.event ) { x = event.x; y = event.y; }
	else if( e ) { x = e.pageX; y = e.pageY; }

	if(flag)
	{ panel.innerHTML = "Mouse is at X: " + x + ", Y:" + y; }
}

function init()
{
	panel = document.getElementById("panel");
	flag = true;
	document.onmousemove = mousemoveReponse;
	panel.onmouseover = mouseoverResponse;
	panel.onmouseout = mouseoutResponse;
}
document.addEventListener("DOMContentLoaded", init, false);