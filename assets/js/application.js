$(function() {

    //linkable
    $('.box-result').click(function() {
        window.location.href = "http://pegipegi.com";
    });
    $('.box-no-result').click(function() {
        window.location.href = "http://pegipegi.com";
    });

    //image loader
    $('#myModal2,#myModal,#modalReview,#login-popup').on('show', function() {
        /*var loader = document.createElement("IMG");
         loader.id= "fixed";
         $('#fixed').attr('src','img/ajax-loader.gif');
         document.body.appendChild(loader);*/
        $('body').append('<img id="fixed" src="' + window.base_url + 'assets/userweb/img/ajax-loader.gif">');
    });
    $('#myModal2,#myModal,#modalReview,#login-popup').on('shown', function() {
        $('#fixed').remove();
    });

    $('#rincian').mouseover(function() {
        $('.box-no-result').css('background', 'white');
    });

    /*$('.box-result2').click(function(){
     $('.trig').trigger('click');
     });*/

    $('.rated-over').click(function() {
        Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
        Galleria.run('#galleria-review', {
            transition: 'fade',
            autoplay: 4000
        });

        var galleriaThumb = $('#galleria-review .galleria-thumbnails-container');
        var galleriaImg = $('#galleria-review .galleria-image');
        //attach camera
        galleriaThumb.append('<div class="camera"></div>');

        //image slider camera thumbnail
        $('.camera').mouseover(function() {
            galleriaThumb.animate({"bottom": "0"}, 300);
        });

        galleriaImg.mouseover(function() {
            if (galleriaThumb[0].style.bottom == "0px") {
                galleriaThumb.animate({"bottom": "-115px"}, 300);
            }
        });
    });


//blink button
    var interval;
    var counter = 0;

    dest = $('.search-box select,.search-box input,.form-box input,.form-box select');
    topboard = $('.top-board select,.top-board input');
    topboard.change(function() {
        blinkButton2();
    });
    dest.change(function() {
        blinkButton();
    });
    var isBlink = false
    function blinkButton() {
        if (!isBlink) {
            isBlink = true;
            counter = 0;
            interval = setInterval(blinkNow, 600);
        }
    }
    function blinkButton2() {
        if (!isBlink) {
            console.log('sd');
            isBlink = true;
            counter = 0;
            interval = setInterval(blinkNow2, 600);
        }
    }

    $('#btn-blink,#btn-blink2').mouseover(function() {
        clearInterval(interval);
        isBlink = false;
    })


    function blinkNow() {
        console.log(counter);
        if (counter < 5) {
            counter = counter + 1;
            $('#btn-blink,#btn-blink2').addClass('blink');
            setTimeout("$('#btn-blink,#btn-blink2').removeClass('blink')", 300);
        } else {
            isBlink = false;
            clearInterval(interval);
        }
    }
    function blinkNow2() {
        console.log(counter);
        if (counter < 5) {
            counter = counter + 1;
            $('#cari').addClass('blink');
            setTimeout("$('#cari').removeClass('blink')", 300);
        } else {
            isBlink = false;
            clearInterval(interval);
        }
    }




    //clickable calendar icon
//  $('em.cal-ico').click(function(){
//    $('#datepicker').datepicker('show');
//    return false;
//  });
//    $('#cal-ico2').click(function(){
//    $('#datepicker2').datepicker('show');
//    return false;
//  });
//   $('#cal-ico3').click(function(){
//    $('#datepicker3').datepicker('show');
//    return false;
//  });
//   $('#cal-ico4').click(function(){
//    $('#datepicker4').datepicker('show');
//    return false;
//  });

    arrImg = ['img/img-hotel2.jpg', 'img/hotel-2.jpg']
    //hotel-small-image
    $('.small-menu div img').hover(function() {
        $(this).css('opacity', '0.7');
    }, function() {
        $(this).css('opacity', '1.0')
    });

    $('.small-menu div img').click(function() {
        $('.main-small img').hide();
        var dataImg = $(this).attr('data-img');
        $('.main-small img').attr('src', arrImg[dataImg]);
        $('#full-sm').attr('href', arrImg[dataImg]);
        $('.main-small img').fadeIn(800);
    });

    $('.small-menu div').click(function() {
        $('.small-active em').remove();
        $('.small-active').removeClass();
        $(this).addClass('small-active').append('<em></em>');
    });

    arrPop = ['img/hotel-2.jpg']

    //popimage
    $('.popsm-img').click(function() {
        $('.popmain-img img').hide();
        var dataImg = $(this).attr('data-img');
        $('.popmain-img img').attr('src', arrImg[dataImg]);
        $('.popmain-img img').fadeIn(800);
    });


    //accordion
    accord = $('.book-accordion');
    $('.special').click(function() {
        if (accord[0].style.display == "none") {
            accord.slideDown();
            $('.blue-arrow').attr('src', 'img/images/small_arrow2.png');
        } else {
            accord.slideUp();
            $('.blue-arrow').attr('src', 'img/images/small_arrow.png');
        }
        return false;
    });



    accord2 = $('.search-accor');
    $('.showw').click(function() {
        if (accord2[0].style.display == "none") {
            accord2.slideDown();
            $(this).find('img').attr('src', 'img/images/small_arrow2.png');
        } else {
            accord2.slideUp();
            $(this).find('img').attr('src', 'img/images/small_arrow.png');
        }
        return false;
    });

    //table flight hover
    $('.list-mode tr').hover(function() {
        $(this).find('.arrow-b').show();
    }, function() {
        $('.arrow-b').hide();
    });

    

    //progress-bar
//  var barmarkup = $('.progress');
//  var bar = $('.progress .bar');
//  var n = 0;
//  if(barmarkup.length){
//    var progress = setInterval(function(){
//      n = n + 50;
//      bar[0].style.width = ''+n+'%';
//      if(n >= 150){
//        clearInterval(progress);
//        barmarkup.fadeOut();
//        $('.pc p').fadeIn();
//
//      }
//    },1500);
//  }

    //ajax call
    $.ajaxSetup({
        cache: false
    });
    var ajax_load = "<br><img id='loading' src='" + window.base_url + "assets/userweb/img/ajax-loader.gif' alt='loading...' /><br><br>";
    //var loadUrl = ["data/pulang-list.html","data/terkini-list.html","data/malaysia-tab.html","data/medan-tab.html","data/bali-tab.html","data/surabaya-tab.html"];  
    var loadTable = ["data/table-day.html", "data/table-day.html", "data/table-day.html", "data/table-day.html", "data/table-day.html", "data/table-day.html", "data/table-day.html"]

    //day click
//  dayClick();
//  function dayClick(){
//    var a = $('a.day');
//    a.click(function(e){
//      for(var x = 0; x < a.length; x++){
//        a[x].id = "";
//      }
//      this.id = "cek";
//      var dataDate = this.getAttribute('data-date');
//
//      if($('#myTab li:first-child').attr('class') =='active'){
//        //ajax call
//        $('.table-load').html(ajax_load).load(loadTable[dataDate],function(){
//          $('#pergi table > tbody > tr > td').wrapInner('<div style="padding:10px 0;" />');
//          ajaxx();
//        });
//      }
//      $('#slideCarousel').carousel('pause');
//      return false;
//    });
//  }

    var flightDetail = document.getElementById('flightDetail');




    //button pilih object
    function btnFlight(par1, par2, par3) {
        this.select = $('' + par1 + ' .price button');
        this.whichTab = $('#myTab a[href^=' + par2 + ']');
        this.target = $('' + par2 + '');
        this.call = function() {
            $('' + par2 + ' table > tbody > tr > td').wrapInner('<div style="padding:10px 0;" />');
            par3.style.display = "block";
            flightDetail.style.display = "block";

            well();
            callback();
        }
        this.showing = function() {
            this.whichTab.tab('show');
        }
        this.data = function(par4, par5, par7) {
            $('' + par7 + '').find(par5).text(par4);
        }
        this.rel = function(a, b, c) {
            $('' + c + '').find(b).attr('rel', a);
        }
        this.logo = function(par6, par8) {
            $('' + par8 + '').attr('src', par6);
        }
        this.price = 0;
    }
    var btn = $('.headReturn ul li.date img');
    var ticketPergi = $('.takeoff,.totalFlight');
    var ticketPulang = $('.return2');


    function well() {
        $('.well').css({
            'minHeight': '20px',
            'border': '1px solid #e3e3e3'

        });
    }

//  function ajaxx(){
//    var dateTime = $('#pergi #cek').find('h4').text();
//    var pilih = new btnFlight('#pergi','#pulang',ticketPergi[0]);
//    var pesan = new btnFlight('#pergi2','#terkini',ticketPergi[0]);
//
//
//    pesan.select.click(function(){
//      ticketPergi[0].style.display = "block";
//      ticketPergi[1].style.display = "block";
//      pesan.showing();
//      pesan.target.html(ajax_load).load(loadUrl[1],pesan.call);
//      well();
//    })
//
//    pilih.select.click(function(){
//      if(ticketPulang[0].style.display = "none"){
//        ticketPergi[1].style.display = "none";
//      }else{
//        ticketPergi[1].style.display = "block";
//      }
//      
//
//      /*var get = $(this).closest('td').parent();
//
//      var dataDepart = get.find('.depart').text();
//      var dataArrival = get.find('.arrival').text();
//      var dataFl = get.find('td:first-child strong').text();
//      var dataDuration = get.find('.duration').text();
//      var dataDuration1 = dataDuration.substr(0,1);
//      var dataDuration2 = dataDuration.substr(4,2);
//      var dataLogo = get.find('td:first-child img').attr('src');
//
//      var dataPrice1 = get.find('.price span').text();
//      var dataValue = get.find('.price span').attr('rel');
//
//      pilih.price = dataValue;
//      pilih.rel(dataValue,'.currency','#penerbanganPergi')
//      pilih.data(dataFl,'.planeCode','#penerbanganPergi');
//      pilih.data(dataDepart+' - '+dataArrival,'.date strong','#penerbanganPergi');
//      pilih.data(dataDuration1+' jam '+dataDuration2+' menit ','.date span','#penerbanganPergi');
//      pilih.data(dataPrice1,'.currency','#penerbanganPergi');
//      pilih.logo(dataLogo,'#logoTicket');*/
//      pilih.showing();
//
//      //ajax call
//      pilih.target.html(ajax_load).load(loadUrl[0],pilih.call);
//
//      //total
//      //var total = parseInt(pilih.price) + 0;
//      //$('.totalFlight .price span').text('IDR '+total);
//
//      //datetime
//      //$('.takeoff .headReturn strong').text('- '+dateTime);
//
//    });
//  }



    //batal button



    //radio checked... !!! BEGO....!!!!
//  var radio1 = document.getElementById('inlineCheckbox1');
//  var radio2 = document.getElementById('inlineCheckbox2');
//  $('#inlineCheckbox1,#inlineCheckbox2').click(function(){
//    if(radio1.checked){
//      $('#sekali-jalan').show(ieie());
//      $('#pulang-pergi').hide();
//    }else{
//      $('#sekali-jalan').hide();
//      $('#pulang-pergi').show();
//    }
//  });



    function ieie() {
        if (navigator.appVersion.indexOf("MSIE 7.") != -1) {
            $('select').css('marginTop', '-20px');
            $('input[type="text"]').css('marginTop', '-25px');
        }
    }


    /*var thumb = document.getElementById('thumbRadio');
     var list = document.getElementById('listRadio');
     $('#thumbRadio,#listRadio').click(function(){
     checkMode();
     });
     
     function checkMode(){
     if(thumb.checked){
     $('.thumbnail-mode').fadeIn();
     $('.list-mode').fadeOut();
     }else{
     $('.thumbnail-mode').fadeOut();
     $('.list-mode').fadeIn();
     }
     }*/

    //tab click
//  $('#myTab2 a').click(function(){
//    var place = this.getAttribute('href');
//    var data = this.getAttribute('data-id');
//    if(place != '#jkt'){
//      $(''+place+'').html(ajax_load).load(loadUrl[data]);
//    }
//  });

    //placeholder IE7,8,9
    function placeholder(formId) {
        if ($('.form-box').length) {
            var input = document.getElementById(formId);
            //IE only
            if (navigator.appVersion.indexOf("MSIE") != -1) {
                input.value = "Hotel name/Destination";
                input.style.color = "#888";
                input.attachEvent('onfocus', function() {
                    if (input.value == "Hotel name/Destination") {
                        input.value = "";
                        input.style.color = "#363e3f";
                    }
                });
                input.attachEvent('onblur', function() {
                    if (input.value == "") {
                        input.value = "Hotel name/Destination";
                        input.style.color = "#888";
                    }
                });
            }
        }
    }

    placeholder('dest');

    //all ie
    if (navigator.appVersion.indexOf("MSIE") != -1) {
        $('select').removeClass('chzn-select');
    }

    //IE7 Only
    if (navigator.appVersion.indexOf("MSIE 7.") != -1) {
        //$('#sel').after('<div class="abs"></div>');
    }

    //IE8 only
    if (navigator.appVersion.indexOf("MSIE 8.") != -1) {
        if ($('.info-airline').length) {
            $('.date').next().css('width', '100px');
        }
        if ($('.fs').length) {
            $('footer').css('marginTop', '1300px')
        }
        if ($('.headReturn').length) {
            $('.logo-airline').css('width', '100px');
        }
    }

    $('.fac-ico .briefcase').popover({trigger: "hover", content: "harga termasuk 20kg bagasi"});

    //popover map
    $('#popoverData').popover({
        html: true,
        content: '<div class="pop-l pull-left"><img src="img/hotel-1.jpg"></div><div class="pop-r pull-left"><h4>Studio - Termasuk Sarapan</h4><div class="pull-left star"><em></em><em></em><em></em><em></em><em></em></div><div class="clear"></div><span>Jakarta Pusat</span><div class="clear"></div><img src="img/green-icon.png"><div class="clear"></div><span class="ket">Berdasarkan 39 ulasan wisata</span><div class="clear"></div><span class="harga">Rp 1,053,719</span><div class="clear"></div><button class="btn cari btn-primary" type="button">Rincian</button><br><br></div>'
    });
    $('#popoverData2').popover({trigger: "hover"});

    $("a[rel^='prettyPhoto']").prettyPhoto({
        theme: 'light_square',
        social_tools: false,
        overlay_gallery: false
                /* Called everytime an item is shown/changed */
                /*changepicturecallback: function(){
                 
                 }, */
    });

    //tab
    $('#myTab a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('#myTab2 a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('#searchTab a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    function scroll(place, time, tab) {
        $('html,body').animate({
            scrollTop: $(tab).offset().top - 20
        }, time, function() {
            $('' + tab + ' a[href^=#' + place + ']').tab('show');
        });
    }

    //scroll
    $('#overview a[href^=#detail]').click(function() {
        scroll('detail', 800, '#myTab');
    });

    $('button[href^=#top-b]').click(function() {
        scroll('overview', 1000, '#top-b');
    });

    $('#overview a[href^=#map]').click(function() {
        scroll('map', 1300, '#myTab');
    });

    $('#overview a[href^=#review]').click(function() {
        scroll('review', 1500, '#myTab');
    });

    $('#overview a[href^=#ask]').click(function() {
        scroll('ask', 1600, '#myTab');
    });

    $('#detail a[href^=#facilities]').click(function() {
        scroll('', 1600, '#facilities');
    });

    $('#ask a[href^=#ask-form]').click(function() {
        scroll('', 1600, '#ask-form');
    });

    $('.ico,.iconi2,.iconi3,.iconi4,.iconi5,.f-icon1,.f-icon2,.f-icon3,.f-icon4,.f-icon5,.f-icon6,.f-icon7').tooltip();
});

