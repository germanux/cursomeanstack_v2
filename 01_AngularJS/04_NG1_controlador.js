function ControladorSimple($scope) {
    $scope.tituloDiv = "App Gestion Clientes";
    $scope.listadoClientes = [
        { nombre: 'Fran', ciudad: 'Cadiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Angel', ciudad: 'Madrid' },
        { nombre: 'Julio', ciudad: 'Madrid' },
        { nombre: 'Pedro', ciudad: 'Cadiz' }
    ];
}

function ControladorSimple2($scope) {
    $scope.tituloDiv = "ControladorSimple2 Gestion Clientes";
    $scope.listadoClientes = [
        { nombre: 'Fran', ciudad: 'Cadiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Angel', ciudad: 'Madrid' }
    ];
}
var moduloAplicacion = angular.module("miAppClientes", []);

moduloAplicacion.controller("controladorSimple", ControladorSimple);
moduloAplicacion.controller("controladorSimpleDos", ControladorSimple2);