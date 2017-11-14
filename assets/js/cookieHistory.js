/* 2013/01/30 by Ananti*/
	var name,hotelUrl,smlName,kenName,imgUrl;
	
	//pic url
	function setImgUrl(url) {
		imgUrl = url;
	}
	
	//set data cookie
	function setDataCookie(idname,idhotelUrl,idsmlName,idkenName) {
		name = document.getElementById(idname).value;
		hotelUrl = document.getElementById(idhotelUrl).href;
		picUrl = imgUrl;
		smlName = document.getElementById(idsmlName).value;
		kenName = document.getElementById(idkenName).value;
		//alert('name:'+name+', hotelUrl:'+hotelUrl+', picUrl:'+picUrl+', smlName:'+smlName+', kenName:'+kenName);
	}
	
	function createCookie(idname,idhotelUrl,idsmlName,idkenName) {
		var obj = new Object();
		var arr = new Array();
		var objWarp = new Object();
		
		//set current update cookie
		setDataCookie(idname,idhotelUrl,idsmlName,idkenName);
		
		//add latest history at first index
		if (name != undefined && name != null && name != '') {
			obj.name = name;
			obj.hotelUrl = hotelUrl;
			obj.picUrl = picUrl;
			obj.smlName = smlName;
			obj.kenName = kenName;
			arr.push(obj);
	
			//get last added cookies
			var objWarpCookie = getCookie();
			if (null != objWarpCookie && objWarpCookie.length > 0) {
				for (var i = 0; i < objWarpCookie.length; i++) {
					if (obj.name != objWarpCookie[i].name) {
						var o = new Object();
						o.name = objWarpCookie[i].name;
						o.hotelUrl = objWarpCookie[i].hotelUrl;
						o.picUrl = objWarpCookie[i].picUrl;
						o.smlName = objWarpCookie[i].smlName;
						o.kenName = objWarpCookie[i].kenName;
						arr.push(o);
					}
				}
			}
			
			objWarp.pegi_hotel_history = arr;
	
			//JSON to String
			var val = JSON.stringify(objWarp);
	
			//cookie expired date (1 day)
			var date = new Date();
			date.setTime(date.getTime()+(1*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
			
			//set cookie
			document.cookie = "pegi_hotel_history"+"="+val+expires+";domain=.pegipegi.com;path=/";
		}
	}

	//get defined cookie
	function getCookie() {
		var arrCookie = document.cookie.split(';');
		var x,res;
		for (var i = 0; i < arrCookie.length; i++) {
			x = arrCookie[i].substr(0,arrCookie[i].indexOf("=")); 
			x = x.replace(/^\s+|\s+$/g,"");	
			if (x == 'pegi_hotel_history') {
				res = arrCookie[i].substr(arrCookie[i].indexOf("=") + 1);
			}
		}
		if (res != null && res != undefined && res != "") {
			var objWarp = JSON.parse(res);
			return objWarp.pegi_hotel_history;
		} else {
			return null;
		}
	}
	
	//removing cookie
	function removeCookie() {
		//set expires = -1
		var date = new Date();
		date.setTime(date.getTime()+((-1)*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
		
		document.cookie = "pegi_hotel_history"+"="+""+expires+";domain=.pegipegi.com;path=/";
	}
	
	function clearCookieInPage(id) {
		removeCookie();
		var par = document.getElementById(id); 
		par.innerHTML = '\<div class=\"pegi_info\"\>Tidak Ada Riwayat Pencarian Hotel\</div\>';
	}
	
	/**
	 * Cookie for search history
	 * format date (yyyy-mm-dd)**/
	var keyword,checkindate,checkoutdate,nights,rooms,url_id;
	
	function setCookieSearch(idcheckindate,idcheckoutdate,idnights,idrooms) {
		url_id = document.getElementById('url_id').value;		
		keyword = document.getElementById('hotelNameKey').value;		
		checkindate = document.getElementById(idcheckindate).value;
		checkoutdate = document.getElementById(idcheckoutdate).value;
		nights = document.getElementById(idnights).value;
		rooms = document.getElementById(idrooms).value;		
	}
	
	function createCookieSearch(idcheckindate,idcheckoutdate,idnights,idrooms) {
		var obj = new Object();
		var objWarp = new Object();
		setCookieSearch(idcheckindate,idcheckoutdate,idnights,idrooms);
		
		obj.keyword = keyword;
		obj.url_id = url_id;
		obj.checkin = checkindate;
		obj.checkout = checkoutdate;
		obj.night = nights;
		obj.room = rooms;
		
		objWarp.pegi_search_history = obj;
		
		//JSON to String
		var val = JSON.stringify(objWarp);
		
		//cookie expired date (7 day)
		var date = new Date();
		date.setTime(date.getTime()+(7*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
		
		//set cookie
		document.cookie = "pegi_search_history"+"="+val+expires+";domain=.pegipegi.com;path=/";	
	}
	
	//get defined cookie search
	function getCookieSearch() {
		var arrCookie = document.cookie.split(';');
		var x,res;
		for (var i = 0; i < arrCookie.length; i++) {
			x = arrCookie[i].substr(0,arrCookie[i].indexOf("=")); 
			x = x.replace(/^\s+|\s+$/g,"");	
			if (x == 'pegi_search_history') {
				res = arrCookie[i].substr(arrCookie[i].indexOf("=") + 1);
			}
		}
		if (res != null && res != undefined && res != "") {
			var objWarp = JSON.parse(res);
			return objWarp.pegi_search_history;
		} else {
			return null;
		}
	}
	
	