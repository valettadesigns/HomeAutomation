function toggleLight(lightId){
	$.post("http://raspberrypi/lights/" + lightId + "/toggle",
          function(data){
			if (data != 0)
			{
				alert("Error: " + data);
			}
          });
}