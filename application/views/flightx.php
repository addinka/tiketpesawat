<?php 
foreach($data->returns->result as $rows){
	$row=(array)$rows;	
	$nama_airlines = $row['airlines_name'];
	}
	
?>

<div class="c-panel">
   <div class="c-panel__body u-pad-top--3 u-pad-bottom--3">
      <div class="o-layout o-layout--responsive">
         <div class="o-layout__item u-txt--small u-width-1of5">
								 <div class="c-logo-external-airline u-mrgn-right--2 c-logo-external-airline--airasia"></div>
					  <p class="u-txt--small u-mrgn-bottom--2">Airasia</p>
				  			
           
            <span class="u-fg--red-brand" style="cursor: pointer;"><i class="c-icon c-icon--arrow-dropdown"></i></span> <a data-toggle="collapse" href="#collapseExample1" class="qa-dep-flight-view-detail">
            Detil penerbangan
            </a>
         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--2">
            <div class="o-layout o-layout--responsive">
               <div class="o-layout__item u-6of12 u-align-right">
                  <p class="u-txt--medium u-mrgn-bottom--0 qa-search-list-etd depart" style="line-height: 25px;">
				  22:50				  </p>
                  <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-origin-city" style="line-height: 17px;">Jakarta</p>
                  <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-origin-code" style="line-height: 17px;">(CGK)</p>
               </div>
               <div class="o-layout__item u-6of12 u-align-center" style="padding-top: 4px;">
                  <p class="u-txt--small u-fg--ash-dark u-mrgn-bottom--0">1 j 50 m</p>
                  <p class="u-mrgn-bottom--0"><span class="c-icon-duotone c-icon-duotone--medium c-icon-duotone--trip-one"></span></p>
                  <p class="u-txt--small u-fg--ash-dark u-mrgn-bottom--0">Langsung</p>
               </div>
            </div>
         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--2">
            <p class="u-mrgn-bottom--0">
               <span class="u-txt--medium qa-search-list-eta" style="line-height: 25px;">01:40</span>
            </p>
            <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-dest-city" style="line-height: 17px;">Denpasar</p>
            <p class="u-txt--small u-fg--charcoal u-mrgn-bottom--0 qa-search-list-dest-code" style="line-height: 17px;">(DPS)</p>
         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--4">
            <div class="u-clearfix u-mrgn-bottom--2">
					  <div class="u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--tax"></div>
					  <div class="u-float-left u-txt--small">Pajak Bandara</div>
					  </div>						<div class="u-clearfix u-mrgn-bottom--2">
			<div class="u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--baggage"></div>
			<div class="u-float-left u-txt--small">Bagasi 15 Kg</div>
			</div>         </div>
         <div class="o-layout__item u-width-1of5 u-pad-top--2">
            <p class="u-txt--medium u-align-right u-mrgn-bottom--1 u-txt--bold qa-search-list-fare">Rp 528.100</p>
            <button class="c-btn c-btn--block c-btn--red u-float-right" style="width: 120px;">Pilih Pergi</button>
         </div>
      </div>
      <div class="u-pad-top--4 js-search-list-detail collapse" id="collapseExample1" style="">
         <hr class="u-mrgn-top--0 u-mrgn-bottom--3">
		 
		 			<div class="o-layout o-layout--responsive">
            <div class="o-layout__item u-width-1of5">
               <div class="c-logo-external-airline c-logo-external-airline--airasia"></div>
               <p class="u-txt--small u-mrgn-bottom--1">Airasia | QZ-7534</p>
               <p class="u-txt--small u-mrgn-bottom--0"><a class="c-link-rd">Refundable</a></p>
            </div>
            <div class="o-layout__item u-width-2of5">
               <div class="o-layout o-layout--responsive">
                  <div class="o-layout__item u-width-1of4 u-pad-top--1 u-align-right">
					<p class="u-txt--medium" style="margin-bottom: 90px;">22:50</p>
					<p class="u-txt--medium u-mrgn-bottom--0">01:40</p>
				 </div>
                <div class="o-layout__item u-width-3of4 u-pad-top--1 u-clearfix">
				<div class="c-match u-mrgn-top--1 u-float-left"><span class="c-match__head c-match__head--o"></span> <span class="c-match__stick"></span> <span class="c-match__head"></span></div>
				<div class="u-float-left u-mrgn-left--1">
					<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal">Kamis, 16 Nov 2017</p>
					<p class="u-txt--small u-mrgn-bottom--5 u-fg--charcoal">Jakarta (CGK)</p>
					<p class="u-txt--small u-mrgn-bottom--5 u-fg--ash-dark">1j 50m</p>
					<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal">Jumat, 17 Nov 2017</p>
					<p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal">Denpasar (DPS)</p>
				</div>
				</div>
               </div>
            </div>
            <div class="o-layout__item u-width-2of5 u-pad-top--1">
               <div class="u-clearfix u-mrgn-bottom--2">
                  <div class="u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--tax"></div>
                  <div class="u-float-left u-txt--small">Pajak Bandara</div>
               </div>
			   			   <div class="u-clearfix u-mrgn-bottom--2">
			<div class="u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--baggage"></div>
			<div class="u-float-left u-txt--small">Bagasi 15 Kg</div>
			</div>			   <div class="u-clearfix u-mrgn-bottom--2">
			   <div class="u-float-left u-mrgn-right--1 c-icon-duotone c-icon-duotone--plane"></div>
			   <div class="u-float-left u-txt--small">Terminal 2F</div>
			</div>            </div>
            <div class="o-layout__item u-12of12">
              
            </div>
         </div>
		 
		 
				
				
				
				
				
        
		 
		<div class="c-panel__footer u-bg--sand-light" style="border-top: 0px;">
      <div class="o-layout o-layout--responsive">
         <div class="o-layout__item u-width-3of5">
            <p class="u-txt--small u-mrgn-bottom--1">Dewasa x 1: Rp 528.100</p>
            <p class="u-txt--small u-mrgn-bottom--1" style="display: none;">Anak x 0: Rp0</p>
            <p class="u-txt--small u-mrgn-bottom--1" style="display: none;">Bayi x 0: Rp0</p>
            <p class="u-txt--small u-mrgn-bottom--1">Biaya lain: Rp0</p>
         </div>
         <div class="o-layout__item u-width-2of5 u-pad-top--2 u-align-right">
            <p class="u-txt--bold u-mrgn-bottom--1">Harga Total Tiket Pesawat</p>
            <p class="u-mrgn-bottom--0 u-txt--medium">Rp 528.100</p>
         </div>
      </div>
   </div> 
      </div>
   </div>
   
</div>