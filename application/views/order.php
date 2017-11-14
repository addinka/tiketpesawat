<?php 
$nama_airlines 				= $_POST['airlines_name'];
$flight_number 				= $_POST['flight_number'];
$simple_departure_time 		= $_POST['simple_departure_time'];
$simple_arrival_time		= $_POST['simple_arrival_time'];
$departure_flight_date_str 	= $_POST['departure_flight_date_str'];
$arrival_flight_date_str 	= $_POST['arrival_flight_date_str'];
$duration 					= $_POST['duration'];
$departure_city 			= $_POST['departure_city'];
$arrival_city 				= $_POST['arrival_city'];
$departure_city_name 		= $_POST['departure_city_name'];
$arrival_city_name 			= $_POST['arrival_city_name'];
?>
<div class="u-bg--sand">
<section class="o-container o-container--responsive">
   <div class="c-notification c-notification--warning u-mrgn-bottom--3 u-pad-left--4 u-pad-right--4">
      <div class="o-flag o-flag--tiny">
         <div class="o-flag__head"><span class="c-icon c-icon--info"></span></div>
         <div class="o-flag__body"> Pastikan email &amp; nomor telepon kontak kamu benar. E-tiket dan ringkasan tiket akan dikirimkan ke email &amp; nomor telepon kontak yang kamu daftarkan. </div>
      </div>
   </div>
   <div class="o-layout">
      <div class="o-layout__item u-7of12">
         <div class="u-display-transition">
            <div class="c-panel u-mrgn-bottom--4">
               <div class="c-panel__head">
                  <div class="c-panel__title">Kontak yang Dapat Dihubungi</div>
               </div>
               <div class="c-panel__body">
                  <div class="o-layout">
                     <div class="o-layout__item u-3of12">
                        <div class="c-fld js-field-title">
                           <div class="c-fld__row"><label class="c-fld__lbl">Titel</label></div>
                           <select class="c-inp qa-contact-title">
                              <option value="" disabled="disabled">Pilih</option>
                              <option value="MR">Mr</option>
                              <option value="MRS">Mrs</option>
                              <option value="MS">Ms</option>
                           </select>
                           <div class="c-fld__error is-hidden"></div>
                        </div>
                     </div>
                     <div class="o-layout__item u-9of12">
                        <div class="c-fld js-field-name">
                           <div class="c-fld__row"><label class="c-fld__label">Nama Lengkap (Sesuai tanda pengenal)</label></div>
                           <input name="buyerName" data-vv-as="Nama" data-vv-rules="required|alpha_spaces|min:2" class="c-inp qa-contact-fullname"> 
                           <div class="c-fld__error is-hidden"></div>
                        </div>
                     </div>
                  </div>
                  <div class="o-layout">
                     <div class="o-layout__item u-6of12">
                        <div class="c-fld js-field-email">
                           <div class="c-fld__row"><label class="c-fld__lbl">Email</label></div>
                           <input name="buyerEmail" data-vv-as="Email" data-vv-rules="required|email" class="c-inp qa-contact-email"> 
                           <div class="c-fld__hint">Contoh: email@example.com</div>
                           <div class="c-fld__error is-hidden"></div>
                        </div>
                     </div>
                     <div class="o-layout__item u-6of12">
                        <div class="c-fld js-field-phone-number">
                           <div class="c-fld__row"><label class="c-fld__lbl">No. Telepon</label></div>
                           <div class="c-inp-grp-table">
                              <div class="c-inp__ctx">+62</div>
                              <input name="buyerPhoneNumber" data-vv-as="No. Telepon" data-vv-rules="required" class="c-inp qa-contact-phone">
                           </div>
                           <div class="c-fld__error is-hidden"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="c-panel u-mrgn-bottom--4">
               <div class="c-panel__head">
                  <div class="c-panel__title">Data Penumpang</div>
               </div>
               <div class="c-panel__body u-pad-bottom--1">
                  <div data-split-form="normal" class="u-clearfix">
                     <!----> 
                     <div class="o-layout u-mrgn-bottom--4">
                        <div class="o-layout__item u-clearfix">
                           <div class="u-float-left"><span class="u-txt--bold">Dewasa 1</span></div>
                           <div class="u-float-right"><label class="c-inp-wrap c-inp-wrap--stack"><input type="checkbox" class="c-inp c-inp--checkbox qa-passenger-adults-checkbox-0"> <span class="c-inp__inner-lbl">Samakan dengan kontak</span></label></div>
                        </div>
                     </div>
                     <div class="o-layout">
                        <div class="o-layout__item u-3of12">
                           <div class="c-fld js-field-title">
                              <div class="c-fld__row"><label class="c-fld__lbl">Titel</label></div>
                              <select class="c-inp qa-passenger-adults-title-0">
                                 <option disabled="disabled" value="">Pilih</option>
                                 <option value="MR">Mr</option>
                                 <option value="MRS">Mrs</option>
                                 <option value="MS">Ms</option>
                              </select>
                              <div class="c-fld__error is-hidden">Pilih satu</div>
                           </div>
                        </div>
                        <div class="o-layout__item u-9of12">
                           <div class="c-fld js-field-name">
                              <div class="c-fld__row"><label class="c-fld__lbl">Nama Lengkap (Sesuai tanda pengenal)</label></div>
                              <div class="c-dropdown c-dropdown--left">
                                 <input data-vv-rules="required|alpha_spaces|min:2" name="name" data-vv-as="Nama" class="c-inp js-passenger-name-input qa-passenger-adults-fullname-0 qa-passenger-dropdown-input-passenger-adults-0" readonly=""> 
                                 <div class="c-dropdown__outer">
                                    <div class="c-dropdown__inner" style="width: 300px;">
                                       <ul class="c-list-ui c-list-ui--link c-list-ui--grouped c-list-ui--scrollable c-list-ui--darker-focus u-pad--0"></ul>
                                    </div>
                                 </div>
                                 <div class="c-fld__error is-hidden">  </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!----> <!----> <!----> <!----> <!---->
                  </div>
               </div>
            </div>
            <div class="c-panel u-mrgn-bottom--4">
               <div class="c-panel__head">
                  <div class="c-panel__title">Ringkasan Pembayaran</div>
               </div>
               <div class="c-panel__body">
                  <div class="u-clearfix u-mrgn-bottom--1">
                     <div class="u-float-left">Dewasa x 1</div>
                     <div class="u-float-right">Rp513.700</div>
                  </div>
                  <div class="u-clearfix u-mrgn-bottom--1" style="display: none;">
                     <div class="u-float-left">Anak x 0</div>
                     <div class="u-float-right">Rp0</div>
                  </div>
                  <div class="u-clearfix u-mrgn-bottom--1" style="display: none;">
                     <div class="u-float-left">Bayi x 0</div>
                     <div class="u-float-right">Rp0</div>
                  </div>
                  <div class="u-clearfix u-mrgn-bottom--1">
                     <div class="u-float-left">Biaya Lain</div>
                     <div class="u-float-right">Rp0</div>
                  </div>
                  <hr class="u-mrgn-top--3 u-mrgn-bottom--3 u-bg--ash-light">
                  <div class="u-clearfix u-mrgn-bottom--3 u-txt--medium">
                     <div class="u-float-left"><span class="u-txt--bold">Total Belanja</span></div>
                     <div class="u-float-right"><span class="u-txt-price u-fg--red-brand qa-total-fare">Rp513.700</span></div>
                  </div>
                  <button class="js-button-book-flight c-btn c-btn--block c-btn--red">Lanjut Ke Pembayaran</button>
               </div>
               <!----> 
               <form id="js-v-transaction-form" action="/payment/invoices/create" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&amp;#x2713;"><input type="hidden" name="authenticity_token" value="T6synrkoROwx41h1jilgNsOD+0gEZ50rDG8uHZYfQJ8BCjJUQdHQtFrtyuMKaGKHoUHrwtgXNxHcHgVkJgGugA=="> <input name="transactions[][id]" type="hidden" class="js-payment-id qa-go-to-payment"> <input name="transactions[][type]" type="hidden" value="flight"></form>
            </div>
         </div>
      </div>
      <div class="o-layout__item u-5of12">
         <div class="c-panel u-mrgn-bottom--4">
            <div class="c-panel__body">
               <div class="o-layout">
                  <div class="o-layout__item u-clearfix">
                     <div class="u-float-left u-pad-top--2 u-pad-left--1">
                        <div class="c-icon-duotone c-icon-duotone--large c-icon-duotone--hourglass"></div>
                     </div>
                     <div class="u-float-left u-txt--small u-fg--ash u-mrgn-left--4">
                        Sisa waktu isi data &amp; pembayaran
                        <br> <span class="u-fg--red-brand u-txt--medium u-txt--bold">
                        14 Menit 13 Detik
                        </span> <br>
                        Sampai dengan 12:58
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!----> <!----> <!----> 
         <div class="c-panel u-mrgn-bottom--4">
            <div class="c-panel__head">
               <div class="c-panel__title">Rincian Perjalanan</div>
            </div>
            <div class="c-panel__body">
               <div class="o-layout">
                  <div class="o-layout__item u-width-2of5">
                     <div class="c-logo-external-airline c-logo-external-airline--<?php echo(strtolower($nama_airlines)) ; ?>"></div>
                     <p class="u-txt--small u-mrgn-bottom--2"><span class="qa-trip-airline"><?php echo $nama_airlines; ?></span> <span class="u-fg--ash-dark">|</span> <span class="qa-trip-airline-code"><?php echo $flight_number; ?></span></p>
                  </div>
                  <div class="o-layout__item u-width-3of5 u-clearfix">
                     <div class="u-float-left u-mrgn-right--2 u-pad-top--1">
                        <p class="u-txt--medium qa-trip-etd-time" style="margin-bottom: 90px;"><?php echo $simple_departure_time; ?></p>
                        <p class="u-txt--medium u-mrgn-bottom--0 qa-trip-eta-time"><?php echo $simple_arrival_time; ?></p>
                     </div>
                     <div class="u-float-left u-pad-top--1">
                        <div class="c-match u-mrgn-top--1"><span class="c-match__head c-match__head--o"></span> <span class="c-match__stick"></span> <span class="c-match__head"></span></div>
                     </div>
                     <div class="u-float-left u-mrgn-left--1">
                        <p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal qa-trip-etd-date"><?php echo $departure_flight_date_str; ?></p>
                        <p class="u-txt--small u-mrgn-bottom--5 u-fg--charcoal qa-trip-origin"><?php echo $departure_city_name; ?> (<?php echo $departure_city; ?>)</p>
                        <p class="u-txt--small u-mrgn-bottom--5 u-fg--ash-dark qa-trip-duration"><?php echo $duration; ?></p>
                        <p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal qa-trip-eta-date"><?php echo $arrival_flight_date_str; ?></p>
                        <p class="u-txt--small u-mrgn-bottom--0 u-fg--charcoal qa-trip-destination"><?php echo $arrival_city_name; ?> (<?php echo $arrival_city; ?>)</p>
                     </div>
                  </div>
                  <!---->
               </div>
            </div>
         </div>
         <!----> <!---->
      </div>
   </div>
</section>
</div>