
import StudentModel from "../model/studnt.js"
class studentController{
  
 static createDoc=async(req,res)=>{
   try {
    //  app.use(express.urlencoded({ extended: true}));

     const doc= new StudentModel({
      name: req.body.Name,
       age: req.body.Age,
       fees: req.body.Fees
    })
    //Saving Documents
    const result= await doc.save()
    console.log(result)
    res.redirect("/student");
   } catch (error) {
    console.log(error)
   }
 }
    static getAllDoc= async(req,res)=>{
        try {
            const result= await StudentModel.find()
            // console.log(result)
            res.render("home",{data:result})
        } catch (error) {
            console.log(error)
        }
    }
    //Show Edit Form with Data
    static editDoc=async(req,res)=>{

      // console.log(req.params.id)
      try {
        const result=await StudentModel.findById(req.params.id)
        // console.log(result)
        res.render("edit",{data:result})
      } catch (error) {
        console.log(error)
      }
    }
    static updateDoc=async(req,res)=>{
        console.log(req.params.id)
        console.log(req.body.Name)
         await StudentModel.findByIdAndUpdate(req.params.id,req.body)
        res.redirect("/student")
    }
      //   try {
      //     const result= await StudentModel.findByIdAndUpdate(req.params.id,req.body)
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }

    static deleteDoc=async(req,res)=>{
      // console.log(req.params.id)
      try {
        const result= await StudentModel.findByIdAndDelete(req.params.id)
        res.redirect("/student")
      } catch (error) {
        console.log(error)
      }
      }
    }

export default studentController;