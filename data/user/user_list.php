<?php
/**
*分页显示所有的笔记本商品信息
*/
header('Content-Type: application/json;charset=UTF-8');
require_once('../init.php');


$sql = "SELECT * FROM sc_user ";
$result = mysqli_query($conn,$sql);

if(!$result){      //SQL语句执行失败
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $list = mysqli_fetch_all($result, MYSQLI_ASSOC);
  $output['data'] = $list;
  echo json_encode($output);
}