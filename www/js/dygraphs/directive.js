/**
 * dygraph directive for AngularJS
 *
 * Original Author: Chris Jackson
 *  https://github.com/cdjackson/angular-dygraphs
 *
 * License: MIT
 */
angular.module("im-dygraphs", [])
    .directive('imDygraphs', function ($window) {
        console.log('im-dygraph');
        return {
            restrict: 'E',
            scope: { // Isolate scope
                data: '=',
                options: '=',
                legend: '=?'
            },
            template: '<div class="ng-dygraphs">' +                     // Outer div to hold the whole directive
                '<div class="graph"></div>' +                           // Div for graph
                '</div>',                                               // Outer div
            link: function (scope, element, attrs) {
                scope.LegendEnabled = true;

                var parent = element.parent();
                console.log('parent',parent[0]);
                var mainDiv = element.children()[0];
                console.log('mainDiv',mainDiv);
                var chartDiv = angular.element(mainDiv).children()[0];
                console.log('chartDiv',chartDiv);

                var chartArea;

                var graph = new Dygraph(chartDiv, scope.data, scope.options);
                scope.$watch("data", function () {
                    var options = scope.options;
                    if (options === undefined) {
                        options = {};
                    }
                    options.file = scope.data;

                    graph.updateOptions(options);
                    graph.resetZoom();

                    resize();
                }, true);

                resize();

                var w = angular.element($window);
                w.bind('resize', function () {
                    resize();
                });

                function resize() {
                    console.log('resize');
                    // return;
                    var maxWidth = 0;


                    // console.log("window: ", $window.width(),$window.height());
                    console.log("parent: ", parent[0].offsetWidth, parent[0].offsetHeight);

                    // graph.resize(parent[0].offsetWidth, parent[0].offsetHeight );
                    graph.resize(parent[0].offsetWidth, 200 );

                    // chartArea = $(chartDiv).offset();
                    // chartArea.bottom = chartArea.top + parent.height() - legendHeight;
                    // chartArea.right = chartArea.left + parent.width();
                    // console.log("Position",chartArea);
                }
            }
        };
    });