//clickable calendar icon
$('em.cal-ico,em.cal-icon').click(function() {
    $('#datepicker').datepicker('show');
    return false;
});
$('#cal-ico2,em.cal-icon2').click(function() {
    $('#datepicker2').datepicker('show');
    return false;
});
$('#cal-ico3').click(function() {
    $('#datepicker3').datepicker('show');
    return false;
});
$('#cal-ico4').click(function() {
    $('#datepicker4').datepicker('show');
    return false;
});

$(function() {
    //datepicker
//  $('#datepicker').datepicker({dateFormat : 'dd-mm-yy'});
//  $('#datepicker2').datepicker({dateFormat : 'dd-mm-yy'});
//  $('#datepicker').datepicker('setDate', 'today');
//  $('#datepicker2').datepicker('setDate', 'today');
//
//  $('#datepicker3').datepicker({dateFormat : 'dd-mm-yy'});
//  $('#datepicker4').datepicker({dateFormat : 'dd-mm-yy'});
//  $('#datepicker3').datepicker('setDate', 'today');
//  $('#datepicker4').datepicker('setDate', 'today');
});

$(function() {
    //slider range
    var hargaArr = ['100.000', '150.000', '200.000', '250.000', '300.000', '350.000', '400.000', '450.000', '500.000', '550.000', '600.000', '650.000', '700.000', '750.000', '800.000', '850.000', '900.000', '950.000', '1.000.000', '1.100.000', '1.200.000', '1.300.000', '1.400.000', '1.500.000', '1.600.000', '1.700.000', '1.800.000', '1.900.000', '2.000.000', '3.000.000', '4.000.000', '5.000.000'];

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 31,
        values: [0, 31],
        slide: function(event, ui) {
            $("#idr").text("Rp " + hargaArr[ui.values[0]] + " - " + hargaArr[ui.values[1]]);
        }
    });
    $("#idr").text("Rp " + "100.000" +
            " - " + "5.000.000");

    function checkHarga(uivalues) {
        if (uivalues >= 10) {
            var uis = uivalues.toString();
            return uis.substr(0, 1) + "." + uis.substr(1, 1);
        } else {
            return uivalues;
        }
    }





    function row() {
        this.down = function(par1) {
            $('table#flight-table > tbody > tr > td.' + par1 + '').parent().find('td > div').slideDown();
            $('table#flight-table > tbody > tr > td.' + par1 + '').parent().find('td').css({borderBottom: '1px solid #CCC', padding: '6px'});
        };
        this.up = function(par2) {
            $('table#flight-table > tbody > tr > td.' + par2 + '').parent().find('td > div').slideUp();
            $('table#flight-table > tbody > tr > td.' + par2 + '').parent().find('td').css({border: 'none', padding: '0'});
        };
    }

    //filter depart

