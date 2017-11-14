var settings = {};
settings.basePath = null;

if (!settings.basePath) {
	(function (name) {
		var scripts = document.getElementsByTagName('script');

		for (var i = scripts.length - 1; i >= 0; --i) {
			var src = scripts[i].src;
			var l = src.length;
			var length = name.length;
			if (src.substr(l - length) == name) {
			// set a global propery here
			settings.basePath = src.substr(0, l - length);

			}
		}
	})('main.js');
}

var g_domainName = settings.basePath.replace("/js", "");
//alert(g_domainName);
var imgloader = '<p align="center"><img src="' + g_domainName + 'i/loader.gif"  width="16" height="11"/></p>';
var imgloaderbig = '<p style="padding-top: 20px; font-size: 13px;" align="center"><b>Harap Menunggu ...</b> </p><p align="center"><img src="' + g_domainName + 'i/loader.gif" height="11" width="16"></p><p style="font-size:13px;" align="center"><b>Saat ini server kami sedang melakukan pencarian data.</b></p><p align="center"><img src="' + g_domainName + 'i/loaderpage.gif" height="169" width="579"></p>';

function openManageBooking() {
	$("#manage").slideUp();	
	$("#manage-join").slideUp();
	$("#manage-login").slideUp();
	$("#manage-booking").slideToggle();
}

function checkBooking() {
    if(document.formMngBooking.email.value=="") {
        alert("Isi Email Anda!");
        document.formMngBooking.email.focus();
        return false;
    }
    if(document.formMngBooking.bookingno.value=="") {
        alert("Isi Booking No Anda!");
        document.formMngBooking.bookingno.focus();
        return false;
    }
    return true;
}

function openManageJoin() {
	$("#manage").slideUp();	
	$("#manage-booking").slideUp();
	$("#manage-login").slideUp();
	$("#manage-join").slideToggle();
}

function checkJoin() {
    if(document.formJoin.fname.value=="") {
        alert("Isi First Name Anda!");
        document.formJoin.fname.focus();
        return false;
    }
    if(document.formJoin.email.value=="") {
        alert("Isi Email Anda!");
        document.formJoin.email.focus();
        return false;
    }
    return true;
}

function checkLogin() {
	if(document.formLogin.email.value=="") {
        alert("Isi Email Anda!");
        document.formLogin.email.focus();
        return false;
    }
    if(document.formLogin.password.value=="") {
        alert("Isi Password Anda!");
        document.formLogin.password.focus();
        return false;
    }
    return true;
}

function checkLogin2() {
	if(document.frmlogin2.email.value=="") {
        alert("Isi Email Anda!");
        document.frmlogin2.email.focus();
        return false;
    }
    if(document.frmlogin2.password.value=="") {
        alert("Isi Password Anda!");
        document.frmlogin2.password.focus();
        return false;
    }
    return true;
}


function checkSubscribe() {
	if(document.formSubscribe.txtEmailSubscribe.value=="" || document.formSubscribe.txtEmailSubscribe.value=="enter your email") {
        alert("Isi Email Anda!");
        document.formSubscribe.txtEmailSubscribe.focus();
        return false;
    }
    return true;
}

function openManageLogin() {
	$("#manage").slideUp();	
	$("#manage-booking").slideUp();
	$("#manage-join").slideUp();
	$("#manage-login").slideToggle();
}

function setCurrency(currencyID) {		
	window.location.href = g_domainName + "setCurrency.asp?CurrencyID=" + currencyID + "&http_referrer=" + escape(window.location.href);
}

