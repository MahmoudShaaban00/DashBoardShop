"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamIdDto = exports.UpdateAttendanceDto = exports.CreateAttendanceDto = void 0;
var class_validator_1 = require("class-validator");
// ===== Create Attendance =====
var CreateAttendanceDto = function () {
    var _a;
    var _employee_decorators;
    var _employee_initializers = [];
    var _employee_extraInitializers = [];
    var _date_decorators;
    var _date_initializers = [];
    var _date_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _deduction_decorators;
    var _deduction_initializers = [];
    var _deduction_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateAttendanceDto() {
                this.employee = __runInitializers(this, _employee_initializers, void 0);
                this.date = (__runInitializers(this, _employee_extraInitializers), __runInitializers(this, _date_initializers, void 0));
                this.status = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _status_initializers, void 0)); // true = present, false = absent
                this.deduction = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _deduction_initializers, void 0)); // يحسب في السيرفيس
                __runInitializers(this, _deduction_extraInitializers);
            }
            return CreateAttendanceDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _employee_decorators = [(0, class_validator_1.IsMongoId)()];
            _date_decorators = [(0, class_validator_1.IsDateString)()];
            _status_decorators = [(0, class_validator_1.IsBoolean)()];
            _deduction_decorators = [(0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _employee_decorators, { kind: "field", name: "employee", static: false, private: false, access: { has: function (obj) { return "employee" in obj; }, get: function (obj) { return obj.employee; }, set: function (obj, value) { obj.employee = value; } }, metadata: _metadata }, _employee_initializers, _employee_extraInitializers);
            __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _deduction_decorators, { kind: "field", name: "deduction", static: false, private: false, access: { has: function (obj) { return "deduction" in obj; }, get: function (obj) { return obj.deduction; }, set: function (obj, value) { obj.deduction = value; } }, metadata: _metadata }, _deduction_initializers, _deduction_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateAttendanceDto = CreateAttendanceDto;
// ===== Update Attendance =====
var UpdateAttendanceDto = function () {
    var _a;
    var _employee_decorators;
    var _employee_initializers = [];
    var _employee_extraInitializers = [];
    var _date_decorators;
    var _date_initializers = [];
    var _date_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _deduction_decorators;
    var _deduction_initializers = [];
    var _deduction_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UpdateAttendanceDto() {
                this.employee = __runInitializers(this, _employee_initializers, void 0);
                this.date = (__runInitializers(this, _employee_extraInitializers), __runInitializers(this, _date_initializers, void 0));
                this.status = (__runInitializers(this, _date_extraInitializers), __runInitializers(this, _status_initializers, void 0));
                this.deduction = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _deduction_initializers, void 0));
                __runInitializers(this, _deduction_extraInitializers);
            }
            return UpdateAttendanceDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _employee_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsMongoId)()];
            _date_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDateString)()];
            _status_decorators = [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            _deduction_decorators = [(0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _employee_decorators, { kind: "field", name: "employee", static: false, private: false, access: { has: function (obj) { return "employee" in obj; }, get: function (obj) { return obj.employee; }, set: function (obj, value) { obj.employee = value; } }, metadata: _metadata }, _employee_initializers, _employee_extraInitializers);
            __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _date_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _deduction_decorators, { kind: "field", name: "deduction", static: false, private: false, access: { has: function (obj) { return "deduction" in obj; }, get: function (obj) { return obj.deduction; }, set: function (obj, value) { obj.deduction = value; } }, metadata: _metadata }, _deduction_initializers, _deduction_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateAttendanceDto = UpdateAttendanceDto;
// ===== Param ID =====
var ParamIdDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ParamIdDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                __runInitializers(this, _id_extraInitializers);
            }
            return ParamIdDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, class_validator_1.IsMongoId)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ParamIdDto = ParamIdDto;
