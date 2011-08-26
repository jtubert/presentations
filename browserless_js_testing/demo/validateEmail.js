function validateEmail(email) {	
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return filter.test(email);	
}

print("john.tubert@rga.com: "+validateEmail("john.tubert@rga.com"));
print("john.tubertrga.com: "+validateEmail("john.tubertrga.com"));