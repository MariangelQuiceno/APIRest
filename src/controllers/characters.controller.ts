import { Request, Response } from "express";
import { Character } from "../models/characters.model";
import * as characterServices from "../services/characters.service";

export const getCharacters = async (
    req: Request,
    res: Response
  ): Promise<void> => {

    try {
      const products = await characterServices.findAll();
      res.json(products);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      }
    }

  };

  
export const getCharacterByID = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const character = await characterServices.findById(id);
      if (!character) {
        return res.status(404).json({ message: "Character not found" });
      }
      res.json(character);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  

  
export const createNewCharacter = async (req: Request, res: Response) => {
    try {
      const { name, rol } = req.body;
      const newProduct = await characterServices.create({ name, rol });
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };



  export const updatedCharacter = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, rol } = req.body;

    const updatedCharacter = await characterServices.update(id, {
      name,
      rol,
    });

    if (!updatedCharacter) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedCharacter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};



export const deleteCharacter = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const deletedCharacter = await characterServices.deleteById(id);

    if (!deletedCharacter) {
      return res.status(404).send("Product not found");
    }
    res.status(200).send("Deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};
