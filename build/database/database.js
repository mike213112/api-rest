"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mariadb_1 = __importDefault(require("mariadb"));
const config_1 = __importDefault(require("./config"));
const connect = mariadb_1.default.createPool(config_1.default.database);
connect.getConnection()
    .then(connect => {
    console.log("Conexion Satisfactoria");
}).catch(err => {
    console.log("Error con la base");
});
exports.default = connect;
