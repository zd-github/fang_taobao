<?php 
	$name=$_POST['uname'];
	$password=$_POST['upsd'];

	$arr=['name'=>'root','password'=>'123456'];
	if ($name==$arr['name'] && $password==$arr['password']) {
		echo "login success!!";
	}else{
		echo "fail to login!!";
		echo "---提示---用户名：root ,密码：123456";
	}

 ?>