//    $('table#flight-table > tbody > tr > td').wrapInner('<div style="padding:10px 0;" />');

    var timeArray = [];

    $('.depart').each(function() {
        var depart = $(this).text();
        var n = parseInt(depart.substr(0, 2));
        var n2 = parseInt(depart.substr(3, 2));
        if (n2 > 0) {
            n2 = 1;
        } else {
            n2 = 0;
        }
        var nt = n + n2;
        $(this).closest('tr').attr('data-v', '' + nt + '');
        timeArray.push(nt);
    });


    var galleriaThumb = $('.galleria-thumbnails-container');
    var galleriaImg = $('.galleria-image');
    //attach camera
    galleriaThumb.append('<div class="camera"></div>');

    //image slider camera thumbnail
    $('.camera').mouseover(function() {
        galleriaThumb.animate({"bottom": "0"}, 300);
    });

    galleriaImg.mouseover(function() {
        if (galleriaThumb[0].style.bottom == "0px") {
            galleriaThumb.animate({"bottom": "-115px"}, 300);
        }
    });

    if (navigator.appVersion.indexOf("MSIE 7.") != -1) {
        if ($('.box-result2').length) {
            var box2 = $('.box-result2');
            var boxW = $('.box-result2 .pesan');
            boxW[1].style.marginTop = "-25px";
            boxW[2].style.marginTop = "-25px";

        }

        //if($('.box-result').length){
        //var boxZ = $('.box-result');
        //boxZ[0].style.marginBottom = "50px";
        //}

        $('aside').prepend('<div style="margin-top:50px;"></div>');
        $('aside section').after('<div style="margin-top:25px;"></div>');
        $('.top-board').after('<div style="margin-top:25px;"></div>');
    }

