import { Character } from "../models/characters.model";

let characters : Character[] = [
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

  export const findAll = () => {
    return characters;
  };


  
  export const findById = (id: string) => {
    return characters.find((Character) => Character.id === id);
  };


  
  export const create = (character: Omit<Character, "id">) => {
    const id = (characters.length + 1).toString(); // Generamos un ID único
    const newCharacter = {
      id,
      ...character,
    };
    characters.push(newCharacter);
    return newCharacter;
  };
  


  export const update = (id: string, changes: Partial<Omit<Character, "id">>) => {
    const index = characters.findIndex((Character) => Character.id === id);
    if (index >= 0) {
      characters[index] = {
        ...characters[index],
        ...changes,
      };
      return characters[index];
    }
    return null;
  };

  
  
  export const deleteById = (id: string) => {
    const index = characters.findIndex((Character) => Character.id === id);
    if (index >= 0) {
      characters.splice(index, 1);
      return true;
    }
    return false;
  };