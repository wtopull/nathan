<?php
	include "header.php";
	$conn = new mysqli("localhost","asd","asdasd","my_item");
	$conn->query('set names utf8');
	if($conn->connect_error){
		die("NO");
	}
	$showid = 0;
	$key="";
	if(!empty($_GET["showid"])){
		$showid = $_GET["showid"];
	}
	$sql = "select*from wenzhang where ac_id='$showid' ";
	$result = $conn->query($sql);
	if($result->num_rows>0){
		while($row=$result->fetch_assoc()){
?>
    <ol class="breadcrumb">
      <li><a href="index.php">首页</a></li>
      <li><a href="list.php?listid=<?php echo $row["ac_column"];?>"><?php echo $row["ac_column"];?></a></li>
      <li class="active"><?php echo $row["ac_title"];?></li>
    </ol>
	<div class="projects-header page-header">
       <h2 class="text-center"><?php echo $row["ac_title"];?></h2>
       <p class="text-center">发布日期：<span class=" alert-info"><?php echo $row["ac_date"];?></span></p>
    </div>
    <div class="textIndet">
    	<?php echo $row["ac_content"];?>
    </div>	
    	<?php
				$key = $row["ac_keyword"];
        		}
			}else{
				echo "<h3>查询的文章不存在</h3>";	
			}
		?>
　　		<div class="list-group">
          	<a class="list-group-item list-group-item-success" href="category.php">相关文章</a>
          	<?php
          		$keysql="SELECT * FROM wenzhang WHERE ac_keyword='$key' limit 5";
				$keyresult = $conn->query($keysql);
				if($keyresult->num_rows>0){
					while($krow = $keyresult->fetch_assoc()){
		  ?>
          	<a href="show.php?showid=<?php echo $krow["ac_id"];?>" class="list-group-item"><span class="glyphicon glyphicon-star-empty"></span><?php echo $krow["ac_title"]; ?></a>
         	<?php
          			}
				}else{
			   		echo "未发现相关文章";
				}
		 	?>
        </div>
<?php
	include "footer.php";
?>