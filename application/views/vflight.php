<?php 
error_reporting(0);
$token = $_SESSION['token'];
//echo $token;
$context = stream_context_create(array('http' => array('header' => 'Host: api.tiket.com')));
$url="http://api.tiket.com/search/flight?d=$_GET[d]&a=$_GET[a]&date=$_GET[date]&ret_date=$_GET[ret_date]&adult=$_GET[adult]&child=$_GET[child]&infant=$_GET[infant]&token=$token&v=3&output=json";
$data = json_decode(file_get_contents($url, 0, $context));
//print_r($data);

?>
 <script type="text/javascript">
            var NREUMQ = NREUMQ || [];
            NREUMQ.push(["mark", "firstbyte", new Date().getTime()]);
        </script>
        <title>Pencarian Tiket Pesawat Murah</title>
        <meta name="viewport" content="user-scalable=yes" />
        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-65432-1']);
            _gaq.push(['_trackPageview']);
            _gaq.push(['t2._setAccount', 'UA-65432-2']);
            _gaq.push(['t2._setDomainName', 'www.shillatour.co.id']);
            _gaq.push(['t2._trackPageview']);
        </script>


    <div class="js-flight js-exlude-scroll-to-anchor">
        <div class="u-bg--sand">
            <div class="u-bg--sand js-flight-loading u-align-center" style="display: none; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 998;">
                <center><img src="/images/preloader.gif" style="margin-top: 300px;"></center>
            </div>
            <!---->
            <div class="o-container o-container--responsive">
                <div class="u-pad-top--2 u-mrgn-bottom--4">
                    <div class="o-layout o-layout--responsive" style="">
                        <div class="o-layout__item u-12of12"><span class="u-block u-mrgn-bottom--2"><span class="u-fg--red-brand c-icon c-icon--arrow-backward qa-go-to-flight-search" style="cursor: pointer;"></span> <a href="#/" class="u-txt--base u-mrgn-top--1 u-mrgn-bottom--4 qa-go-to-flight-search"><span>Kembali</span></a></span>
                        </div>
                        <div class="o-layout__item u-12of12">
                            <div class="o-flag u-pad--3 u-border--1--ash-light" style="border-radius: 2px;">
                                <div class="o-flag__head u-10of12">
                                    <div class="u-txt--medium u-mrgn-bottom--1 u-clearfix">
                                        <div class="u-float-left" style="line-height: 24px;"><?php print $data->go_det->dep_airport->short_name;?> (<?php echo $_GET['d']; ?>)</div>
                                        <div class="u-float-left u-mrgn-left--1 u-mrgn-right--1 c-icon-duotone c-icon-duotone--medium c-icon-duotone--trip-one"></div>
                                        <div class="u-float-left" style="line-height: 24px;"><?php print $data->ret_det->dep_airport->short_name;?> (<?php echo $_GET['a']; ?>)</div>
                                    </div>
                                    <div class="u-fg--ash-dark"><span><?php print $data->go_det->formatted_date; ?></span>
                                        <!----><span> / <?php echo $_GET['adult']; ?> Dewasa</span></div>
                                </div>
                                <div class="o-flag__body u-align-right">
                                    <button class="c-btn c-btn--small c-btn--red c-btn--ghost qa-toggle-search">Ganti Pencarian</button>
                                </div>
                            </div>
                            <div style="margin-top: -1px;">
                                <div class="u-hidden">
                                    <div class="c-progress" style="height: 3px; border-radius: 2px; overflow: unset;">
                                        <div class="c-progress__bar" style="border-radius: 2px; width: 0%;"></div>
                                        <div class="c-tooltip-light c-tooltip--bottom u-hidden" style="margin-left: -18px; left: 0%;">
                                            <div class="c-tooltip-light__pointer"></div>
                                            <div class="c-tooltip-light__content" style="font-size: 10px; padding: 6px 8px;">0%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---->
                    <div class="c-panel u-pad-top--4 u-pad-right--4 u-pad-left--4 js-flight-static" style="display: block;">
                        <div class="o-layout">
                            <div class="o-layout__item u-12of12 u-mrgn-bottom--3">
                                <label class="c-inp-wrap u-pad-top--0">
                                    <input checked="checked" type="radio" value="1" class="c-inp c-inp--radio"> <span class="c-inp__inner-lbl">Sekali Jalan</span></label>
                                <label class="c-inp-wrap u-pad-top--0">
                                    <input type="radio" value="0" class="c-inp c-inp--radio"> <span class="c-inp__inner-lbl">Pulang Pergi</span></label>
                            </div>
                            <div class="o-layout__item u-12of12 u-clearfix">
                                <div class="u-float-left u-6of12">
                                    <div class="o-layout o-layout--responsive u-position-relative">
                                        <div class="o-layout__item" style="width: calc(((100% - 44px) / 2) + 12px);">
                                            <div class="c-fld">
                                                <div class="c-fld__row">
                                                    <label class="c-fld__lbl">Kota Asal</label>
                                                </div>
                                                <input class="c-inp c-inp--small">
                                            </div>
                                        </div>
                                        <div class="o-layout__item u-pad-top--4" style="width: 44px; padding-left: 12px;">
                                            <div class="c-btn c-btn--small" style="padding: 3px; border-radius: 50%;">
                                                <div class="c-icon-duotone c-icon-duotone--medium c-icon-duotone--switch"></div>
                                            </div>
                                        </div>
                                        <div class="o-layout__item" style="width: calc(((100% - 44px) / 2) - 12px); padding-left: 12px;">
                                            <div class="c-fld">
                                                <div class="c-fld__row">
                                                    <label class="c-fld__lbl">Kota Tujuan</label>
                                                </div>
                                                <input class="c-inp c-inp--small">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="u-float-left u-pad-left--4 u-6of12">
                                    <div class="o-layout">
                                        <div class="o-layout__item u-pad-left--2 u-4of12">
                                            <div class="c-fld">
                                                <div class="c-fld__row">
                                                    <label class="c-fld__lbl">Berangkat</label>
                                                </div>
                                                <div class="c-inp-grp-icon">
                                                    <input value="13-10-2017" class="c-inp c-inp--small u-fg--black u-bg--white"> <i class="c-inp__icon c-icon-duotone c-icon-duotone--calendar"></i></div>
                                            </div>
                                        </div>
                                        <div class="o-layout__item u-pad-left--2 u-4of12">
                                            <div class="c-fld">
                                                <div class="c-fld__row">
                                                    <label class="c-fld__lbl">Penumpang</label>
                                                </div>
                                                <input value="1 Dewasa, 0 Anak, 0 Bayi" class="c-inp c-inp--small u-fg--black u-bg--white">
                                            </div>
                                        </div>
                                        <div class="o-layout__item u-pad-left--2 u-4of12">
                                            <button class="c-btn c-btn--small c-btn--red c-btn--block" style="position: relative; top: 25px;">Cari</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!---->
            <div class="o-container o-container--responsive" style="">
                <!---->
                <!---->
                <!---->
                <div class="u-pad-bottom--5 u-mrgn-bottom--2">
                    <div class="o-layout o-layout--responsive">
                        <div class="o-layout__item u-2of12">
                            <div class="u-mrgn-bottom--3" style="height: 48px; display: none;">&nbsp;</div>
                            <div class="u-pad-right--3 u-pad-top--2">
                                <h3 class="u-txt--fair u-mrgn-bottom--2">Filter</h3>
                                <hr class="u-mrgn-top--2 u-mrgn-bottom--3 u-bg--ash-light">
                                <div class="qa-filter-airline">
                                    <h4 class="u-txt--base u-mrgn-bottom--1 u-txt--bold">Maskapai</h4>
									<?php 

										function sortAirlinesName($a, $b) {
										$pa = $a->airlines_name;
										$pb = $b->airlines_name;
										if ($pa < $pb) return -1;
										if ($pa > $pb) return 1;
										return 0;
										}
										
										usort($data->departures->result, 'sortAirlinesName');

										foreach($data->departures->result as $rows)
										{
										$row=(array)$rows;
											
										$allmaskapai = "$row[airlines_name]";
										$kalimat	 = "$row[airlines_name]";
										$sub_kalimat = substr($kalimat,0,2);
										$nama 		 = ucwords(strtolower($allmaskapai));
										$id = "_airline_filter";
										$isi = "<label class='c-inp-wrap c-inp-wrap--stack'>
												<input type='checkbox' id='$sub_kalimat$id' checked='' onclick='_gaq.push(['_trackEvent', 'Flight_Search_Pergi', 'Flight_Search_Pergi_Change_Airline', '$sub_kalimat;', 1]);' class='c-inp c-inp--checkbox qa-filter-airline-checkbox' value=''> <span class='u-txt--small c-inp__inner-lbl' style='padding-top: 2px;'>$nama</span></label>";
										
										$list = array("$isi<br>");
											sort($list);
											foreach ($list as $k => $v) {
												 if (isset($check)) {
													if ($check === $v) {
														unset($list[$k]);
													}
												 }
												 $check = $v;
											}

											$noDuplicate = array_values($list);

											$test = $noDuplicate[0];
											echo $test;
											
											
											
										}
										
										
										
									?>
                                 
                                </div>
								<hr class="u-mrgn-top--3 u-mrgn-bottom--3 u-bg--ash-light">
                                <div class="qa-filter-departure">
								  <h4 class="u-txt--base u-mrgn-bottom--1 u-txt--bold">Waktu<p id="times" class="pull-right">00.00 - 24.00</p></h4>
                                   
									<div class="turun"></div>
                                    <div id="time-range" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">
										<a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 0%;"></a>
										<a class="ui-slider-handle ui-state-default ui-corner-all" href="#" style="left: 100%;"></a>
										<div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 0%; width: 100%;"></div>
									</div>
									<div class="clear"></div>
									<p class="iclock"><span class="pull-left">Pagi</span><span class="pull-center">Siang</span><span class="pull-right">Malam</span></p>
                                </div>
                                <hr class="u-mrgn-top--3 u-mrgn-bottom--3 u-bg--ash-light">
                                <div class="qa-filter-transit">
                                    <h4 class="u-txt--base u-mrgn-bottom--1 u-txt--bold">Transit</h4>
									
									<?php
									
										function sortStopName($a, $b) {
										$pa = $a->stop;
										$pb = $b->stop;
										if ($pa < $pb) return -1;
										if ($pa > $pb) return 1;
										return 0;
										}
										
										usort($data->departures->result, 'sortStopName');
										foreach($data->departures->result as $rows)
										{
										$row=(array)$rows;
											
										$stop = "$row[stop]";
										
										$stop1 = $stop;
										if ($stop1 =="Langsung"){
											$stop1 ='0';
										} else if ($stop1 =="1 Transit"){
											$stop1 ='1';
										} else if ($stop1 =="2 Transit") {
											$stop1 ='2';
										} else if ($stop1 =="3 Transit"){
											$stop1 ='3';
										}else {
											$stop1 ='4';
										}
										
										$isi = "<label class='c-inp-wrap c-inp-wrap--stack'>
												<input type='checkbox' id='transit_filter_$stop1' checked='' onclick='_gaq.push(['_trackEvent', 'Flight_Search_Pergi', 'Flight_Search_Pergi_Change_Transit', '$stop1', 1]);' class='c-inp c-inp--checkbox qa-filter-$stop1-transit'> <span class='u-txt--small c-inp__inner-lbl' style='padding-top: 2px;'>$stop</span>
												</label>";
												
										
										$list = array("$isi<br>");
											sort($list);
											foreach ($list as $k => $v) {
												 if (isset($check)) {
													if ($check === $v) {
														unset($list[$k]);
													}
												 }
												 $check = $v;
											}

											$noDuplicate = array_values($list);

											$test = $noDuplicate[0];
											echo $test;
											
											
											
										}
																						
									?>
								</div>
                                
                                <hr class="u-mrgn-top--3 u-mrgn-bottom--3 u-bg--ash-light">
                                <div>
                                    <button class="c-btn c-btn--small c-btn--block qa-reset-filter">Reset Filter</button>
                                </div>
                            </div>
                        </div>
                        <div class="o-layout__item u-10of12 u-clearfix">
							<?php 
								$pp = $_GET['c1'];
								if ($pp !="on"){
									echo "";
								}else {?>
								
								<div id="exTab1">	
								<ul  class="nav nav-pills kiri">
								<li class="active"><a  href="#1a" data-toggle="tab">Pergi</a></li>
								<li><a href="#2a" data-toggle="tab">Pulang</a></li>
								</ul>
								<?php } ?>
						
                            <div>
                                <div class="u-pad-left--4 u-pad-right--4">
                                    <div class="o-layout o-layout--responsive">
                                        <div class="o-layout__item u-width-1of5">
                                            <div class="u-pad-top--1 u-pad-bottom--1 u-clearfix">
                                                <div class="u-float-left" style="line-height: 24px; cursor: pointer;">Maskapai</div>
                                                <div class="u-float-left c-icon-duotone c-icon-duotone--medium c-icon-duotone--sort-alt" style="cursor: pointer;"></div>
                                            </div>
                                        </div>
                                        <div class="o-layout__item u-width-1of5">
                                            <div class="u-pad-top--1 u-pad-bottom--1 u-clearfix">
                                                <div class="u-float-left" style="line-height: 24px; cursor: pointer;">Berangkat</div>
                                                <div class="u-float-left c-icon-duotone c-icon-duotone--medium c-icon-duotone--sort-alt" style="cursor: pointer;"></div>
                                            </div>
                                        </div>
                                        <div class="o-layout__item u-width-1of5">
                                            <div class="u-pad-top--1 u-pad-bottom--1 u-clearfix">
                                                <div class="u-float-left" style="line-height: 24px; cursor: pointer;">Tiba</div>
                                                <div class="u-float-left c-icon-duotone c-icon-duotone--medium c-icon-duotone--sort-alt" style="cursor: pointer;"></div>
                                            </div>
                                        </div>
                                        <div class="o-layout__item u-width-1of5">
                                            <div class="u-pad-top--1 u-pad-bottom--1 u-clearfix">
                                                <div class="u-float-left" style="line-height: 24px; cursor: pointer;">Fasilitas</div>
                                                <div class="u-float-left c-icon-duotone c-icon-duotone--medium c-icon-duotone--sort-alt" style="cursor: pointer;"></div>
                                            </div>
                                        </div>
                                        <div class="o-layout__item u-width-1of5">
                                            <div class="u-pad-top--1 u-pad-bottom--1 u-clearfix">
                                                <div class="u-float-right c-icon-duotone c-icon-duotone--medium c-icon-duotone--sort-alt-asc" style="cursor: pointer;"></div>
                                                <div class="u-float-right" style="line-height: 24px; cursor: pointer;">Harga per Orang</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
