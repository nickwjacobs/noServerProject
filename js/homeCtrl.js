angular.module('lawOffice').controller('homeCtrl', function($scope){
setTimeout(function(){
   $("#about").animate({ opacity: 1 }, 700);
   $('#about').append('<div>Append test </div>');

},100);
});