function reltime(time_value) {
	var values = time_value.split(" ");
	time_value = values[2] + " " + values[1] + ", " + values[3] + " " + values[4];
	var parsed_date = Date.parse(time_value);
	var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
	var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
	delta = delta + (relative_to.getTimezoneOffset() * 60);

	if (delta < 60) {
		return 'less than a minute ago';
	} else if(delta < 120) {
		return 'about a minute ago';
	} else if(delta < (60*60)) {
		return (parseInt(delta / 60)).toString() + ' minutes ago';
	} else if(delta < (120*60)) {
		return 'about an hour ago';
	} else if(delta < (24*60*60)) {
		return 'about ' + (parseInt(delta / 3600)).toString() + ' hours ago';
	} else if(delta < (48*60*60)) {
		return '1 day ago';
	} else {
		return (parseInt(delta / 86400)).toString() + ' days ago';
	}
}

function toggleDate(){ 
	if (!$('#formHotelSearch #txtCheckIn').is(':disabled')) {		
		$('#formHotelSearch #txtCheckIn').prop('disabled', true).val('');
		$('#formHotelSearch #txtCheckIn').next(".button-datepicker").unbind("click");
		
		$('#formHotelSearch #txtCheckOut').prop('disabled', true).val('');
		$('#formHotelSearch #txtCheckOut').next(".button-datepicker").unbind("click");
	} else {
		$('#formHotelSearch #txtCheckIn').prop('disabled', false);		
		$('#formHotelSearch #txtCheckIn').next(".button-datepicker").bind('click', function() {
			$(this).prev("input[type='text']").datepicker("show");		
		});
		
		$('#formHotelSearch #txtCheckOut').prop('disabled', false);
		$('#formHotelSearch #txtCheckOut').next(".button-datepicker").bind('click', function() {
			$(this).prev("input[type='text']").datepicker("show");		
		});
	}
}
	
function setFlightOption(val) {
	$(".form-flight").hide();
	if (val == "1") {		
		$("#form-flight-domestik").show();
	} else {
		$("#form-flight-luar-negeri").show();
	}
}

function loadZonasearch(id, oldvalue) {			
	$('.POISearch').html("");
	$('.CitySearch').html(imgloader);
	$('.CitySearch').load(g_domainName + "ajax/zonalistoption.asp?region="+id+"&zona="+oldvalue);
}

function loadPOIsearch(id, oldvalue) {	
	$('.POISearch').html(imgloader);
	$('.POISearch').load(g_domainName + "ajax/poilistoption.asp?zona="+id+"&poi="+oldvalue);
}

function loadCountrysearch(id, oldvalue) {	
	$('#divCountry').html(imgloader);
	$('#divCity').html('<select name="city" id="city" class="citysearch"><option value="">Lihat Semua</option></select>');
	$('#divCountry').load(g_domainName + "ajax/countrylistoption.asp?group="+id+"&country="+oldvalue);
}

function loadCitysearch(id, oldvalue) {	
	$('#divCity').html(imgloader);
	$('#divCity').load(g_domainName + "ajax/citylistoption.asp?country="+id+"&city="+oldvalue);
}

function validsearchtour() {	
	if ($('#formTourSearch #groupid').val() == '') {		
		alert('Silahkan pilih region tujuan Anda');
		$('#formTourSearch #groupid').focus();
		return false;
	}
	if ($('#formTourSearch #countryid').val() == '' && $('#formTourSearch #groupid').val() != '1') {		
		alert('Silahkan pilih negara tujuan Anda');
		$('#formTourSearch #countryid').focus();
		return false;
	}
	return true;
}

function searchTour(thisForm) {	
	if ($('#' + thisForm.id + ' #cmbRegion').val()=='') {
		alert('Silahkan pilih region tujuan Anda'); 
		return false;
	} else {
		if ($('#' + thisForm.id + ' #cmbZona').val()=='') {
			alert('Silahkan pilih zona tujuan Anda'); 
			return false;
		}
	}
	
	return true;
}

function selectCountry() {	
	$("#keyword").autocomplete("option", "source", g_domainName + "ajax/queryhotel.asp?id=" + $("#formHotelSearch #countryid").val());
}

