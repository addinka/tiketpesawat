$(function() {

    function FilterRequestDTO()
    {
        this.startDepartureTime = new Date(2011, 10, 30);
        this.startDepartureTime.setHours(0);
        this.startDepartureTime.setMinutes(0);
        this.startDepartureTime.setSeconds(0);
        this.startDepartureTime.setMilliseconds(0);

        this.endDepartureTime = new Date(2011, 10, 30);
        this.endDepartureTime.setHours(23);
        this.endDepartureTime.setMinutes(59);
        this.endDepartureTime.setSeconds(0);
        this.endDepartureTime.setMilliseconds(0);

        this.airlineDisplay = {
            AI: true,
			GA: true,
            CI: true,
            BA: true,
            LI: true,
            ID: true,
			MA: true,
			AL: true,
			CH: true,
			SC: true,
			KL: true,
			RO: true,
			SI: true,
			TH: true,
			CA: true,
			QA: true,
			JA: true,
			SW: true,
			VI: true,
			NA: true,
			ET: true,
			AS: true
        };

        this.transitDisplay = {
            transit_0: true,
            transit_1: true,
            transit_2: true,
            transit_3: true
        };
    }
    var filterRequestDTO = new FilterRequestDTO();

    function filterPredicate(rowCollection)
    {
        for (var i = 0; i < rowCollection.length; i++) {
            var rowObject = rowCollection.eq(i);
            var shown = true;

            var airlineDisplayStore = filterRequestDTO.airlineDisplay;
            for (var propt in airlineDisplayStore)
            {
                if (propt == rowObject.attr('airline'))
                {
                    shown = shown && airlineDisplayStore[propt];
                }
            }

            var transitDisplayStore = filterRequestDTO.transitDisplay;
            for (var propt in transitDisplayStore)
            {
                var stopPropertyAttribute = propt.substring(propt.lastIndexOf("_") + 1);
                if (stopPropertyAttribute == rowObject.attr('stop'))
                {

                    shown = shown && transitDisplayStore[propt];
                }
            }

            var departureTime = $(rowObject).find('p.depart').html();

            var departureHour = parseInt(departureTime.substring(0, departureTime.indexOf(":")), 10);
            var departureMinute = parseInt(departureTime.substring(departureTime.indexOf(":") + 1), 10);

            var dummyDepartureTime = new Date(2011, 10, 30);
            dummyDepartureTime.setHours(departureHour);
            dummyDepartureTime.setMinutes(departureMinute);
            dummyDepartureTime.setSeconds(0);
            dummyDepartureTime.setMilliseconds(0);

            if (filterRequestDTO.startDepartureTime <= dummyDepartureTime && filterRequestDTO.endDepartureTime >= dummyDepartureTime)
            {
                shown = shown && true;
            }
            else
            {
                shown = shown && false;
            }


            if (shown)
            {
                if (rowObject.hasClass("gone"))
                {
                    rowObject.removeClass('gone');
                }
            }
            else
            {
                if (!rowObject.hasClass("gone"))
                {
                    rowObject.addClass('gone');
                }
            }

        }
    }

    //Initialize Airline Filter onClick Handler
    var airlineFilter = ["AI","GA", "CI", "BA", "LI","SR","ID","MA","AL","CH","SC","KL","RO","SI","TH","CA","QA","JA","SW","VI","NA","ET","AS","OM"];
    var airlineFilterCounter;
    for (airlineFilterCounter = 0; airlineFilterCounter < airlineFilter.length; airlineFilterCounter++) {
        $('#' + airlineFilter[airlineFilterCounter] + "_airline_filter").click(
                function() {
                    var airlineType = this.id.substring(0, 2);
                    if (this.checked)
                    {
                        filterRequestDTO.airlineDisplay[airlineType] = true;
                    }
                    else
                    {
                        filterRequestDTO.airlineDisplay[airlineType] = false;
                    }
                    var rowObject = $('table#flight-table > tbody > tr[airline*="' + airlineType + '"]');
                    filterPredicate(rowObject);
                });
    }

    //Initialize Transit Filter onClick Handler
    var transitFilter = ["0", "1", "2", "3"];
    var transitFilterCounter;
    for (transitFilterCounter = 0; transitFilterCounter < transitFilter.length; transitFilterCounter++) {
        $('#transit_filter_' + transitFilter[transitFilterCounter]).click(
                function() {
                    var stops = this.id.substring(this.id.lastIndexOf("_") + 1);
                    if (this.checked)
                    {
                        filterRequestDTO.transitDisplay["transit_" + stops] = true;
                    }
                    else
                    {
                        filterRequestDTO.transitDisplay["transit_" + stops] = false;
                    }

                    var rowObject = $('table#flight-table > tbody > tr[stop*="' + stops + '"]');
                    filterPredicate(rowObject);
                });
    }

    $('#time-range').slider({
        range: true,
        min: 0,
        max: 24,
        values: [0, 24],
        slide: function(event, ui) {
            
            _gaq.push(['_trackEvent', 'Flight_Search_Pergi', 'Flight_Search_Pergi_Change_Hour', ui.values[0]+'|'+ui.values[1], 1]);
            
            $("#times").text(checkTime(ui.values[0]) + ".00" + " - " + checkTime(ui.values[1]) + ".00");
            if (ui.values[0] == 24)
            {
                filterRequestDTO.endDepartureTime.setHours(23);
                filterRequestDTO.endDepartureTime.setMinutes(59);
            }
            else
            {
                filterRequestDTO.startDepartureTime.setHours(ui.values[0]);
                filterRequestDTO.startDepartureTime.setMinutes(0);
            }

            if (ui.values[1] == 24)
            {
                filterRequestDTO.endDepartureTime.setHours(23);
                filterRequestDTO.endDepartureTime.setMinutes(59);
            }
            else
            {
                filterRequestDTO.endDepartureTime.setHours(ui.values[1]);
                filterRequestDTO.endDepartureTime.setMinutes(0);
            }

            var rowObject = $('table#flight-table > tbody > tr');
            filterPredicate(rowObject);
        }

    });



    function checkTime(uivalues) {
        if (uivalues < 10) {
            return "0" + uivalues;
        } else {
            return uivalues;
        }
    }

    function sortSearchResult(mode)
    {
        if (mode == "1")
        {
            $('table#flight-table > tbody > tr').tsort('', {order: 'asc', attr: 'price'});
        }
        else
        {
            $('table#flight-table > tbody > tr').tsort('', {order: 'asc', attr: 'depart_milli'});
        }
    }

    function filterSearchResultByTime(mode)
    {
        var startDepartureHour, startDepartureMinute, endDepartureHour, endDepartureMinute;
        if (mode == "0")
        {
            startDepartureHour = 0;
            startDepartureMinute = 0;
            endDepartureHour = 23;
            endDepartureMinute = 59;
        }
        else if (mode == "1")
        {
            startDepartureHour = 0;
            startDepartureMinute = 0;
            endDepartureHour = 12;
            endDepartureMinute = 0;
        }
        else if (mode == "2")
        {
            startDepartureHour = 12;
            startDepartureMinute = 0;
            endDepartureHour = 18;
            endDepartureMinute = 0;
        }
        else
        {
            startDepartureHour = 18;
            startDepartureMinute = 0;
            endDepartureHour = 23;
            endDepartureMinute = 59;
        }

        filterRequestDTO.startDepartureTime.setHours(startDepartureHour);
        filterRequestDTO.startDepartureTime.setMinutes(startDepartureMinute);

        filterRequestDTO.endDepartureTime.setHours(endDepartureHour);
        filterRequestDTO.endDepartureTime.setMinutes(endDepartureMinute);

        var rowObject = $('table#flight-table > tbody > tr');
        filterPredicate(rowObject);
        
    }

    $("#search_result_sort_dropdown").change(function()
    {
        sortSearchResult($(this).val());
    });

    $("#search_result_time_dropdown").change(function()
    {
        filterSearchResultByTime($(this).val());
    });

});