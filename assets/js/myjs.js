    $(document).ready(function(){
        $('.flight_type').change(function(){
            if( $(this).val() === 'oneway' ) {
                $('.date_inbound').slideUp('slow');
                    $('.flexible_c.flexible_inbound').slideUp('slow');
            }
            else {
                
                if($('.fleksible').is(':checked')) {
                    $('.flexible_c.flexible_inbound').slideDown('slow');
                }
                else {
                    $('.date_inbound').slideDown('slow');
                }
            }
        });
        
        $('.fleksible').change(function(){
            checkFlex();
        });
        
        $('.from_airport').change(function(){
            var val = $(this).val();
            
            $('.to_airport').find('option[disabled]').removeAttr('disabled').trigger('chosen:updated');
            
            if( $('.to_airport').val() === val )  {
                $('.to_airport').find('option[selected]').removeAttr('selected').trigger('chosen:updated');
                $('.to_airport').find('option[value=""]').attr('selected','selected').trigger('chosen:updated');
            }
            
            $('.to_airport').find('option[value="'+val+'"]').attr('disabled','disabled').trigger("chosen:updated");
        });
        
        $('.from_airport').trigger('change');
        
        
       
        
        
        $('.departure_date').trigger('click');
        $('.departure_date').trigger('change');
        
        $(".chooser").chosen({
            disable_search_threshold: 13
        }).change(function(event){
            
        });
        
        function slugUrl( str ) {
            // replace ' () SPACE-SPACE
            return str.replace(' - ','-').toLowerCase().replace('(','-').replace(')','-').replace(', ','-').replace(' ','-');
        }
        
        function isDate(val) {
            // 2013-08-31
            var a = val.split('-');
            var d = new Date(a[0],a[1],a[2]);
            
            var e = d.getDate().toString();
            
            return isNaN(e);
             
        }
        
        $('.cari').click(function(event){
            event.preventDefault();
            var adult_count = $('.adult_count').val();
            var infant_count = $('.infant_count').val();

            if( infant_count > adult_count   ) {
                alert('Jumlah Bayi Tidak boleh Lebih Banyak Dari Jumlah Dewasa.');
                return false;
            }
            
            if( $('.from_airport').val() === "" || $('.to_airport').val() === "" ) {
                alert('Silahkan Pilih Kota Tujuan Anda.');
                return false;
            }
            
            if($('.fleksible').is(':checked')) {
                if( $('.flight_type#inlineCheckbox2').is(':checked') && ( $('.chooser.inbound')[0].selectedIndex < $('.chooser.outbound')[0].selectedIndex ) ) {
                    // Do Nothing
                    alert('Silahkan Pilih Bulan Dan Tahun KePulangan');
                    return false;
                }
                
                

                var tgl_pergi   = $('.chooser.outbound').val();
                var tgl_pulang  = $('.chooser.inbound').val();

                tgl_pergi = tgl_pergi.split(' ');
                tgl_pulang = tgl_pulang.split(' ');

                $('.flex_opt').html('');

                $('.flex_opt').append('<input type="hidden" name="departure_month" class="departure_month" value="'+tgl_pergi[0]+'">');
                $('.flex_opt').append('<input type="hidden" name="departure_year" class="departure_year" value="'+tgl_pergi[1]+'">');
                $('.flex_opt').append('<input type="hidden" name="arrival_month" class="arrival_month" value="'+tgl_pulang[0]+'">');
                $('.flex_opt').append('<input type="hidden" name="arrival_year" class="arrival_year" value="'+tgl_pulang[1]+'">');
                
                var from    = slugUrl($('.from_airport option:selected').text());
                var to      = slugUrl($('.to_airport option:selected').text());
             
            }
            else {
                if( $('.flight_type#inlineCheckbox2').is(':checked') && ( $('.departure_date ').val() === '' || $('.return_date ').val() === '' ) ) {
                    alert('Silahkan Pilih Tanggal Keberangkatan Dan Kepulangan Dengan Benar.');
                    return false;
                }
                else {
                    if( $('.flight_type#inlineCheckbox2').is(':checked') ) {
                        // PP
                        var d_p = $('#datepicker').val();
                        var d_a = $('#datepicker2').val();
                        
                        if( isDate(d_p) && isDate( d_a  ))  {
                            alert('Silahkan Pilih Tanggal Keberangkatan Dan Kepulangan Dengan Benar'); 
                            $('.departure_date').focus(); 
                            return false;
                        }
                        
                    }
                    else {
                        var d_p = $('.departure_date').val();
                        
                        
                        d_p = isDate(d_p);
                        if( d_p )  { alert('Silahkan Pilih Tanggal Keberangkatan Dengan Benar'); $('.departure_date ').val(''); $('.departure_date ').focus();  return false;}
                    }
                }
            }
            
            $('#pulang-pergi').submit();
        });
        
        function checkFlex() {
            if( $('.fleksible').is(':checked') ) {
                
                if($('#pulang-pergi input[type="radio"]:checked').val() === 'oneway' ){
                    $('.flexible_c.flexible_outbound').slideDown('slow');
                }
                else {
                    $('.flexible_c').slideDown('slow');
                }
                
                $('.normal_search').slideUp('slow');
            }
            else {
                $('.flexible_c').slideUp('slow');
                
                if($('#pulang-pergi input[type="radio"]:checked').val() === 'oneway' ){
                    $('.normal_search.date_outbound').slideDown('slow');
                }
                else {
                    $('.normal_search').slideDown('slow');
                }
            }
        }
        
        checkFlex();
        
        function checkMe(str) {
            $('.homeTab-1 li').removeClass();
            
            $.each($('.homeTab-1 li'), function(){
                if ($(this).find('span').text() == str) {
                    $(this).addClass('act');
                }
            });
        }
        
        $('.flight_type#inlineCheckbox1').attr('checked','true').trigger('change');checkMe("Sekali Jalan")        
    });
    