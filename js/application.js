$('#chapters a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$( document ).ready(function() {
	$('#chapters a[href="#intro"]').tab('show');
});
