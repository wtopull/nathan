<?php
	namespace Home\Controller;
	use Think\Controller;
//	use Think\Verify;
	class IndexController extends Controller {
	    public function index(){
			define('CSS_URL', '/shop/Public/css/Index/');
			define('CSS_IMG', '/shop/Public/image/');
	    	$this->display();
	    }
		function verifyImg(){
			$cfg = array(
				'imageH'    =>  100,               // 验证码图片高度
				'imageW'    =>  30,               // 验证码图片宽度
		        'length'    =>  4,               // 验证码位数
		        'fontttf'   =>  '4.ttf',              // 验证码字体，不设置随机获取
			);
			$very = new \Think\Verify($cfg);
			$very -> entry();
		}
	}