$( document ).ready(function() {

function original() {
       $('.right_diff_del').show()
       $('.left_diff_del').show()
       $('.right_diff_change').show()
       $('.left_diff_change').show()
       $('.right_diff_add').show()
       $('.left_diff_add').show()
       $('.lineno_rightadd').show()
       $('.lineno_leftadd').show()
       $('.lineno_rightdel').show()
       $('.lineno_leftdel').show()
       $('.lineno_rightchange').show()
       $('.lineno_leftchange').show()
       $('.left_diff_no_change').show()
       $('.right_diff_no_change').show()
       $('.lineno_nochange').show()
}

  // selector cache
  var
    $showadded  = $('.menuoption#showadded'),
    $showmodified  = $('.menuoption#showmodified'),
    $showdeleted  = $('.menuoption#showdeleted');
    $showaddeddeletedmodified  = $('.menuoption#showaddeddeletedmodified');

  $showadded.state = false
  $showadded.on("click", function(){
    switch ($showadded.state) {
    case false:
	original()
        $showadded.state = true
        break;
    case true:
       $('.right_diff_del').hide()
       $('.left_diff_del').hide()
       $('.right_diff_change').hide()
       $('.left_diff_change').hide()
       $('.lineno_rightdel').hide()
       $('.lineno_leftdel').hide()
       $('.lineno_rightchange').hide()
       $('.lineno_leftchange').hide()
       $('.left_diff_no_change').hide()
       $('.right_diff_no_change').hide()
       $('.lineno_nochange').hide()
       $showadded.state = false
        break;
      }
  });

  $showmodified.state = false
  $showmodified.on("click", function(){
    switch ($showmodified.state) {
    case false:
	original()
       $showmodified.state = true
        break;
    case true:
       $('.right_diff_del').hide()
       $('.left_diff_del').hide()
       $('.right_diff_add').hide()
       $('.left_diff_add').hide()
       $('.lineno_rightadd').hide()
       $('.lineno_leftadd').hide()
       $('.lineno_rightdel').hide()
       $('.lineno_leftdel').hide()
       $('.left_diff_no_change').hide()
       $('.right_diff_no_change').hide()
       $('.lineno_nochange').hide()
       $showmodified.state = false
        break;
      }
  });


  $showdeleted.state = false
  $showdeleted.on("click", function(){
    switch ($showdeleted.state) {
    case false:
	original()
        $showdeleted.state = true
        break;
    case true:
       $('.right_diff_change').hide()
       $('.left_diff_change').hide()
       $('.right_diff_add').hide()
       $('.left_diff_add').hide()
       $('.lineno_rightadd').hide()
       $('.lineno_leftadd').hide()
       $('.lineno_rightchange').hide()
       $('.lineno_leftchange').hide()
       $('.left_diff_no_change').hide()
       $('.right_diff_no_change').hide()
       $('.lineno_nochange').hide()
       $showdeleted.state = false
        break;
      }
  });

  $showaddeddeletedmodified.state = false
  $showaddeddeletedmodified.on("click", function(){
    switch ($showaddeddeletedmodified.state) {
    case false:
	original()
        $showaddeddeletedmodified.state = true
        break;
    case true:
       $('.left_diff_no_change').hide()
       $('.right_diff_no_change').hide()
       $('.lineno_nochange').hide()
       $showaddeddeletedmodified.state = false
        break;
      }
  });

});
