"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepositoryMongoBd = void 0;
const db_connect_1 = require("./db-connect");
class userRepositoryMongoBd {
    create(user) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = db_connect_1.collections.user) === null || _a === void 0 ? void 0 : _a.insertOne(user));
            return user;
        });
    }
    getOne(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const query = { id: id };
            const user = yield ((_a = db_connect_1.collections.user) === null || _a === void 0 ? void 0 : _a.findOne(query));
            if (!user) {
                throw new Error(`User with id ${id} not found`);
            }
            return user;
        });
    }
}
exports.userRepositoryMongoBd = userRepositoryMongoBd;
