var defaultSearchBoxValue = 'Enter City, Area or Hotel Name';
var defaultRoomCrack = '200000';

function doSearchKeywordAutoComplete(url,prid) {
    var hotelName = $('#hotelNameKey').val(); 
    var getParams = $('#url_id').val(); 
	var mandatoryParam;
	var urlBuffer;
    if (getParams == '' || getParams ==null || getParams == undefined)
	{
        
        if(hotelName == '' || hotelName == null || hotelName == undefined || hotelName == defaultSearchBoxValue)
        {
            alert('Please Specify Hotel Name');
			return false;
        }
        else
        {			
			var hotelNameReplace = hotelName.replace(/[^\w\s]/gi, '');
			//alert(hotelNameReplace);
            mandatoryParam = "hotelNameKey=" + encodeURIComponent(hotelNameReplace);
        }
    } 
	else
	{	
		mandatoryParam = getParams;    
    }
	
	var selected_price = $('select#select-price').val();
	var selected_grade = $('select#select-grade').val();
	
	var stayDay = $('#dyn_d_txt').val();
	var stayMonth = $('#dyn_m_txt').val();
	var stayYear = $('#dyn_y_txt').val();
	var stayCount = $('#dyn_staycount_txt').val();
	var roomCount = $('#dyn_roomcount_txt').val();
	var roomCrack = generateRoomCrack(roomCount);
	
	urlBuffer = mandatoryParam;
	urlBuffer += "&stayDay=" + encodeURIComponent(stayDay);
	urlBuffer += "&stayMonth=" + encodeURIComponent(stayMonth);
	urlBuffer += "&stayYear=" + encodeURIComponent(stayYear);
	urlBuffer += "&stayCount=" + encodeURIComponent(stayCount);
	urlBuffer += "&roomCrack=" + encodeURIComponent(roomCrack);
	
	//add advance search url parameter
	switch(selected_price){
		case '2':
			urlBuffer += "&maxPrice=500000";
			break;
		case '3':
			urlBuffer += "&minPrice=500000&maxPrice=1000000";
			break;
		case '4':
			urlBuffer += "&minPrice=1000000";
			break;
	}
	
	switch(selected_grade){
		case '2':
			urlBuffer += "&hotelcs4=1";
		case '3':
			urlBuffer += "&hotelcs3=1";
		case '4':
			urlBuffer += "&hotelcs2ud=1";
	}
	
	//alert(urlBuffer);
    var searchUrl = url + "?" + urlBuffer;
	
	if(prid != null && prid != undefined && prid != "")
	{
		searchUrl = searchUrl + "&prid=" + prid;
	}
	
	window.location = searchUrl;       
}

function generateRoomCrack(roomCount)
{
	var roomCrack = "";
    for (var i=0; i<roomCount;i++)
	{
		if (i==0)
		{
			roomCrack += defaultRoomCrack;
		}
		else
		{
			roomCrack += "," + defaultRoomCrack;
		}
	}
	return roomCrack;
}