/**
 * Created by Sufiyan on 5/3/2016.
 */
var app=angular.module("DragApp", ["ngMaterial","ui.router","firebase","ang-drag-drop"]);
app.config(function ($urlRouterProvider,$stateProvider) {
    $stateProvider
        .state("Dragview",{
            url:"/",
            templateUrl:"templates/Dragview.html",
            controller: "DragCtrl"
        });


    $urlRouterProvider.otherwise("/")
});