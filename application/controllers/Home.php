<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index(){
	
	$data = array(
			'title' => 'Tiket Pesawat Murah',
			//'logo' => $setting[0]['value'],
			//'keyword'=>$keyword,
			//'description'=>$description,
			//'product_depan' => $this->modelpage->GetPro_depan("where status_kategory = '1' limit 8 ")->result_array()
	);
	//$this->template->load("home","content",$data);
	$this->load->view('header',$data);
	
	$this->load->view('footer');
  }
	
   public function flight(){
	   echo "Halaman Flight";
	   
   }	

}



