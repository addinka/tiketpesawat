/**2013/02/05 by Ananti**/
	
	//warning alert for pegipegi datepicker in checkout date
	var warn = new Object();
	warn.en = "The longest stay period you can make in one single reservation is 9 nights";
	warn.id = "Waktu menginap terlama dalam sekali reservasi adalah 9 malam";
	
	//warnign alert for flight datepicker in return date & departure
	var warnret = new Object();
	warnret.en = "Return date is invalid";
	warnret.id = "Tanggal pulang tidak valid";
	var warndep = new Object();
	warndep.en = "Departure date is invalid";
	warndep.id = "Tanggal pergi tidak valid";
	
	//datepicker pegipegi
	function initDate(datePickerConfig) {
		//init date default values 
		var stayDay = $("#"+datePickerConfig.idHiddenDayField).val();
		var stayMonth = $("#"+datePickerConfig.idHiddenMonthField).val();
		var stayYear = $("#"+datePickerConfig.idHiddenYearField).val();
		var stayCount = $("#"+datePickerConfig.idHiddenStayCount).val();
		var today = new Date();
		var checkIn = new Date();
		var checkOut = new Date();
		
		//limit datepicker
		/*var limitout = new Date();
		limitout.setDate(limitout.getDate()+1);
		$("#"+datePickerConfig.idCheckInDate).datepicker( "option", "minDate", limitout );*/
		
		//get default checkin & checkout field
		if(stayDay != '' && stayDay != 'null') {
			var chkin = new Date(stayYear,parseFloat(stayMonth)-1,stayDay);
			//$("#"+datePickerConfig.idCheckInDate).val($.datepicker.formatDate('yy-mm-dd', chkin));
			$("#"+datePickerConfig.idCheckInDate).val($.datepicker.formatDate('dd-mm-yy', chkin));
			var chkout = new Date(stayYear,parseFloat(stayMonth)-1,parseFloat(stayDay)+parseFloat(stayCount));
			//$("#"+datePickerConfig.idCheckOutDate).val($.datepicker.formatDate('yy-mm-dd', chkout));
			$("#"+datePickerConfig.idCheckOutDate).val($.datepicker.formatDate('dd-mm-yy', chkout));
		} else {
			checkIn.setDate(today.getDate()+1);
			//$("#"+datePickerConfig.idCheckInDate).val($.datepicker.formatDate('yy-mm-dd', checkIn));
			$("#"+datePickerConfig.idCheckInDate).val($.datepicker.formatDate('dd-mm-yy', checkIn));
			checkOut.setDate(today.getDate()+2);
			//$("#"+datePickerConfig.idCheckOutDate).val($.datepicker.formatDate('yy-mm-dd', checkOut));
			$("#"+datePickerConfig.idCheckOutDate).val($.datepicker.formatDate('dd-mm-yy', checkOut));
			setHidInput(datePickerConfig,checkIn,$("#"+datePickerConfig.idNight).val());
		}
		
		//on close function
		$( "#"+datePickerConfig.idCheckInDate ).datepicker({
			showOtherMonths: true,
			selectOtherMonths: true,
			dateFormat: "dd-mm-yy",
			minDate: "+0D",
			onClose: function(date,inst) {
				var currdate = new Date();
				currdate.setHours(0,0,0,0);
				//var d = $.datepicker.parseDate("yy-mm-dd", date);
				var d = $.datepicker.parseDate("dd-mm-yy", date);
				d.setHours(0,0,0,0);
				//if (d > currdate) {
					var checkout = new Date(d.getFullYear(),d.getMonth(),d.getDate()+parseFloat($("#"+datePickerConfig.idNight).val()));
					//$("#"+datePickerConfig.idCheckOutDate).val($.datepicker.formatDate('yy-mm-dd', checkout));
					$("#"+datePickerConfig.idCheckOutDate).val($.datepicker.formatDate('dd-mm-yy', checkout));
					setHidInput(datePickerConfig,d,$("#"+datePickerConfig.idNight).val());
					$("#"+datePickerConfig.idCheckOutDate).datepicker("option", "minDate", d);
				//}
			}
		});
		$( "#"+datePickerConfig.idCheckOutDate ).datepicker({
			showOtherMonths: true,
			selectOtherMonths: true,
			dateFormat: "dd-mm-yy",
			minDate: "+1D",
			onClose: function(date,inst) {
				var currdate = new Date();
				currdate.setHours(0,0,0,0);
				//var ckOutDate = $.datepicker.parseDate("yy-mm-dd", date);
				var ckOutDate = $.datepicker.parseDate("dd-mm-yy", date);
				ckOutDate.setHours(0,0,0,0);
				var ckInDate = getCheckInDateVal(datePickerConfig); 
				var nightindate = Math.abs((ckOutDate.getTime()-ckInDate.getTime())/(24*60*60*1000));
				//if (ckInDate >= currdate && ckOutDate > currdate) {
					var n = nightindate; 
					if( n <= 9) {
						//arr select adjust
						n = n - 1;
						$("#"+datePickerConfig.idNight).prop('selectedIndex',n);
					} else {
						if (datePickerConfig.lang == 'in_ID') {
							alert(warn.id);
						} else {
							alert(warn.en);
						}
						var vin = getCheckInDateVal(datePickerConfig);
						var vout = vin;
						//set checkout field
						vout.setDate(vin.getDate()+parseFloat($("#"+datePickerConfig.idNight).val()));
						//$( "#"+datePickerConfig.idCheckOutDate ).val($.datepicker.formatDate('yy-mm-dd', vout));
						$( "#"+datePickerConfig.idCheckOutDate ).val($.datepicker.formatDate('dd-mm-yy', vout));
					}
				//} 
				setHidInput(datePickerConfig,ckInDate,$("#"+datePickerConfig.idNight).val());
			}
		});
		
		/**
		 * How to use function passing function parameter
		 * example:
		 * var test = function () {alert('blink');};
		 * datePickerConfig = {
			idHiddenDayField : "dyn_d_txt",
			idHiddenMonthField : "dyn_m_txt",
			idHiddenYearField : "dyn_y_txt",
			idHiddenStayCount : "dyn_staycount_txt",
			lang : "in_ID",
			blinkFunction : test //-> how to add in object 
		};**/
		
		//on change night
		$("#"+datePickerConfig.idNight).change(function() {
			var chkIn = getCheckInDateVal(datePickerConfig);
			setHidInput(datePickerConfig,chkIn,$("#"+datePickerConfig.idNight).val());
			var chkOut = chkIn;
			chkOut.setDate(chkIn.getDate()+parseFloat($("#"+datePickerConfig.idNight).val()));
			//$("#"+datePickerConfig.idCheckOutDate).val($.datepicker.formatDate('yy-mm-dd', chkOut));
			$("#"+datePickerConfig.idCheckOutDate).val($.datepicker.formatDate('dd-mm-yy', chkOut));
			
			//add blinking function
			if (datePickerConfig.blinkFunction != undefined && datePickerConfig.blinkFunction != null) {
				datePickerConfig.blinkFunction();
			}
		});
		
		//add blinking onchange checkin and checkout date
		$( "#"+datePickerConfig.idCheckInDate ).change (function() {
			if (datePickerConfig.blinkFunction != undefined && datePickerConfig.blinkFunction != null) {
				datePickerConfig.blinkFunction();
			}
		});
		
		$( "#"+datePickerConfig.idCheckOutDate ).change (function() {
			if (datePickerConfig.blinkFunction != undefined && datePickerConfig.blinkFunction != null) {
				datePickerConfig.blinkFunction();
			}
		});
		
		
		//button datepicker
		$("#"+datePickerConfig.btnCheckIn).click(function() {
			$('#'+datePickerConfig.idCheckInDate).datepicker('show');
		});
		$("#"+datePickerConfig.btnCheckOut).click(function() {
			$('#'+datePickerConfig.idCheckOutDate).datepicker('show');
		});
	}
	
	//set hidden field for req param
	function setHidInput(datePickerConfig,checkindate,count) {
		$("#"+datePickerConfig.idHiddenDayField).val(checkindate.getDate());
		$("#"+datePickerConfig.idHiddenMonthField).val(checkindate.getMonth()+1);
		$("#"+datePickerConfig.idHiddenYearField).val(checkindate.getFullYear());
		$("#"+datePickerConfig.idHiddenStayCount).val(count);
	}
	
	function getCheckInDateVal(datePickerConfig) {
		var str = $("#"+datePickerConfig.idCheckInDate).val();
		//var res = $.datepicker.parseDate("yy-mm-dd", str);
		var res = $.datepicker.parseDate("dd-mm-yy", str);
		return res;
	}
	
	function getCheckOutDateVal(datePickerConfig) {
		var str = $("#"+idatePickerConfig.idCheckOutDate).val();
		//var res = $.datepicker.parseDate("yy-mm-dd", str);
		var res = $.datepicker.parseDate("dd-mm-yy", str);
		return res;
	}
	
	//init date flight
	function initDateFlight(datePickerConfig) {
		//init date default values 		
		var departureDefault = new Date();
		$("#"+datePickerConfig.idDeparture).val($.datepicker.formatDate('yy-mm-dd', departureDefault));
		var returnDefault = departureDefault;
		returnDefault.setDate(departureDefault.getDate()+1);
		$("#"+datePickerConfig.idReturn).val($.datepicker.formatDate('yy-mm-dd', returnDefault));
		
		//on close function
		$( "#"+datePickerConfig.idDeparture ).datepicker({
			showOtherMonths: true,
			selectOtherMonths: true,
			dateFormat: "yy-mm-dd",
			minDate: "+0D",
			onClose: function(date,inst) {
				var ret = $.datepicker.parseDate("yy-mm-dd", $("#"+datePickerConfig.idReturn).val());
				ret.setHours(0,0,0,0);
				//currdate.setDate(currdate.getDate()-1);
				var d = $.datepicker.parseDate("yy-mm-dd", date);
				d.setHours(0,0,0,0);
				var chk = $("#"+datePickerConfig.idCheck).prop("checked");
				if (chk == true) {
					if (d <= ret) {
						//set into hidden field
						$("#"+datePickerConfig.idHiddenDayFieldD).val(d.getDate());
						$("#"+datePickerConfig.idHiddenMonthFieldD).val(d.getMonth());
						$("#"+datePickerConfig.idHiddenYearFieldD).val(d.getFullYear());
					} else {
						if (datePickerConfig.lang == 'in_ID') {
							alert(warndep.id);
						} else {
							alert(warndep.en);
						}
						$( "#"+datePickerConfig.idDeparture).val($("#"+datePickerConfig.idReturn).val());
					}
				}
			}
		});
		$( "#"+datePickerConfig.idReturn ).datepicker({
			showOtherMonths: true,
			selectOtherMonths: true,
			dateFormat: "yy-mm-dd",
			minDate: "+0D",
			onClose: function(date,inst) {
				var currdate = new Date();
				currdate.setDate(currdate.getDate()-1);
				currdate.setHours(0,0,0,0);
				var d = $.datepicker.parseDate("yy-mm-dd", date);
				d.setHours(0,0,0,0);
				var depart = $.datepicker.parseDate("yy-mm-dd", $("#"+datePickerConfig.idDeparture).val());
				depart.setHours(0,0,0,0);
				if (d >= depart) {
					//set into hidden field
					$("#"+datePickerConfig.idHiddenDayFieldR).val(d.getDate());
					$("#"+datePickerConfig.idHiddenMonthFieldR).val(d.getMonth());
					$("#"+datePickerConfig.idHiddenYearFieldR).val(d.getFullYear());
				} else {
					if (datePickerConfig.lang == 'in_ID') {
						alert(warnret.id);
					} else {
						alert(warnret.en);
					}
					$( "#"+datePickerConfig.idReturn).val($("#"+datePickerConfig.idDeparture).val());
				}
			}
		});
		
		//button datepicker
		$("#"+datePickerConfig.btnDeparture).click(function() {
			$('#'+datePickerConfig.idDeparture).datepicker('show');
		});
		$("#"+datePickerConfig.btnReturn).click(function() {
			$('#'+datePickerConfig.idReturn).datepicker('show');
		});
	}