function searchRoom() {
	if ($('#formHotelSearch #countryid').val() == '') {		
		alert('Silahkan pilih negara tujuan Anda');
		$('#formHotelSearch #countryid').focus();
		return false;
	}	
		
	if (!$('#formHotelSearch #nodate').is(':checked')) {
		if ($('#formHotelSearch #txtCheckIn').val() == '') {
			alert('Silahkan pilih tanggal check-in');
			$('#formHotelSearch #txtCheckIn').focus();
			return false;
		}
		
		if ($('#formHotelSearch #txtCheckOut').val() == '') {
			alert('Silahkan pilih tanggal check-out');
			$('#formHotelSearch #txtCheckOut').focus();
			return false;
		}
	}
	
	return true;
}

function searchFlight() {
	if ($('#formFlightSearch #txtDepartPt').val() == 0) {
		alert('Silahkan pilih keberangkatan Anda');
		$('#formFlightSearch #txtDepartPt').focus()
		return false;
	}
	
	if ($('#formFlightSearch #txtDestPt').val() == 0) {
		alert('Silahkan pilih tujuan Anda');
		$('#formFlightSearch #txtDestPt').focus()
		return false;
	}
	
	if ($('#formFlightSearch #txtDepartPt').val() == $('#formFlightSearch #txtDestPt').val()) {
		alert('Silahkan pilih tujuan Anda');
		$('#formFlightSearch #txtDestPt').focus()
		return false;
	}
	if (($('#cmbInfant').val() > 0) && ($('#cmbAdult').val() < $('#cmbInfant').val())) {
		alert('Jumlah infant tidak bisa melebih jumlah adult');
		$('#divInfant').focus()
		return false;
	}
	return true;
}

function datediff(date1,date2) {
	var one_day=1000*60*60*24
	var date1=date1.split('/');
	var date2=date2.split('/');
	var date1=new Date(date1[2], date1[0]-1, date1[1])
	var date2=new Date(date2[2], date2[0]-1, date2[1])
	//Calculate difference btw the two dates, and convert to days
	datdiff = (Math.ceil((date2.getTime()-date1.getTime())/(one_day)))
	return datdiff;
}

