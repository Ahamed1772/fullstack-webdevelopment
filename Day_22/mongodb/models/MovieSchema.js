import { name } from "ejs";
import mongoose from "mongoose";


const MoviesSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    ratings: {type: Number, required: true, min: 1, max: 5},
    money: { type: mongoose.Decimal128,required: true, validate: (v) => v >= 10},
    genre: {type: Array},
    isActive: {type: Boolean},
    comments: [
        {value: {type: String}},
        {published: {type: Date, default: Date.now}},
    ],
});

const MovieModel = mongoose.model("Movie", MoviesSchema);

//inserting single collection
// const createDoc = async () => {
//     try {
//        const movie1 = new MovieModel({
//             name: "F1",
//             ratings: 4.8,
//             money: 80000,
//             genre: ['action', 'thriller'],
//             isActive:true,
//             comments: [{value: "That was a an amazing movie"}]
//        });
//        const result = await movie1.save();
//        console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }

//Inserting Many data
// const InsertManyDoc = async () => {
//     try {
//        const movie1 = new MovieModel({
//             name: "Mummy returns",
//             ratings: 4.5,
//             money: 80000,
//             genre: ['action', 'thriller'],
//             isActive:true,
//             comments: [{value: "That was a an amazing movie"}]
//        });
//        const movie2 = new MovieModel({
//             name: "Avatar",
//             ratings: 4.8,
//             money: 930000,
//             genre: ['action', 'thriller'],
//             isActive:true,
//             comments: [{value: "That was a an amazing movie"}]
//        });
//        const movie3 = new MovieModel({
//             name: "Avenger",
//             ratings: 5.0,
//             money: 8000000,
//             genre: ['action', 'thriller'],
//             isActive:true,
//             comments: [{value: "That was a an amazing movie"}]
//        });
//        const movie4 = new MovieModel({
//             name: "Uncharted",
//             ratings: 3.8,
//             money: 45000,
//             genre: ['action', 'Drama'],
//             isActive:true,
//             comments: [{value: "That was a an amazing movie"}]
//        });
//        const result =await MovieModel.insertMany([movie1,movie2,movie3,movie4]);
//        console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }
// export {InsertManyDoc};


//find All Data
// const ReadAllDoc = async () => {
//     try {
//        const result = await MovieModel.find();
//        console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }
// export {ReadAllDoc};

//Accessing a single data 
// const ReadSingleDoc = async () => {
//     try {
//        const result = await MovieModel.findById('68648c69b2a99e10bdefe623');
//        const onlyName = await MovieModel.findById('68648c69b2a99e10bdefe623',"name");
//     //iterating over items in database  
//     //    result.forEach((item) => console.log(item.name));
//     console.log(result);
//     console.log(result.ratings);
//     console.log(onlyName);
//     } catch (error) {
//         console.log(error)
//     }
// }
// export {ReadSingleDoc};

//update document
// const UpdateDoc = async (id) => {
//     try {
//        const result = await MovieModel.updateOne({_id: id},{name: "SpiderMan-2"});
//        console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }
// export {UpdateDoc};

//delete document
// const DeleteDoc = async () => {
//     try {
//        const result = await MovieModel.findByIdAndDelete("68648c69b2a99e10bdefe623")
//        const deleteMany = await MovieModel.deleteMany({ratings: 4.8});
//        console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }
// export {DeleteDoc};