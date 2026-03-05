"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesController = void 0;
var common_1 = require("@nestjs/common");
var auth_guard_1 = require("../../core/guards/auth.guard");
var EmployeesController = function () {
    var _classDecorators = [(0, common_1.Controller)('employees'), (0, common_1.UseGuards)(auth_guard_1.AuthGuard)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createEmployee_decorators;
    var _getAllEmployees_decorators;
    var _getEmployee_decorators;
    var _deleteEmployee_decorators;
    var _updateEmployee_decorators;
    var EmployeesController = _classThis = /** @class */ (function () {
        function EmployeesController_1(employeesService) {
            this.employeesService = (__runInitializers(this, _instanceExtraInitializers), employeesService);
        }
        EmployeesController_1.prototype.createEmployee = function (employee) {
            return this.employeesService.addEmployee(employee);
        };
        EmployeesController_1.prototype.getAllEmployees = function () {
            return this.employeesService.getAllEmployees();
        };
        EmployeesController_1.prototype.getEmployee = function (id) {
            return this.employeesService.getEmployee(id);
        };
        EmployeesController_1.prototype.deleteEmployee = function (id) {
            return this.employeesService.deleteEmployee(id);
        };
        EmployeesController_1.prototype.updateEmployee = function (id, employee) {
            return this.employeesService.updateEmployee(id, employee);
        };
        return EmployeesController_1;
    }());
    __setFunctionName(_classThis, "EmployeesController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createEmployee_decorators = [(0, common_1.Post)()];
        _getAllEmployees_decorators = [(0, common_1.Get)()];
        _getEmployee_decorators = [(0, common_1.Get)(':id')];
        _deleteEmployee_decorators = [(0, common_1.Delete)(':id')];
        _updateEmployee_decorators = [(0, common_1.Put)(':id')];
        __esDecorate(_classThis, null, _createEmployee_decorators, { kind: "method", name: "createEmployee", static: false, private: false, access: { has: function (obj) { return "createEmployee" in obj; }, get: function (obj) { return obj.createEmployee; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAllEmployees_decorators, { kind: "method", name: "getAllEmployees", static: false, private: false, access: { has: function (obj) { return "getAllEmployees" in obj; }, get: function (obj) { return obj.getAllEmployees; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getEmployee_decorators, { kind: "method", name: "getEmployee", static: false, private: false, access: { has: function (obj) { return "getEmployee" in obj; }, get: function (obj) { return obj.getEmployee; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteEmployee_decorators, { kind: "method", name: "deleteEmployee", static: false, private: false, access: { has: function (obj) { return "deleteEmployee" in obj; }, get: function (obj) { return obj.deleteEmployee; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateEmployee_decorators, { kind: "method", name: "updateEmployee", static: false, private: false, access: { has: function (obj) { return "updateEmployee" in obj; }, get: function (obj) { return obj.updateEmployee; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EmployeesController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EmployeesController = _classThis;
}();
exports.EmployeesController = EmployeesController;