$(document).ready(function(){
	//BASIC SETTING
		//SET ALL TO DEFAULT		
	$('#formHotelSearch #nodate').prop('checked', false);	
		
		//SETTING UNTUK ICON DATEPICKER
	$(".button-datepicker").bind('click', function() {
		$(this).prev("input[type='text']").datepicker("show");		
	});
	
		//SETTING UNTUK AUTO COMPLETE HOTEL
	$("#keyword").autocomplete({
		minLength:3,
		delay:1,		
		select: function(event,ui)
		{
			$("#basedon").val(ui.item.basedon);
			$("#rowid").val(ui.item.id);
			$("#keyword").val(ui.item.label);
			return false;
		}
	})
	.data("autocomplete")._renderItem = function( ul, item ) {
		var re = new RegExp($("#keyword").val().trim(), "i");
		return $( "<li></li>" )
			.data( "item.autocomplete", item )
			.append( "<a>" + item.label.replace(item.label.match(re) ,"<b>"+ item.label.match(re) + "</b>") + "</a>" )
			.appendTo( ul );
	};
	
	//TRAILING
	$(".trail").click(function(){
		$(".submenu").hide();
		$(".trail").attr('tag', '');
		$(".arrow").removeClass('arrowhover');
		var pid=$(this).attr('id');
		var X=$(this).attr('tag');
		if(X==1){
			$("#"+pid+"submenu").hide();
			$(this).attr('tag', '0');	
			$("#"+pid+"arrow").removeClass('arrowhover');
		}
		else{	
			$("#"+pid+"submenu").show();
			$(this).attr('tag', '1');
			$("#"+pid+"arrow").addClass('arrowhover');	
		}
		
	});
	
	//Mouseup textarea false
	$(".submenu").mouseup(function(){
		return false
	});
	$(".trail").mouseup(function(){
		return false
	});	
	
	//Textarea without editing.
	$(document).mouseup(function(){
		$(".submenu").hide();
		$(".trail").attr('tag', '');
		$(".arrow").removeClass('arrowhover');
	});
	
	//HEADER	
	var sticky_navigation_offset_top = $('#nav').offset().top;		
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); 
		if (scroll_top > sticky_navigation_offset_top) { 
			$('#nav').css({ 'position': 'fixed', 'top':0, 'width':'100%' });
		} else {
			$('#nav').css({ 'position': 'relative', 'width':'100%' }); 
		}   
	};		
	sticky_navigation();		
	$(window).scroll(function() {
		 sticky_navigation();
	});
	//
	
	//FLIGHT
	$(".button-datepicker").bind('click', function() {
		$(this).prev("input[type='text']").datepicker("show");		
	});	
	
	var currentTime = new Date();
	currentTime.setDate(currentTime.getDate()+1);
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();	
	
	var dates1 = $( "#txtBerangkat, #txtPulang" ).datepicker({
		changeMonth: true,
		numberOfMonths: 2,
		showOtherMonths: true,
		selectOtherMonths: true,
		minDate: month + "/" + day + "/" + year,
		maxDate: month + "/" + day + "/" + (year+1),
		onSelect: function( selectedDate ) {
			var option = this.id == "txtBerangkat" ? "minDate" : "maxDate",
				instance = $( this ).data( "datepicker" );
			date = $.datepicker.parseDate(
					instance.settings.dateFormat ||
					$.datepicker._defaults.dateFormat,
					selectedDate, instance.settings );
			date = this.id == "txtBerangkat" ? date.setDate(date.getDate()) : date.setDate(date.getDate()-1);
			dates1.not( this ).datepicker( "option", option, new Date(date) );
			if(dates1.not(this).datepicker("getDate")==null) dates1.not(this).datepicker("setDate",new Date(date))
		}
	});
	$( "#txtBerangkat, #txtPulang" ).val(month + "/" + day + "/" + year);
	
	//HOTEL
	var dates3 = $( "#txtCheckIn, #txtCheckOut" ).datepicker({
		changeMonth: true,
		numberOfMonths: 2,
		showOtherMonths: true,
		selectOtherMonths: true,
		minDate: month + "/" + day + "/" + year,
		onSelect: function( selectedDate ) {
			var option = this.id == "txtCheckIn" ? "minDate" : "maxDate",
				instance = $( this ).data( "datepicker" );
			date = $.datepicker.parseDate(
					instance.settings.dateFormat ||
					$.datepicker._defaults.dateFormat,
					selectedDate, instance.settings );
			date = this.id == "txtCheckIn" ? date.setDate(date.getDate()+1) : date.setDate(date.getDate()-1);
			dates3.not( this ).datepicker( "option", option, new Date(date) );
			if(dates3.not(this).datepicker("getDate")==null) dates3.not(this).datepicker("setDate",new Date(date))
		}
	});	
	
	//car rental
	var dates4 = $( "#txtPick, #txtReturn" ).datepicker({
		changeMonth: true,
		numberOfMonths: 2,
		showOtherMonths: true,
		selectOtherMonths: true,
		minDate: month + "/" + (day+2) + "/" + year,
		maxDate: month + "/" + day + "/" + (year+1),
		onSelect: function( selectedDate ) {
			var option = this.id == "txtPick" ? "minDate" : "maxDate",
				instance = $( this ).data( "datepicker" );
			date = $.datepicker.parseDate(
					instance.settings.dateFormat ||
					$.datepicker._defaults.dateFormat,
					selectedDate, instance.settings );
			date = this.id == "txtPick" ? date.setDate(date.getDate()+1) : date.setDate(date.getDate()-1);
			dates4.not( this ).datepicker( "option", option, new Date(date) );
			if(dates4.not(this).datepicker("getDate")==null) dates4.not(this).datepicker("setDate",new Date(date))
		}
	});
	$( "#txtPick" ).val(month + "/" + (day+2) + "/" + year);
	$( "#txtReturn" ).val(month + "/" + (day+3) + "/" + year);
	
	selectCountry();	
	
	//Untuk image loader di kiri bawah
	$("input[type='submit'], button, .refine input").click(function(){
		if ($(this).attr('href').indexOf('javascript') == -1 && $(this).attr('href').indexOf('.jpg') == -1 && $(this).attr('href').indexOf('.gif')  == -1 && $(this).attr('href').indexOf('.png') == -1 && $(this).attr('target').indexOf('_blank') == -1) {			
			$('.load').show();
		}
	});
	$(window).load(function() {
        $('.load').hide();
    });	
});
	
	
function checktags(chkstr) {
		if (chkstr.indexOf("i>")==-1 && chkstr.indexOf("b>")==-1 && chkstr.indexOf("p>")==-1 && chkstr.indexOf("h1>")==-1 && chkstr.indexOf("h2>")==-1 && chkstr.indexOf("h3>")==-1 && chkstr.indexOf("h4>")==-1 && chkstr.indexOf("h5>")==-1 && chkstr.indexOf("h6>")==-1 && chkstr.indexOf("body>")==-1 && chkstr.indexOf("html>")==-1 && chkstr.indexOf("br>")==-1 && chkstr.indexOf("hr>")==-1 && chkstr.indexOf("font>")==-1 && chkstr.indexOf("'")==-1 && chkstr.indexOf("script>")==-1 && chkstr.indexOf("-->>")==-1 && chkstr.indexOf("<\!--")==-1 && chkstr.indexOf("form>")==-1 && chkstr.indexOf("div>")==-1 && chkstr.indexOf("u>")==-1 && chkstr.indexOf("ol>")==-1 && chkstr.indexOf("ul>")==-1 && chkstr.indexOf("select>")==-1 && chkstr.indexOf("<input")==-1 && chkstr.indexOf("location.href")==-1 && chkstr.indexOf("response.redirect")==-1 && chkstr.indexOf("<%")==-1 && chkstr.indexOf("%>")==-1)
		{
			return true;
		}
		else
		{
			return false;
		}

}

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
		if (mailbox.indexOf("@")==-1 && domainname.indexOf("_")==-1 && domainname.indexOf("@")==-1 && lastdigit.indexOf(".")==-1 && lastdigit.indexOf("-")==-1 && firstdigit.indexOf(".")==-1 && firstdigit.indexOf("_")==-1 && mailboxlast.indexOf(".")==-1 && mailboxlast.indexOf("_")==-1 && domainfirst.indexOf(".")==-1 && domainfirst.indexOf("-")==-1)
			return true;
		else
			return false;
    }
}

function checkcapcha(value){
		var hash = 5381;
		for (var i = 0; i < value.length; i++) {
			hash = ((hash << 5)+hash) + value.charCodeAt(i);
		}
		return hash;
}

function opentab(obj, id) {
	var homeloc = $('#nav-home').offset().left;
	$('#nav ul li a').removeClass('selected'); 
	$('.nav-search').hide(); 
	$('#nav-'+id+'-search').show(); 
	$('#bg-search').show(); 
	$(obj).addClass('selected');
	if ($(obj).parent().index() == 0) 
		space = 10;
	else
		space = 20;	
	$('#bg-search-arrow').css({'left':$(obj).offset().left-homeloc+space});	
	$('#bg-search-arrow').show();
}

function closetab() {
	$('.nav-search').hide();
	$('#nav ul li a').removeClass('selected'); 
	$('#bg-search').hide();
	$('#bg-search-arrow').hide();
}
$(function() {
	$(".fPort").combobox();
	$(".cCity").combobox();
});
