<form style="position: absolute; top: 0; right: 0;" action="add_weight.php" method="post">
    <p>Date</p>
    <input type="date" required name="date" value="<?php echo date("Y-m-d"); ?>" readonly/>

    <p>Weight</p>
    <input type="text" maxlength="5" required id="weight" name="weight" autofocus/><br/><br/>
    <input type="submit"/>
</form>