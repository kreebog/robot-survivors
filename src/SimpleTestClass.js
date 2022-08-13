"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleTestClass = void 0;
var SimpleTestClass = /** @class */ (function () {
    function SimpleTestClass(name, health, mana) {
        this.name = name;
        this.health = health;
        this.mana = mana;
    }
    Object.defineProperty(SimpleTestClass.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (newName) {
            if (newName.trim() === '') {
                throw new Error('Name cannot be empty');
            }
            this.name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimpleTestClass.prototype, "Health", {
        get: function () {
            return this.health;
        },
        set: function (newHealth) {
            if (newHealth < 0) {
                throw new Error('Health cannot be below zero');
            }
            this.health = newHealth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimpleTestClass.prototype, "Mana", {
        get: function () {
            return this.mana;
        },
        set: function (newMana) {
            if (newMana < 0) {
                throw new Error('Mana cannot be below zero');
            }
            this.mana = newMana;
        },
        enumerable: false,
        configurable: true
    });
    return SimpleTestClass;
}());
exports.SimpleTestClass = SimpleTestClass;
