<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
	</main><!-- #site-content -->

	<footer id="site-footer" role="contentinfo">
	</footer><!-- #site-footer -->

	<!-- js -->
	  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="<?= base_url('assets/bootstrap-3.3.7/dist/js/bootstrap.min.js') ?>"></script>
	<script src="<?= base_url('assets/js/script.js') ?>"></script>
	<script src="<?= base_url('assets/js/search-result.js') ?>"></script>
	
	
	<script src="<?= base_url('assets/js/jquery-ui.min.js') ?>"</script>
	<script src="<?= base_url('assets/js/bootstrap-datetimepicker.min.js') ?>"</script>

	<script type="text/javascript">
		$(function() {

			$(".chzn-select2").chosen({
				disable_search_threshold: 10
			});
			$(".chzn-select").chosen();
			$('#flightSlider').carousel({
				interval: 5000
			});
		});
	</script>

</body>
</html>