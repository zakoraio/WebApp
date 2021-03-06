var tabrowTemplate = '<tr>'+
					  	  '<td class="tabletext">studentname</td>'+
					  	  '<td class="tabletext">comment</td>'+	
					  	  '<td class="tabletext">Teaching</td>'+
					  	  '<td class="tabletext">Knowledge</td>'+
					  	  '<td class="tabletext">Interaction</td>'+
					 '</tr>';

$(document).ready(function() {

	$('#deptnameselect').change(function() {
		if($(this).val()!="NONE"){
		$.ajax({
		      url: 'getinstructor.htm',
		      data: ({deptname : $('#deptnameselect option:selected').text()}),
		      success: function(data) {
		        var options = data.split(":");
		        var i;
		        var optElement;
		        var option
		        $('#instructornameselect option[value!="NONE"]').remove()
		        instructorSelect = document.getElementById('instructornameselect');
		        for(i=0;i<options.length-1;i++){
		        	option = options[i].split(",");
		        	optElement = document.createElement('option');
		        	optElement.value = option[0];
		        	optElement.innerHTML = option[1];
		        	instructorSelect.appendChild(optElement);
		        }
		      }
		    });
		}
	});
	
	$('#instructornameselect').change(function() {
		if($(this).val()!="NONE"){
		$.ajax({
		      url: 'getofferingdetails.htm',
		      data: ({instructorId : $('#instructornameselect option:selected').val()}),
		      success: function(data) {
		    	    var options = data.split(":");
			        var i;
			        var optElement;
			        var option
			        $('#courseselect option[value!="NONE"]').remove()
			        instructorSelect = document.getElementById('courseselect');
			        for(i=0;i<options.length-1;i++){
			        	option = options[i].split(",");
			        	optElement = document.createElement('option');
			        	optElement.innerHTML = option[0].replace(";"," ");
			        	optElement.value = option[1];
			        	instructorSelect.appendChild(optElement);
			        }
			      }
		    });
		}
	});
	
	$('#courseselect').change(function() {
		if($(this).val()!="NONE"){
			$('#content2').removeClass('hidden');
			$('#reviewdiv').removeClass('hidden');
			}
	});	
	
	$('#submit').click(function() {
		$('#offeringid').val($('#courseselect option:selected').val());
	});
});