(function( $ ){
      
    var methods = {
        setResult:function(foundIndex,stringName) {
            str = new Array;
            str[0] = strsubject.substr(0,foundIndex);             
            str[1] = '<strong>'+strsubject.substr(foundIndex,keyword.length)+'</strong>';             
            str[2] = strsubject.substr(foundIndex+keyword.length);
            finalHotelName = str.join('');             
            typeof(strsubject[finalHotelName])=='undefined'?countHotel = 0 : countHotel = strsubject[finalHotelName];
            strsubject[finalHotelName] = countHotel + 1;   
        }
    }
	
	var provinceBorderTitleID = "Provinsi";
	var provinceBorderTitleEN = "Provinces";
    var cityBorderTitleID = "Kota";
	var cityBorderTitleEN = "Cities";
	var areaBorderTitleID = "Area";
	var areaBorderTitleEN = "Areas";
	var registeredBorderTitleID = "Hotel yang Terdaftar";
	var registeredBorderTitleEN = "Registered Hotels";
	var hotelRegisteredMsgID = "hotel terdaftar";
	var hotelRegisteredMsgEN = "hotels registered";
	
	var provinceBorderTitle = "";
	var cityBorderTitle = "";
	var areaBorderTitle = "";
	var registeredBorderTitle = " yang Terdaftar";
	var hotelRegisteredMsg = "";
	
    $.fn.MyAutocomplete = function(options) { 
		
		var bahasa = "";
		if(!(options.locale == "" || options.locale == null || options.locale == undefined))
		{
			if(options.locale == 'in_ID' || options.locale == 'id_ID' )
			{
				bahasa = "id";
			}
			else
			{
				bahasa = "en";
			}
		}
		else
		{
			bahasa = "en";
		}
		
		if(bahasa == "id")
		{
			provinceBorderTitle = provinceBorderTitleID;
			cityBorderTitle = cityBorderTitleID;
			areaBorderTitle = areaBorderTitleID;
			registeredBorderTitle = registeredBorderTitleID;
			hotelRegisteredMsg = hotelRegisteredMsgID;
		}
		else
		{
			provinceBorderTitle = provinceBorderTitleEN;
			cityBorderTitle = cityBorderTitleEN;
			areaBorderTitle = areaBorderTitleEN;
			registeredBorderTitle = registeredBorderTitleEN;
			hotelRegisteredMsg = hotelRegisteredMsgEN;
		}
		
        var element = this; 
        element.attr('autocomplete','off') //(index, value)
        var settings = $.extend( {'hiddenElement':'', 'keyPressed':''}, options); //merge hidden Elemnet ke keypressed
        keyword = $.trim( element.val().toLowerCase() ); //meghilangkan karakter spasi awal/akhr
        settings.hiddenElement.val('');
        switch(settings.keyPressed){
            case 27:
                $('.myautocomplete').remove();
                return;
                break;
            case 40://down arrow pressed
                elemSelected = $('.autoitem.selected',$('.myautocomplete'));
                if($('.myautocomplete').length==0) return 
                if(elemSelected.length==0){
                    $('.autoitem:first',$('.myautocomplete')).toggleClass('selected')
                    element.val($('span.value',$('.autoitem:first',$('.myautocomplete'))).text())
                    settings.hiddenElement.val($('span.value',$('.autoitem:first',$('.myautocomplete'))).attr('data-code'))
                }else{
                    elemSelected.toggleClass('selected');
                    if(elemSelected.next('.autoitem').length == 0){
                        elemSelected.nextUntil('.autoitem').next().toggleClass('selected')
                        element.val($('span.value',elemSelected.nextUntil('.autoitem').next()).text())
                        settings.hiddenElement.val($('span.value',elemSelected.nextUntil('.autoitem').next()).attr('data-code'))
                    }else{                
                        elemSelected.next().toggleClass('selected')
                        element.val($('span.value',elemSelected.next()).text())
                        settings.hiddenElement.val($('span.value',elemSelected.next()).attr('data-code'))
                    }
                }
                return                   
                break
            case 38:
                elemSelected = $('.autoitem.selected',$('.myautocomplete'));
                if(elemSelected.length==0) return
                else{
                    elemSelected.toggleClass('selected');
                    if(elemSelected.prev('.autoitem').length == 0){
                        elemSelected.prevUntil('.autoitem').prev().toggleClass('selected')
                        element.val($('span.value',elemSelected.prevUntil('.autoitem').prev()).text())
                        settings.hiddenElement.val($('span.value',elemSelected.prevUntil('.autoitem').prev()).attr('data-code'))
                    }else{                
                        elemSelected.prev().toggleClass('selected')
                        element.val($('span.value',elemSelected.prev()).text())
                        settings.hiddenElement.val($('span.value',elemSelected.prev()).attr('data-code'))
                    }
                }
                return       
                break
            case 13:
                $('.autoitem.selected',$('.myautocomplete')).trigger('click');
                return     
                break
        }
		
        if(keyword.length<3){
            $('.myautocomplete').remove();
            return;
        }
		
		var drz; 
		drz = buatajax();
		//var url2= "wwww.pegipegi.com/uo/uop/Uow0006.do";
		var url="/uo/uow0006.do";
		drz.onreadystatechange=stateChanged;
		var params = "hotelNameKey="+keyword;
		drz.open("POST",url,true);
		
		//beberapa http header harus kita set kalau menggunakan POST
		drz.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		drz.setRequestHeader("Content-length", params.length);
		drz.setRequestHeader("Connection","close");
		drz.send(params);
				
		function buatajax(){
			if (window.XMLHttpRequest){
				return new XMLHttpRequest();
			}
			if (window.ActiveXObject){
				return new ActiveXObject("Microsoft.XMLHTTP");
			}
			return null;
		}

		function emphasizeWords(inputstring, kwd) {
			var kwd_array = kwd.split(" ");
			var arr_length = kwd_array.length;
			for (var i= 0 ; i < arr_length; i++) 
				if (kwd_array[i].length >= 3)
					inputstring = emphasizeWord(inputstring, kwd_array[i]);
				
			return inputstring;
		}
		
		function emphasizeWord(inputstring, kwd) {
			foundIndex=inputstring.toLowerCase().indexOf(kwd);
			finalstring = inputstring;
			if ( foundIndex >= 0 ) {
				str = new Array;
				str[0] = inputstring.substr(0,foundIndex);
				str[1]='<strong>'+inputstring.substr(foundIndex,kwd.length)+'</strong>';    
				str[2]=inputstring.substr(foundIndex+kwd.length);
				finalstring = str.join(''); 
			} 
			return finalstring;
		}
		
		function stateChanged(){
			var data;
			if (drz.readyState==4 && drz.status==200 || true){
				
				data=drz.responseText;
				
				var jsonResponse = JSON.parse(data);
				if (jsonResponse!=null) {
									
					var provinceList = new Array;
					var provList = new Array;
					var largeAreaList = new Array;
					var smallAreaList = new Array;
					var hotelNames = new Array;
							
					var Jsonhotel=jsonResponse.hotels;
					var Jsonken=jsonResponse.ken;
					var Jsonlrg=jsonResponse.lrg;
					var Jsonsml=jsonResponse.sml;
					
					if (Jsonhotel!=null){
						$.each(Jsonhotel, function(i,prov){						
							hotelNames[this['YAD_NAME']]={'countHotel':Jsonhotel.length,
													'value':"hotelNameKey="+this['YAD_NAME'],
													'string': emphasizeWords(this['YAD_NAME'], keyword)
													};
						});		
					}
					
					if (Jsonken!=null){
						$.each(Jsonken, function(i,prov){
							provList[this['ken_name']]={'countHotel':this['count'],
													'value':this['url'],
													'string': emphasizeWords(this['ken_name'], keyword)
													};
						});		
					}
					
					if (Jsonlrg!=null){
						$.each(Jsonlrg, function(i,prov){
							largeAreaList[this['lrg_name']]={'countHotel':this['count'],
													'value':this['url'],
													'string': emphasizeWords(this['lrg_name'], keyword)
													};
						});		
					}
					
					if (Jsonsml!=null){
						$.each(Jsonsml, function(i,prov){
							smallAreaList[this['sml_name']]={'countHotel':this['count'],
													'value':this['url'],
													'string': emphasizeWords(this['sml_name'], keyword)
													};
						});		
					}
					
					returnDiv = '';      
					provinceItems = '';
					for (var key in provList) {      
						if (key === 'length' || !provList.hasOwnProperty(key)) continue;
						var value = provList[key];
						provinceItems += '<div class="autoitem"><span data-code="'+value.value+'" class="value">'+value.string+'</span><span>'+value.countHotel+' ' + hotelRegisteredMsg + '</span>'+'</div>';
					}
					if(!jQuery.isEmptyObject(provList))
						returnDiv += $('<div class="provinceList"></div>').html('<span class="areatitle">' + provinceBorderTitle + '</span>'+provinceItems).html();


					largeItems  = ''
					for (var key in largeAreaList) {      
						if (key === 'length' || !largeAreaList.hasOwnProperty(key)) continue;
						var value = largeAreaList[key];
						largeItems += '<div class="autoitem"><span data-code="'+value.value+'" class="value">'+value.string+'</span><span>'+value.countHotel+' ' + hotelRegisteredMsg + '</span>'+'</div>';
					}
					if(!jQuery.isEmptyObject(largeAreaList))
						returnDiv += $('<div class="largeList"></div>').html('<span class="areatitle">' + cityBorderTitle + '</span>'+largeItems).html();

					smallItems = ''
					for (var key in smallAreaList) {      
						if (key === 'length' || !smallAreaList.hasOwnProperty(key)) continue;
						var value = smallAreaList[key];
						smallItems += '<div class="autoitem"><span data-code="'+value.value+'" class="value">'+value.string+'</span><span>'+value.countHotel+' ' + hotelRegisteredMsg + '</span>'+'</div>';
					}
					if(!jQuery.isEmptyObject(smallAreaList))
						returnDiv += $('<div class="largeList"></div>').html('<span class="areatitle">' + areaBorderTitle + '</span>'+smallItems).html();

					hotelList = ''; 
					for (var key in hotelNames) {      
						if (key === 'length' || !hotelNames.hasOwnProperty(key)) continue;
						var value = hotelNames[key];
						hotelList += '<div class="autoitem"><span data-code="'+value.value+'" class="value">'+value.string+'</span>'+'</div>';
					}
					if(!jQuery.isEmptyObject(hotelNames))
						returnDiv += $('<div class="largeList"></div>').html('<span class="areatitle">' + registeredBorderTitle + '</span>'+hotelList).html();
					
					
					if(returnDiv.length==0) return
					elementPosition = element.offset();
					autoPosition = {top:elementPosition.top + element.outerHeight(), left:elementPosition.left};
					returnDiv = $('.myautocomplete').length == 0 ? $('<div class="myautocomplete"></div>').append(returnDiv):$('.myautocomplete').html(returnDiv);
					returnDiv.css({'position':'absolute','top':autoPosition.top,'left':autoPosition.left,'z-index':9999})
					if($('.myautocomplete').length==0)
						$('body').append(returnDiv);
						$('.autoitem',$('.myautocomplete')).css('cursor','pointer').click(function(){
						element.val($('span.value',$(this)).text())
						settings.hiddenElement.val($('span.value',$(this)).attr('data-code'))
						$('.myautocomplete').remove();
					}).hover(function(){$(this).toggleClass('selected')});
				  
				  
					te = Math.round((new Date()).getTime())
					return returnDiv;
				}
			}
		}
    }
})
( jQuery );