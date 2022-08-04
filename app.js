// const MongoClient=require('mongodb').MongoClient
// const url="mongodb://localhost:27017"
// //copied from mongocompass
// can be created database in one more way "mongodb://localhost:27017/database name"
// MongoClient.connect(url,(err,result)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     const MyDb=result.db("product")//creating database

//     console.log("database created")
//     // MyDb.createCollection("watch",(err,res)=>{
//     //     if(err)
//     //     {
//     //         console.log(err)
//     //     }
//     //     console.log("collection created")
//     //     result.close()

//     // })
//     const data=[
//         {
//         pid:2,
//         pname:"sonata"
//         },
//         {
//             pid:3,
//             pname:"hmt"

//         }
// ]
//     // MyDb.collection("watch").insertOne(data,(err,res)=>{
//     //     if(err) throw err
//     //     console.log("data added",res)
//     //    result.close()
//     // })
//     // MyDb.collection("watch").insertMany(data,(err,res)=>{
//     //     if(err) throw err
//     //     console.log("many data added",res)
//     //     result.close()

//     // })
//     // MyDb.collection("watch").find({pname:"hmt"}).toArray((err,res)=>{
//     //     if (err) throw err
//     //     console.log("data",res)
//     //     result.close()
//     // })
//     // MyDb.collection("watch").findOne({pid:2},(err,res)=>{
//     //     if(err) throw err
//     //     console.log("data",res)
//     //     result.close()

//     // })
//     const selected={
//         pid:3
//     }
//     const update={
//         $set:{
//             pname:"hmt"
//         }
//     }
//     // MyDb.collection("watch").updateOne(selected,update,(err,res)=>{
//     //     if(err) throw err
//     //     console.log("data updates")

//     // })
//     // MyDb.collection("watch").deleteOne({pname:"new"},(err,res)=>{
//     //     if(err) throw err
//     //     console.log("data deleted",res)
//     //     result.close()

//     // })
//     // MyDb.collection("watch").find().toArray((err,res)=>{
//     //     if(err) throw err
//     //     console.log("data",res)
//     //     result.close()

//     // })
//     MyDb.collection("watch").drop((err,res)=>{
//         if(err) throw err
//         console.log("collection deleted",res)
//         result.close()

//     })

// })

//workout example
//step 1 creating connection
// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017";
// MongoClient.connect(url, (err, result) => {
//   if (err) throw err;
//   const Db = result.db("clothing");
//   console.log("database created");
  // Db.createCollection("Shirts",(err,res)=>{
  //     if(err) throw err
  //     console.log("collection created",res)

  // }
  // const data = [
  //   {
  //     sid: 1,
  //     smodel: "tshirt",
  //   },
  //   {
  //     sid: 2,
  //     smodel: "casual",
  //   },
  // ];
  // Db.collection("Shirts").insertOne(data,(err,res)=>{
  //     if(err) throw err
  //     console.log("data added",res)
  //     result.close()
//   Db.collection("Shirts").insertMany(data,()=>{
//       if(err) throw err
//       console.log("many data inserted")
//   })
// Db.collection("Shirts").find({sid:1}).toArray((err,res)=>{
//     if(err) throw err
//     console.log("data sid 1",res)
//     result.close()
// })
// Db.collection("Shirts").findOne({smodel:"casual"},(err,res)=>{
// if (err) throw err
// console.log("data:Sname:causual",res)
// result.close()
// })
// const updata={
//     sid:1
// }
// const updated={
//     $set:{
//         smodel:"Formal"
//     }
// }
//   Db.collection("Shirts").updateOne(updata,updated,(err,res)=>{
//       if(err) throw err
//       console.log("data updated",res)
//   })
// Db.collection("Shirts").find({sid:2}).toArray((err,res)=>{
//     if(err) throw err
//     console.log("updated data",res)
// })