<div class="tab-content clearfix">
<div class="tab-pane active" id="1a">
 <table class="table outboundTable" id="flight-table">
<?php 

function comparePriceAdult($a, $b) {
$pa = $a->price_adult;
$pb = $b->price_adult;
if ($pa < $pb) return -1;
if ($pa > $pb) return 1;
return 0;
}
$i=0;
usort($data->departures->result, 'comparePriceAdult');
foreach($data->departures->result as $rows){
	$row=(array)$rows;	
	
	$airport_tax = $row ['airport_tax'];
	if ($airport_tax =="0"){
		$airport_tax="";
	}else {
		$airport_tax="<div class='u-clearfix u-mrgn-bottom--2'>
					  <div class='u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--tax'></div>
					  <div class='u-float-left u-txt--small'>Pajak Bandara</div>
					  </div>";
	}
	
	$food = $row['has_food'];
	if ($food =="0"){
		$food="";
	}else {
		$food="<div class='u-clearfix u-mrgn-bottom--2'><div class='u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--food-alt'></div> <div class='u-float-left u-txt--small'>Makanan</div></div>";
	}
	$bagasi = $row['check_in_baggage'];
	if ($bagasi =="0"){
		$bagasi = "";
	}else {
		$bagasi ="<div class='u-clearfix u-mrgn-bottom--2'>
			<div class='u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--baggage'></div>
			<div class='u-float-left u-txt--small'>Bagasi $row[check_in_baggage] $row[check_in_baggage_unit]</div>
			</div>";
	}
	
	$stop = "$row[stop]";
	
	if ($stop =="Langsung"){
	$stop ="0";
	}
	else if ($stop =="1 Transit"){
	$stop ="1";
	}
	else if ($stop =="2 Transit"){
	$stop ="2";
	}
	else if ($stop =="3 Transit"){
		$stop ="3";
	}else {
		$stop ="4";
	}
	$airlinenama = "$row[airlines_name]";
	$namaairline = substr($airlinenama,0,2);
	
	
	$i++;		
?>
 




<tr class="airline_selector" airline=<?php echo $namaairline; ?> stop="<?php echo $stop ?>">
<form method ="post" action="flight/order">
<th>
<div class="c-panel">
   <div class="c-panel__body u-pad-top--3 u-pad-bottom--3">
   <form method ="post" action="flight/order">
      <div class="o-layout o-layout--responsive">
         <div class="o-layout__item u-txt--small u-width-1of5">
			<?php 
				  
 				  $multimaskapai = $row['stop'];	
				  if ($multimaskapai =="Langsung"){?>
					 <div class="c-logo-external-airline u-mrgn-right--2 c-logo-external-airline--<?php echo (strtolower($row['airlines_name'])); ?>"></div>
					  <p class="u-txt--small u-mrgn-bottom--2"><?php echo ucwords(strtolower($row['airlines_name'])); ?></p>
					  
				  <?php } 
				  else { ?>
					  
				  <?php 
				  $airline1 = $row['flight_infos']->flight_info[0]->airlines_name;
				  $airline2 = $row['flight_infos']->flight_info[1]->airlines_name;
				 
				 if ($airline1 == $airline2){?>
					<div class="c-logo-external-airline u-mrgn-right--2 c-logo-external-airline--<?php echo (strtolower($row['airlines_name'])); ?>"></div>
					 <p class="u-txt--small u-mrgn-bottom--2"><?php echo ucwords(strtolower($row['airlines_name'])); ?></p>
				 <?php } 
				 else { ?>
					  <div class="c-logo-external-airline u-mrgn-right--2 c-logo-external-airline--<?php echo (strtolower($row['flight_infos']->flight_info[0]->airlines_name));; ?>"></div>
					  <div class="c-logo-external-airline u-mrgn-right--2 c-logo-external-airline--<?php echo (strtolower($row['flight_infos']->flight_info[1]->airlines_name)); ?>"></div>
					   <p class="u-txt--small u-mrgn-bottom--2">Multi Maskapai</p>
				 <?php } ?>
					  
			<?php }?>
			
           
            <span class="u-fg--red-brand" style="cursor: pointer;"><i class="c-icon c-icon--arrow-dropdown"></i></span> <a data-toggle="collapse" href="#collapseExample<?php echo $i; ?>" class="qa-dep-flight-view-detail">
            Detil penerbangan
            </a>
         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--2">
            <div class="o-layout o-layout--responsive">
               <div class="o-layout__item u-6of12 u-align-right">
                  <p class="u-txt--medium u-mrgn-bottom--0 qa-search-list-etd depart" style="line-height: 25px;">
				  <?php echo $row['simple_departure_time']; ?>
				  </p>
                  <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-origin-city" style="line-height: 17px;"><?php print $data->go_det->dep_airport->short_name;?></p>
                  <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-origin-code" style="line-height: 17px;">(<?php print $data->go_det->dep_airport->airport_code;?>)</p>
               </div>
               <div class="o-layout__item u-6of12 u-align-center" style="padding-top: 4px;">
                  <p class="u-txt--small u-fg--ash-dark u-mrgn-bottom--0"><?php echo $row['duration']; ?></p>
                  <p class="u-mrgn-bottom--0"><span class="c-icon-duotone c-icon-duotone--medium c-icon-duotone--trip-one"></span></p>
                  <p class="u-txt--small u-fg--ash-dark u-mrgn-bottom--0"><?php echo $row['stop']; ?></p>
               </div>
            </div>
         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--2">
            <p class="u-mrgn-bottom--0">
               <span class="u-txt--medium qa-search-list-eta" style="line-height: 25px;"><?php echo $row['simple_arrival_time']; ?></span>
            </p>
            <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-dest-city" style="line-height: 17px;"><?php print $data->go_det->arr_airport->short_name;?></p>
            <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-dest-code" style="line-height: 17px;">(<?php print $data->go_det->arr_airport->airport_code;?>)</p>
         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--4">
            <?php echo $airport_tax; ?>
			<?php echo $food; ?>
			<?php echo $bagasi; ?>
         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--2">
            <p class="u-txt--medium u-align-right u-mrgn-bottom--1 u-txt--bold qa-search-list-fare">Rp <?php echo number_format ($row['price_adult'],0,",",".") ?></p>
			
			<input type ="hidden" name="airlines_name" value="<?php echo ucwords(strtolower($row['airlines_name'])); ?>">
			<input type ="hidden" name="flight_number" value="<?php echo $row['flight_number']; ?>">
			<input type ="hidden" name="simple_departure_time" value="<?php echo $row['simple_departure_time']; ?>">
			<input type ="hidden" name="simple_arrival_time" value="<?php echo $row['simple_arrival_time']; ?>">
			<input type ="hidden" name="departure_flight_date_str" value="<?php echo $row['departure_flight_date_str']; ?>">
			<input type ="hidden" name="arrival_flight_date_str" value="<?php echo $row['arrival_flight_date_str']; ?>">
			<input type ="hidden" name="duration" value="<?php echo $row['duration']; ?>">
			<input type ="hidden" name="departure_city" value="<?php echo $row['departure_city']; ?>">
			<input type ="hidden" name="arrival_city" value="<?php echo $row['arrival_city']; ?>">
			<input type ="hidden" name="departure_city_name" value="<?php echo $row['departure_city_name']; ?>">
			<input type ="hidden" name="arrival_city_name" value="<?php echo $row['arrival_city_name']; ?>">
            <button class="c-btn c-btn--block c-btn--red u-float-right" style="width: 120px;">
			
			<?php
			
			?>
			<?php $tmbl =$_GET['c1']; 
				if ($tmbl !='on'){
					echo "Pilih"; 
					
				}
				else{
					echo "Pilih Pergi";
				} ?></button>
         </div>
      </div>
	  
      <div class="u-pad-top--4 js-search-list-detail collapse" id="collapseExample<?php echo $i; ?>" style="">
         <hr class="u-mrgn-top--0 u-mrgn-bottom--3">
		 
		 <?php
		//looping flight_infos
		foreach($row['flight_infos']->flight_info as $infos){
		$info=(array)$infos;
		
		$namaterminal = $info['terminal'];
		if ($namaterminal !=""){
			$namaterminal = "<div class='u-clearfix u-mrgn-bottom--2'>
			   <div class='u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--plane'></div>
			   <div class='u-float-left u-txt--small'>Terminal $namaterminal</div>
			</div>";
		}else {
			$namaterminal = "";
		}
		
		$transit = 	"$row[stop]";
		if ($transit =="Langsung"){ ?>
			<div class="o-layout o-layout--responsive">
            <div class="o-layout__item u-width-1of5">
               <div class="c-logo-external-airline c-logo-external-airline--<?php echo (strtolower($info['airlines_name'])); ?>"></div>
               <p class="u-txt--small u-mrgn-bottom--1"><?php echo ucwords(strtolower($info['airlines_name'])); ?> | <?php echo $row['flight_number']; ?></p>
               <p class="u-txt--small u-mrgn-bottom--0"><a class="c-link-rd">Refundable</a></p>
            </div>
            <div class="o-layout__item u-width-2of5">
               <div class="o-layout o-layout--responsive">
                  <div class="o-layout__item u-width-1of4 u-pad-top--1 u-align-right">
					<p class="u-txt--medium" style="margin-bottom: 90px;"><?php echo $info['simple_departure_time'];?></p>
					<p class="u-txt--medium u-mrgn-bottom--0"><?php echo $info['simple_arrival_time'];?></p>
				 </div>
                <div class="o-layout__item u-width-3of4 u-pad-top--1 u-clearfix">
				<div class="c-match u-mrgn-top--1 u-float-left"><span class="c-match__head c-match__head--o"></span> <span class="c-match__stick"></span> <span class="c-match__head"></span></div>
				<div class="u-float-left u-mrgn-left--1">
					<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['string_departure_date']; ?></p>
					<p class="u-txt--small u-mrgn-bottom--5 u-fg--charcoal"><?php echo $info['departure_city_name'];?> (<?php echo $info['departure_city']; ?>)</p>
					<p class="u-txt--small u-mrgn-bottom--5 u-fg--ash-dark"><?php echo $info['duration_hour']; ?> <?php echo $info['duration_minute']; ?></p>
					<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['string_arrival_date']; ?></p>
					<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['arrival_city_name'];?> (<?php echo $info['arrival_city'];?>)</p>
				</div>
				</div>
               </div>
            </div>
            <div class="o-layout__item u-width-2of5 u-pad-top--1">
               <div class="u-clearfix u-mrgn-bottom--2">
                  <div class="u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--tax"></div>
                  <div class="u-float-left u-txt--small">Pajak Bandara</div>
               </div>
			   <?php echo $food; ?>
			   <?php echo $bagasi; ?>
			   <?php echo $namaterminal; ?>
            </div>
            <div class="o-layout__item u-12of12">
              
            </div>
         </div>
		 
		 
		<?php }else {?>
			
			<?php
				$katatransit = $info['transit_arrival_text_city'];
				$lamatransit = $info['transit_arrival_text_time'];
				if ($katatransit && $lamatransit !=""){?>
				<div class="o-layout__item u-12of12">
				<div class="o-layout o-layout--responsive">
					<div class="o-layout__item u-3of12 u-push-3of12 u-pad-top--2 u-pad-bottom--2 u-pad-left--0">
						<div class="c-notification c-notification--warning c-notification--small u-inline-block">
						<?php echo $katatransit; ?> <?php echo $lamatransit; ?>
						</div>
					</div>
				</div>
				</div>
				<?php } else {
					echo "";
				}
				?>
			<div class="o-layout o-layout--responsive">
				<div class="o-layout__item u-width-1of5">
				   <div class="c-logo-external-airline c-logo-external-airline--<?php echo (strtolower($info['airlines_name'])); ?>"></div>
				   <p class="u-txt--small u-mrgn-bottom--1"><?php echo ucwords(strtolower($info['airlines_name'])); ?> | <?php echo $info['flight_number']; ?></p>
				   <p class="u-txt--small u-mrgn-bottom--0"><a class="c-link-rd">Refundable</a></p>
				</div>
				<div class="o-layout__item u-width-2of5">
				   <div class="o-layout o-layout--responsive">
					  <div class="o-layout__item u-width-1of4 u-pad-top--1 u-align-right">
						<p class="u-txt--medium" style="margin-bottom: 90px;"><?php echo $info['simple_departure_time']; ?></p>
						<p class="u-txt--medium u-mrgn-bottom--0"><?php echo $info['simple_arrival_time'];?></p>
					 </div>
					<div class="o-layout__item u-width-3of4 u-pad-top--1 u-clearfix">
					<div class="c-match u-mrgn-top--1 u-float-left"><span class="c-match__head c-match__head--o"></span> <span class="c-match__stick"></span> <span class="c-match__head"></span></div>
					<div class="u-float-left u-mrgn-left--1">
						<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['departure_flight_date_str']; ?></p>
					
						<p class="u-txt--small u-mrgn-bottom--5 u-fg--charcoal"><?php echo $info['departure_city_name'];?> (<?php echo $info['departure_city']; ?>)</p>
						<p class="u-txt--small u-mrgn-bottom--5 u-fg--ash-dark"><?php echo $info['duration_hour']; ?> <?php echo $info['duration_minute']; ?></p>
						<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['string_arrival_date']; ?></p>
						<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['arrival_city_name'];?> (<?php echo $info['arrival_city'];?>)</p>
					</div>
					</div>
				   </div>
				</div>
				<div class="o-layout__item u-width-2of5 u-pad-top--1">
				   <div class="u-clearfix u-mrgn-bottom--2">
					  <div class="u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--tax"></div>
					  <div class="u-float-left u-txt--small">Pajak Bandara</div>
				   </div>
				   <?php echo $namaterminal; ?>
				   <?php echo $bagasi; ?>
				</div>
				<div class="o-layout__item u-12of12">
				  
				</div>
			 </div>
			 
		<?php }?>
		
				
				
				
		<?php } ?>
		
        
		 
		<div class="c-panel__footer u-bg--sand-light" style="border-top: 0px;">
      <div class="o-layout o-layout--responsive">
         <div class="o-layout__item u-width-3of5">
            <p class="u-txt--small u-mrgn-bottom--1">Dewasa x <?php echo $_GET['adult']; ?>: Rp <?php echo number_format ($row['price_adult'],0,",",".") ?></p>
            <p class="u-txt--small u-mrgn-bottom--1" style="display: none;">Anak x 0: Rp0</p>
            <p class="u-txt--small u-mrgn-bottom--1" style="display: none;">Bayi x 0: Rp0</p>
            <p class="u-txt--small u-mrgn-bottom--1">Biaya lain: Rp0</p>
         </div>
         <div class="o-layout__item u-width-2of5 u-pad-top--2 u-align-right">
            <p class="u-txt--bold u-mrgn-bottom--1">Harga Total Tiket Pesawat</p>
            <p class="u-mrgn-bottom--0 u-txt--medium">Rp <?php echo number_format ($row['price_value'],0,",",".") ?></p>
         </div>
      </div>
   </div> 
      </div>
   </div>
   
</div>
</th>



</form>	
</tr>					
<?php } ?>
</table>					
</div>


