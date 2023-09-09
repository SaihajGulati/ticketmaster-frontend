function log_in()
{
	localStorage.clear();
	localStorage.setItem('balance', 3000);
	window.location.replace("homeLoggedIn.html")
	return false;
}