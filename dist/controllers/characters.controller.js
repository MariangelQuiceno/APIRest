"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteCharacter = exports.updatedCharacter = exports.createNewCharacter = exports.getCharacterByID = exports.getCharacters = void 0;
const characterServices = __importStar(require("../services/characters.service"));
const getCharacters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield characterServices.findAll();
        res.json(products);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});
exports.getCharacters = getCharacters;
const getCharacterByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const character = yield characterServices.findById(id);
        if (!character) {
            return res.status(404).json({ message: "Character not found" });
        }
        res.json(character);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.getCharacterByID = getCharacterByID;
const createNewCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, rol } = req.body;
        const newProduct = yield characterServices.create({ name, rol });
        res.status(201).json(newProduct);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.createNewCharacter = createNewCharacter;
const updatedCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { name, rol } = req.body;
        const updatedCharacter = yield characterServices.update(id, {
            name,
            rol,
        });
        if (!updatedCharacter) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(updatedCharacter);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.updatedCharacter = updatedCharacter;
const deleteCharacter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedCharacter = yield characterServices.deleteById(id);
        if (!deletedCharacter) {
            return res.status(404).send("Product not found");
        }
        res.status(200).send("Deleted");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
});
exports.deleteCharacter = deleteCharacter;
