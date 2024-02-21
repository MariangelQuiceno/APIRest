"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.update = exports.create = exports.findById = exports.findAll = void 0;
let characters = [
    {
        id: "1",
        name: "Enki",
        rol: "Sacerdote",
    },
    {
        id: "2",
        name: "Cahara",
        rol: "Mercenario",
    },
    {
        id: "3",
        name: "D'Arce",
        rol: "Caballero",
    },
    {
        id: "4",
        name: "Ragnvaldr",
        rol: "Forastero",
    },
];
const findAll = () => {
    return characters;
};
exports.findAll = findAll;
const findById = (id) => {
    return characters.find((Character) => Character.id === id);
};
exports.findById = findById;
const create = (character) => {
    const id = (characters.length + 1).toString(); // Generamos un ID único
    const newCharacter = Object.assign({ id }, character);
    characters.push(newCharacter);
    return newCharacter;
};
exports.create = create;
const update = (id, changes) => {
    const index = characters.findIndex((Character) => Character.id === id);
    if (index >= 0) {
        characters[index] = Object.assign(Object.assign({}, characters[index]), changes);
        return characters[index];
    }
    return null;
};
exports.update = update;
const deleteById = (id) => {
    const index = characters.findIndex((Character) => Character.id === id);
    if (index >= 0) {
        characters.splice(index, 1);
        return true;
    }
    return false;
};
exports.deleteById = deleteById;
