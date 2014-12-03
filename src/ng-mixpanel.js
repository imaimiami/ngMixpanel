(function () {

  var app;
  app = angular.module("ngMixpanel", []);
  app.directive("mixpanelEvent", function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        if(!attrs.mixpanelEvent || !attrs.mixpanelOn) return;
        element.on(attrs.mixpanelOn, function(){
          mixpanel.track(attrs.mixpanelEvent);
        })
      }
    }
  });

}).call(this);