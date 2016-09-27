<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
</head>
<?php
 if(isset($_GET["sub"])){
	 $num=0;
	 switch($_GET["sel"]){
		 case "+": $num=$_GET["num1"]+$_GET["num2"] ; break;
		 case "-": $num=$_GET["num1"]-$_GET["num2"] ; break;
		 case "x": $num=$_GET["num1"]*$_GET["num2"] ; break;
		 case "/": $num=$_GET["num1"]/$_GET["num2"] ; break;
		 case "%": $num=$_GET["num1"]%$_GET["num2"] ; break;
		 
	 }
?>
<body>

 <table border="1" align="center" width="600">
  <caption><h3>简单计算器</h3></caption>
  <form action="简单计算.php">
  <tr>
   <td><input name="num1" type="text"/></td>
   <td>
   	<select name="sel" >
       <option value="+">+</option>
       <option value="-">-</option>
       <option value="x">x</option>
       <option value="/">/</option>
       <option value="%">%</option>
     </select>
   </td>
   <td> <input name="num2" type="text"/></td>
   <td><input type="submit" name="sub" value="计算"/></td>
  </tr>
  
   </td>
  </tr>
  <?php
  if(isset($_GET["sub"])){
	  echo '<tr><td colspan="4">';
	  echo "结果：".$_GET["num1"]."".$_GET["sel"]."".$_GET["num2"]."=".$sum;
	  echo "</td></tr>";
	  }
  
?>
</form>
</table>


</body>
</html>