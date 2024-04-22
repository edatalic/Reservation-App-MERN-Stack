import express from "express"
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getHotels, getHotel, updateHotel, countByCity, countByType, getHotelRooms } from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//Create
router.post("/",verifyAdmin, createHotel);

//Update
router.put("/:id",verifyAdmin, updateHotel);
 
//Delete
router.delete("/find/:id",verifyAdmin, deleteHotel);

//Get
router.get("/find/:id", getHotel);

//Get all
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;