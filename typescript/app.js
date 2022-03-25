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
const child_process_1 = require("child_process");
const width = 1920;
const height = 1080;
const path = "c:\Users\User\Downloads\work\jscomplexlearning\\typescript\\ski-joke-kanatka.mp4";
const name = "2";
(function convert() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = (0, child_process_1.spawn)('ffmpeg', [
            '-i ', path,
            '-c:v ', 'libx264',
            '2.mp4'
        ]);
        res.stdout.on('data', (data) => {
            console.log(data.toString());
        });
        res.stdout.on('data', (data) => {
            console.log(data.toString());
        });
        res.on('close', () => {
            console.log('Ready');
        });
    });
})();
