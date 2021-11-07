const mongoose = require('mongoose');


const dbConnect = async () => {
    try {
        
//password=pJgf9CRDU7qtYlby
//mongodb+srv://me:<password>@expenses-tracker.sqpup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
        await mongoose.connect(
            process.env.MONGO_URL,
        {
            
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`DataBase connected successfully`);
    }catch(error){
console.log(`Error ${error.message}`);
    }
}


module.exports = dbConnect;