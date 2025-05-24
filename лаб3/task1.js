var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Задача 1
var BaseUser = /** @class */ (function () {
    function BaseUser(id, name) {
        this.name = name;
        this.id = id;
    }
    return BaseUser;
}());
;
var Guest = /** @class */ (function (_super) {
    __extends(Guest, _super);
    function Guest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Guest.prototype.getrole = function () {
        return "Guest";
    };
    Guest.prototype.getPermissions = function () {
        return ["Просмотр контента"];
    };
    return Guest;
}(BaseUser));
;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.getrole = function () {
        return "User";
    };
    User.prototype.getPermissions = function () {
        return ["Просмотр контента", "Добавление комментариев"];
    };
    return User;
}(BaseUser));
;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.getrole = function () {
        return "Admin";
    };
    Admin.prototype.getPermissions = function () {
        return ["Просмотр контента", "Добавление комментариев", "Удаление комментариев", "Управление пользователями"];
    };
    return Admin;
}(BaseUser));
;
var guest = new Guest(1, "Аноним");
console.log(guest.getPermissions());
var admin = new Admin(2, "Мария");
console.log(admin.getPermissions());
var HTMLReport = /** @class */ (function () {
    function HTMLReport(title, content) {
        this.content = content;
        this.title = title;
    }
    HTMLReport.prototype.generate = function () {
        return "<h1>".concat(this.title, "</h1><p>").concat(this.content, "</p>");
    };
    ;
    return HTMLReport;
}());
var JSONReport = /** @class */ (function () {
    function JSONReport(title, content) {
        this.content = content;
        this.title = title;
    }
    JSONReport.prototype.generate = function () {
        return {
            title: this.title,
            content: this.content
        };
    };
    return JSONReport;
}());
;
var report1 = new HTMLReport("Отчет1", "Содержание отчета");
console.log(report1.generate());
var report2 = new JSONReport("Отчет2", "Содержание отчета");
console.log(report2.generate());
//Задача 3
var Caches = /** @class */ (function () {
    function Caches() {
        this.data = new Array;
    }
    Caches.prototype.add = function (k, val, t) {
        var timeout = Date.now() + t;
        this.data.push({ key: k, value: val, ttl: timeout });
    };
    Caches.prototype.get = function (k) {
        this.clearExpired();
        var elements = this.data.filter(function (d) { return d.key == k; });
        var el = elements[0];
        if (!el) {
            return null;
        }
        return el.value;
    };
    Caches.prototype.clearExpired = function () {
        var curtime = Date.now();
        this.data = this.data.filter(function (d) { return d.ttl >= curtime; });
    };
    return Caches;
}());
var cache = new Caches();
cache.add("price", 100, 500);
console.log(cache.get("price"));
setTimeout(function () {
    console.log(cache.get("price"));
}, 6000);
//Задача 4
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    ;
    return Product;
}());
function createInstance(cls) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var obj = new (cls.bind.apply(cls, __spreadArray([void 0], args, false)))();
    return obj;
}
var p = createInstance(Product, "Телефон", 50000);
console.log(p);
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
;
function logEvent(event) {
    console.log(event);
}
logEvent([new Date(), LogLevel.INFO, "Система запущена"]);
//Задача 6
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatus || (HttpStatus = {}));
function success(data) {
    return [HttpStatus.OK, data];
}
function error(message, status) {
    return [status, null, message];
}
var res1 = success({ user: "Андрей" });
console.log(res1);
var res2 = error("Некорректный запрос", HttpStatus.BadRequest);
console.log(res2);
