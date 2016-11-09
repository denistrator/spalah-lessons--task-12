$(function() {
  var waypoints = $('#options-only').waypoint({
    handler: function() {
      $('#progressbar-circle-1').circleProgress({
        value: 0.9,
        animation: {duration: 2000},
        fill: "#ffe600",
        emptyFill: "#fff",
        size: 142,
        thickness: 6,
        startAngle: -Math.PI / 4 * 6
      }).on('circle-animation-progress', function(event, progress, stepValue) {
          $(this).find('.progressbar-percents').text((String(stepValue.toFixed(2)).substr(1)) * 100);
        });

      $('#progressbar-circle-2').circleProgress({
        value: 0.96,
        animation: {duration: 2000},
        fill: "#ffe600",
        emptyFill: "#fff",
        size: 142,
        thickness: 6,
        startAngle: -Math.PI / 4 * 6
      }).on('circle-animation-progress', function(event, progress, stepValue) {
          $(this).find('.progressbar-percents').text((String(stepValue.toFixed(2)).substr(1)) * 100);
        });

      $('#progressbar-circle-3').circleProgress({
        value: 0.85,
        animation: {duration: 2000},
        fill: "#ffe600",
        emptyFill: "#fff",
        size: 142,
        thickness: 6,
        startAngle: -Math.PI / 4 * 6
      }).on('circle-animation-progress', function(event, progress, stepValue) {
          $(this).find('.progressbar-percents').text((String(stepValue.toFixed(2)).substr(1)) * 100);
        });

      $('#progressbar-circle-4').circleProgress({
        value: 0.94,
        animation: {duration: 2000},
        fill: "#ffe600",
        emptyFill: "#fff",
        size: 142,
        thickness: 6,
        startAngle: -Math.PI / 4 * 6
      }).on('circle-animation-progress', function(event, progress, stepValue) {
          $(this).find('.progressbar-percents').text((String(stepValue.toFixed(2)).substr(1)) * 100);
        });
      
      this.destroy();
    },
    offset: '90%'
  })
});