<!--pulang-->
<div class="tab-pane" id="2a">
 <table class="table outboundTable" id="flight-table">
<?php 
function comparePriceAdultp($a, $b) {
$pa = $a->price_adult;
$pb = $b->price_adult;
if ($pa < $pb) return -1;
if ($pa > $pb) return 1;
return 0;
}
$i=0;
usort($data->returns->result, 'comparePriceAdultp');
foreach($data->returns->result as $rows)
{
	$row=(array)$rows;	
	
	$airport_tax = $row ['airport_tax'];
	if ($airport_tax =="0"){
		$airport_tax="";
	}else {
		$airport_tax="<div class='u-clearfix u-mrgn-bottom--2'>
					  <div class='u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--tax'></div>
					  <div class='u-float-left u-txt--small'>Pajak Bandara</div>
					  </div>";
	}
	
	$food = $row['has_food'];
	if ($food =="0"){
		$food="";
	}else {
		$food="<div class='u-clearfix u-mrgn-bottom--2'><div class='u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--food-alt'></div> <div class='u-float-left u-txt--small'>Makanan</div></div>";
	}
	$bagasi = $row['check_in_baggage'];
	if ($bagasi =="0"){
		$bagasi = "";
	}else {
		$bagasi ="<div class='u-clearfix u-mrgn-bottom--2'>
			<div class='u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--baggage'></div>
			<div class='u-float-left u-txt--small'>Bagasi $row[check_in_baggage] $row[check_in_baggage_unit]</div>
			</div>";
	}
	
	$i++;	
		

?>
<tr class="airline_selector">
<th>
<div class="c-panel">
   <div class="c-panel__body u-pad-top--3 u-pad-bottom--3">
      <div class="o-layout o-layout--responsive">
         <div class="o-layout__item u-txt--small u-width-1of5">
			<?php 
				  
 				  $multimaskapai = $row['stop'];	
				  if ($multimaskapai =="Langsung"){?>
					 <div class="c-logo-external-airline u-mrgn-right--2 c-logo-external-airline--<?php echo (strtolower($row['airlines_name'])); ?>"></div>
					  <p class="u-txt--small u-mrgn-bottom--2"><?php echo ucwords(strtolower($row['airlines_name'])); ?></p>
				  <?php } 
				  else { ?>
					  
				  <?php 
				  $airline1 = $row['flight_infos']->flight_info[0]->airlines_name;
				  $airline2 = $row['flight_infos']->flight_info[1]->airlines_name;
				 
				 if ($airline1 == $airline2){?>
					<div class="c-logo-external-airline u-mrgn-right--2 c-logo-external-airline--<?php echo (strtolower($row['airlines_name'])); ?>"></div>
					 <p class="u-txt--small u-mrgn-bottom--2"><?php echo ucwords(strtolower($row['airlines_name'])); ?></p>
				 <?php } 
				 else { ?>
					  <div class="c-logo-external-airline u-mrgn-right--2 c-logo-external-airline--<?php echo (strtolower($row['flight_infos']->flight_info[0]->airlines_name));; ?>"></div>
					  <div class="c-logo-external-airline u-mrgn-right--2 c-logo-external-airline--<?php echo (strtolower($row['flight_infos']->flight_info[1]->airlines_name)); ?>"></div>
					   <p class="u-txt--small u-mrgn-bottom--2">Multi Maskapai</p>
				 <?php } ?>
					  
			<?php }?>
			
           
            <span class="u-fg--red-brand" style="cursor: pointer;"><i class="c-icon c-icon--arrow-dropdown"></i></span> <a data-toggle="collapse" href="#collapseExamplep<?php echo $i; ?>" class="qa-dep-flight-view-detail">
            Detil penerbangan
            </a>
         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--2">
            <div class="o-layout o-layout--responsive">
               <div class="o-layout__item u-6of12 u-align-right">
                <p class="u-txt--medium u-mrgn-bottom--0 qa-search-list-etd depart" style="line-height: 25px;"><?php echo $row['simple_departure_time']; ?></p>
                  <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-origin-city" style="line-height: 17px;"><?php echo $row['departure_city_name']; ?></p>
                  <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-origin-code" style="line-height: 17px;">(<?php echo $row['departure_city']; ?>)</p>
               </div>
               <div class="o-layout__item u-6of12 u-align-center" style="padding-top: 4px;">
                  <p class="u-txt--small u-fg--ash-dark u-mrgn-bottom--0"><?php echo $row['duration']; ?></p>
                  <p class="u-mrgn-bottom--0"><span class="c-icon-duotone c-icon-duotone--medium c-icon-duotone--trip-one"></span></p>
                  <p class="u-txt--small u-fg--ash-dark u-mrgn-bottom--0"><?php echo $row['stop']; ?></p>
               </div>
            </div>
         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--2">
            <p class="u-mrgn-bottom--0">
               <span class="u-txt--medium qa-search-list-eta" style="line-height: 25px;"><?php echo $row['simple_arrival_time']; ?></span> <!---->
            </p>
            <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-dest-city" style="line-height: 17px;"><?php echo $row['arrival_city_name']; ?></p>
            <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-dest-code" style="line-height: 17px;">(<?php echo $row['arrival_city']; ?>)</p>
         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--4">
            <?php echo $airport_tax; ?>
			<?php echo $food; ?>
			<?php echo $bagasi; ?>
         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--2">
            <p class="u-txt--medium u-align-right u-mrgn-bottom--1 u-txt--bold qa-search-list-fare">Rp <?php echo number_format ($row['price_adult'],0,",",".") ?></p>
            <button class="c-btn c-btn--block c-btn--red u-float-right" style="width: 120px;">Pilih Pulang</button>
         </div>
      </div>
      <div class="u-pad-top--4 js-search-list-detail collapse" id="collapseExamplep<?php echo $i; ?>" style="">
         <hr class="u-mrgn-top--0 u-mrgn-bottom--3">
		 
		 <?php
		//looping flight_infos
		foreach($row['flight_infos']->flight_info as $infos){
		$info=(array)$infos;
		
		$namaterminal = $info['terminal'];
		if ($namaterminal !=""){
			$namaterminal = "<div class='u-clearfix u-mrgn-bottom--2'>
			   <div class='u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--plane'></div>
			   <div class='u-float-left u-txt--small'>Terminal $namaterminal</div>
			</div>";
		}else {
			$namaterminal = "";
		}
		
		$transit = 	"$row[stop]";
		if ($transit =="Langsung"){ ?>
			<div class="o-layout o-layout--responsive">
            <div class="o-layout__item u-width-1of5">
               <div class="c-logo-external-airline c-logo-external-airline--<?php echo (strtolower($info['airlines_name'])); ?>"></div>
               <p class="u-txt--small u-mrgn-bottom--1"><?php echo ucwords(strtolower($info['airlines_name'])); ?> | <?php echo $row['flight_number']; ?></p>
               <p class="u-txt--small u-mrgn-bottom--0"><a class="c-link-rd">Refundable</a></p>
            </div>
            <div class="o-layout__item u-width-2of5">
               <div class="o-layout o-layout--responsive">
                  <div class="o-layout__item u-width-1of4 u-pad-top--1 u-align-right">
					<p class="u-txt--medium" style="margin-bottom: 90px;"><?php echo $info['simple_departure_time'];?></p>
					<p class="u-txt--medium u-mrgn-bottom--0"><?php echo $info['simple_arrival_time'];?></p>
				 </div>
                <div class="o-layout__item u-width-3of4 u-pad-top--1 u-clearfix">
				<div class="c-match u-mrgn-top--1 u-float-left"><span class="c-match__head c-match__head--o"></span> <span class="c-match__stick"></span> <span class="c-match__head"></span></div>
				<div class="u-float-left u-mrgn-left--1">
					<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['string_departure_date']; ?></p>
					<p class="u-txt--small u-mrgn-bottom--5 u-fg--charcoal"><?php echo $info['departure_city_name'];?> (<?php echo $info['departure_city']; ?>)</p>
					<p class="u-txt--small u-mrgn-bottom--5 u-fg--ash-dark"><?php echo $info['duration_hour']; ?> <?php echo $info['duration_minute']; ?></p>
					<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['string_arrival_date']; ?></p>
					<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['arrival_city_name'];?> (<?php echo $info['arrival_city'];?>)</p>
				</div>
				</div>
               </div>
            </div>
            <div class="o-layout__item u-width-2of5 u-pad-top--1">
               <div class="u-clearfix u-mrgn-bottom--2">
                  <div class="u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--tax"></div>
                  <div class="u-float-left u-txt--small">Pajak Bandara</div>
               </div>
			   <?php echo $food; ?>
			   <?php echo $bagasi; ?>
			   <?php echo $namaterminal; ?>
            </div>
            <div class="o-layout__item u-12of12">
               <!---->
            </div>
         </div>
		 
		 
		<?php }else {?>
			
			<?php
				$katatransit = $info['transit_arrival_text_city'];
				$lamatransit = $info['transit_arrival_text_time'];
				if ($katatransit && $lamatransit !=""){?>
				<div class="o-layout__item u-12of12">
				<div class="o-layout o-layout--responsive">
					<div class="o-layout__item u-3of12 u-push-3of12 u-pad-top--2 u-pad-bottom--2 u-pad-left--0">
						<div class="c-notification c-notification--warning c-notification--small u-inline-block">
						<?php echo $katatransit; ?> <?php echo $lamatransit; ?>
						</div>
					</div>
				</div>
				</div>
				<?php } else {
					echo "";
				}
				?>
			<div class="o-layout o-layout--responsive">
				<div class="o-layout__item u-width-1of5">
				   <div class="c-logo-external-airline c-logo-external-airline--<?php echo (strtolower($info['airlines_name'])); ?>"></div>
				   <p class="u-txt--small u-mrgn-bottom--1"><?php echo ucwords(strtolower($info['airlines_name'])); ?> | <?php echo $info['flight_number']; ?></p>
				   <p class="u-txt--small u-mrgn-bottom--0"><a class="c-link-rd">Refundable</a></p>
				</div>
				<div class="o-layout__item u-width-2of5">
				   <div class="o-layout o-layout--responsive">
					  <div class="o-layout__item u-width-1of4 u-pad-top--1 u-align-right">
						<p class="u-txt--medium" style="margin-bottom: 90px;"><?php echo $info['simple_departure_time']; ?></p>
						<p class="u-txt--medium u-mrgn-bottom--0"><?php echo $info['simple_arrival_time'];?></p>
					 </div>
					<div class="o-layout__item u-width-3of4 u-pad-top--1 u-clearfix">
					<div class="c-match u-mrgn-top--1 u-float-left"><span class="c-match__head c-match__head--o"></span> <span class="c-match__stick"></span> <span class="c-match__head"></span></div>
					<div class="u-float-left u-mrgn-left--1">
						<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['departure_flight_date_str']; ?></p>
						<p class="u-txt--small u-mrgn-bottom--5 u-fg--charcoal"><?php echo $info['departure_city_name'];?> (<?php echo $info['departure_city']; ?>)</p>
						<p class="u-txt--small u-mrgn-bottom--5 u-fg--ash-dark"><?php echo $info['duration_hour']; ?> <?php echo $info['duration_minute']; ?></p>
						<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['string_arrival_date']; ?></p>
						<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal"><?php echo $info['arrival_city_name'];?> (<?php echo $info['arrival_city'];?>)</p>
					</div>
					</div>
				   </div>
				</div>
				<div class="o-layout__item u-width-2of5 u-pad-top--1">
				   <div class="u-clearfix u-mrgn-bottom--2">
					  <div class="u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--tax"></div>
					  <div class="u-float-left u-txt--small">Pajak Bandara</div>
				   </div>
				   <?php echo $namaterminal; ?>
				   <?php echo $bagasi; ?>
				</div>
				<div class="o-layout__item u-12of12">
				   <!---->
				</div>
			 </div>
			 
		<?php }?>
		
				
				
				
		<?php } ?>
		
        
		 
		<div class="c-panel__footer u-bg--sand-light" style="border-top: 0px;">
      <div class="o-layout o-layout--responsive">
         <div class="o-layout__item u-width-3of5">
            <p class="u-txt--small u-mrgn-bottom--1">Dewasa x <?php echo $_GET['adult']; ?>: Rp <?php echo number_format ($row['price_adult'],0,",",".") ?></p>
            <p class="u-txt--small u-mrgn-bottom--1" style="display: none;">Anak x 0: Rp0</p>
            <p class="u-txt--small u-mrgn-bottom--1" style="display: none;">Bayi x 0: Rp0</p>
            <p class="u-txt--small u-mrgn-bottom--1">Biaya lain: Rp0</p>
         </div>
         <div class="o-layout__item u-width-2of5 u-pad-top--2 u-align-right">
            <p class="u-txt--bold u-mrgn-bottom--1">Harga Total Tiket Pesawat</p>
            <p class="u-mrgn-bottom--0 u-txt--medium">Rp <?php echo number_format ($row['price_value'],0,",",".") ?></p>
         </div>
      </div>
   </div> 
      </div>
   </div>
   
</div>
</th>
</tr>
<?php } ?>
</table>
</div>
</div>
                                </div>
                                <div style="display: none;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!---->
        </div>
        <!---->
    </div>