//    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
////        $('h1,.panel-head h2,h2,h3,h4,h5,span,li,a,strong').css('fontFamily', 'museo300');
//        $('span.harga').css('fontFamily', 'Arial');
//        $('.panel-head h2,h3,h4,h5').css('fontSize', '14px');
//        $('h5').css('fontSize', '12px');
//        $('.column h5').css('fontSize', '13px');
//        $('.box-no-result h3').css('lineHeight', '20px');
//        $('.box-no-result h3').css('margin', '10px 0');
//    }

   // if (navigator.userAgent.toString().toLowerCase().indexOf("firefox") != -1) {
//        $('.panel-head h3,.info-head h3,.media-body h5,.box-result .right h3, .box-result2 .right h3').css('fontFamily', 'museo300');
      //  var login = $('.login');
//      var review = document.getElementById('galleria-review');
//      review.style.marginBottom = "20px";
    //    login[0].style.width = "325px";
    //}

    var fullscr = true;

    $('#modalReview').on('show', function() {
        fullscr = false;
    });

    $('#modalReview').on('hide', function() {
        fullscr = true;
    });

    $('.direct span').popover({trigger: "hover", html: "true", placement: 'bottom'});
    $('.briefcase').popover({trigger: "hover", content: "harga termasuk 20kg bagasi", placement: 'top'});
    $('li .whatsup').popover({trigger: "hover", html: "true", placement: 'bottom'});
    $('li .line').popover({trigger: "hover", html: "true", placement: 'bottom'});
    //popover map
    $('.button-market').mouseover(function() {
        $('.place-over .popover').show();
    })
    $('.place-over .popover').mouseleave(function() {
        $('.place-over .popover').hide();
    });

    $('.button-home').mouseover(function() {
        $('.map-popover .popover').show();
    })
    $('.map-popover .popover').mouseleave(function() {
        $('.map-popover .popover').hide();
    });
    Galleria.ready(function() {
        this.$('images').click(function(e) {
            //if($(this).attr('class')=='galleria-image-nav-left')
            Galleria.log('stage or thumbnails clicked');
            var idx = $('.galleria-current').text();
            var totalimage = 6;

            //api_images = ['img/hotel-'+ idx +'.jpg','img/hotel-2.jpg','img/hotel-3.jpg'];
            api_images = ['', 'img/hotel-1.jpg', 'img/hotel-2.jpg', 'img/hotel-3.jpg', 'img/hotel-1.jpg', 'img/hotel-2.jpg', 'img/hotel-3.jpg'];
            api_titles = ['', 'Title 1', 'Title 2', 'Title 3', 'Title 1', 'Title 2', 'Title 3'];
            api_descriptions = ['', 'Description 1', 'Description 2', 'Description 3', 'Description 1', 'Description 2', 'Description 3'];

            var api_newimg = [];
            var api_newtitles = [];
            var api_newdesc = [];

            for (var idx; idx < api_images.length; idx++) {
                api_newimg.push(api_images[idx]);
                api_newtitles.push(api_titles[idx]);
                api_newdesc.push(api_descriptions[idx]);
            }

            var idx2 = totalimage - api_newimg.length;
            if (idx2 != 0) {
                for (var j = 1; j <= idx2; j++) {
                    api_newimg.push(api_images[j]);
                    api_newtitles.push(api_titles[idx]);
                    api_newdesc.push(api_descriptions[idx]);
                }
            }
            if (fullscr) {
                $.prettyPhoto.open(api_newimg, api_newtitles, api_newdesc);
            }
        });

    });

    //flightslider

//scroll pesan button maskapai info
    if ($('#flex-flight').length) {
        $('#pesan,.pesan-m').click(function() {
            $('html,body').animate({
                scrollTop: $('#flex-flight').offset().top - 20
            }, 800);
        });
    }

//read-more
    $('.read-more').click(function() {
        $(this).parent().find('.hidep').slideToggle();
        //$('.hidep').slideToggle();
        if ($(this).text() == 'Selengkapnya') {
            $(this).text('Tutup');
        } else {
            $(this).text('Selengkapnya');
        }
        return false;
    });

    $('.homeTab-1 li').click(function() {
        $('.homeTab-1 li').removeClass();
        $(this).addClass('act');
        if ($(this).find('span').text() == 'Sekali Jalan') {
            $('.flight_type#inlineCheckbox1').trigger('click');
        } else {
            $('.flight_type#inlineCheckbox2').trigger('click');
        }
        return false;
    });


});