<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Flight extends CI_Controller {

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
			'title' => 'Tiket Pesawat Murahan',
			//'logo' => $setting[0]['value'],
			//'keyword'=>$keyword,
			//'description'=>$description,
			//'product_depan' => $this->modelpage->GetPro_depan("where status_kategory = '1' limit 8 ")->result_array()
			
	);
	//$this->template->load("home","content",$data);
	$this->load->view('header',$data);
	$context = stream_context_create(array(
	'http' => array(
	'header' => 'Host: api.tiket.com'
	)
	));
	$url     = "https://api.tiket.com/apiv1/payexpress?method=getToken&secretkey=b97ac0e9c1d0c4ccf60a8de679406a12&output=json";
	$data    = json_decode(file_get_contents($url, 0, $context));
	$token  = $data->token;
	$_SESSION['token'] = "$token";
	$this->load->view('vflight');
	$this->load->view('footer');
	}
	
	public function order(){
	$data = array(
			'title' => 'Tiket Pesawat Murahan',
			//'logo' => $setting[0]['value'],
			//'keyword'=>$keyword,
			//'description'=>$description,
			//'product_depan' => $this->modelpage->GetPro_depan("where status_kategory = '1' limit 8 ")->result_array()
			
	);
	$this->load->view('header',$data);
	
	$this->load->view('order');
	$this->load->view('footer');	
	}
  

}



