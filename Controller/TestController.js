import { TestObject } from "../Model/TestObject.js";

export const getTestObject = async(req, res) => {
    const {name, message} = TestObject;

    res.status(201).json({
        name,
        message
    })
}