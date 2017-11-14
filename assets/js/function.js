function checkemail(email) {
	if (email.length < 11 || email.indexOf("@")==-1 || email.indexOf(".")==-1 || email.indexOf("!")!=-1 || email.indexOf("..")!=-1 || email.indexOf(".")==0 || email.indexOf(".")==email.length)
		return false;
	else {
		var pos;
		pos = email.indexOf("@");
		var mailbox=email.substring(0,pos);
		var domainname=email.substring(pos+1,email.length);
		var mailboxlast=mailbox.substring(mailbox.length-1,mailbox.length);
		var domainfirst=domainname.substring(0,1);
		var lastdigit=email.substring(email.length-1,email.length);
		var firstdigit=email.substring(0,1)
		if (mailbox.indexOf("-")==-1 && mailbox.indexOf("@")==-1 && domainname.indexOf("_")==-1 && domainname.indexOf("@")==-1 && lastdigit.indexOf(".")==-1 && lastdigit.indexOf("-")==-1 && firstdigit.indexOf(".")==-1 && firstdigit.indexOf("_")==-1 && mailboxlast.indexOf(".")==-1 && mailboxlast.indexOf("_")==-1 && domainfirst.indexOf(".")==-1 && domainfirst.indexOf("-")==-1)
			return true;
		else
			return false;
	}
}