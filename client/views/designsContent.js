Template.designsContent.rendered = function() {
	var h = ($(window).height() * 0.8);
	
	$('.md-panel').css('height', h);
	$('#design-menu').menu();

	var container = document.getElementById("design-pad");

	d3.xml('images/Designs/stackedtable2.svg', function(xml) {
		var drawing = xml.documentElement;
		
		container.appendChild(drawing);

		var paths = drawing.getElementsByTagName("path");
		for(i=0; i < paths.length; i++) {
			var length = parseInt(paths[i].getTotalLength());
			d3.select(paths[i]).style("stroke-dasharray", length + ' ' + length).style("stroke-dashoffset", length);
			d3.select(paths[i]).transition().duration(4000).ease('linear').style('stroke-dashoffset', 0);
		};
	});
}

Template.designs.events({
	'click .design-menu-item': function(event){

		$('svg').remove();
		
		var container = document.getElementById("design-pad");
		var image = "images/Designs/" + event.currentTarget.attributes[1].value + ".svg";
		

		d3.xml(image, function(xml) {
		var drawing = xml.documentElement;
		
		container.appendChild(drawing);

		var paths = drawing.getElementsByTagName("path");
		for(i=0; i < paths.length; i++) {
			var length = parseInt(paths[i].getTotalLength());
			d3.select(paths[i]).style("stroke-dasharray", length + ' ' + length).style("stroke-dashoffset", length);
			d3.select(paths[i]).transition().duration(4000).ease('linear').style('stroke-dashoffset', 0);
		}
		
	});

	}
})