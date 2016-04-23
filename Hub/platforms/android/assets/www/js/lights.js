function toggleLight(lightId){
	$.ajax({
		url: "http://192.168.1.13/lights/" + lightId + "/toggle",
		type: 'GET',
		success: function(data){
			$("#results").replaceWith(data);
			if (data != 0)
			{
				alert("Error: " + data);
		}},
		error: function(xhr, textStatus, errorThrown){
			alert('Error: ' + textStatus + ' - ' + errorThrown + xhr.statusText);
			$("#results").replaceWith(data);
	}});
};

function listLights(){
	$.get("http://raspberrypi/lights", function( data ) {
		$( "#results" ).html( data );
	});
}