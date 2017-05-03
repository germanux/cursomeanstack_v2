var assert = require("assert");
var indexMod = require("./index");

describe("Batería de pruebas", function() {

    describe("Probando index.js", function() {
        describe("Probando ejecutarApp()", function() {
            it("Debe devolver 36", function() {
                assert.equal(36, indexMod.ejecutarApp());
            });
            it("No debe devolver 666", function() {
                assert.notEqual(666, indexMod.ejecutarApp());
            });
        });
        describe("Probando miFuncionSumadora()", function() {

            it("Debe sumar bien el array", function() {

                assert.equal(testMiCompArray([11, 23, 33], indexMod.miFuncionSumadora(
                    [10, 20, 30], [1, 2, 3])), true);
            });
        });
    });

    describe("#indexOf()", function() {
        it("Debe devolver -1 cuando el valor no esté", function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
        it("Debe devolver -1 cuando el valor no esté", function() {
            assert.equal(3, "Mi cadena de prueba".indexOf("cadena"));
        });
    });
});

function testMiCompArray(array_1, array_2) {
    for (var i = 0; i < array_1.length; i++) {
        if (array_1[i] != array_2[i])
            return false;
    }
    return true;
}