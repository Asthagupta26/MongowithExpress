const mongoose = require("mongoose");
const Chat=require("./models/chat.js");

main()
.then(()=>{
    console.log("connection is successful");
})
 .catch(err => console.log(err));
 
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats=[
    {
        from:"neha",
        to:"preeti",
        msg:"hi",
        created_at:new Date()
    },
    {
        from:"ram",
        to:"shyam",
        msg:"hello",
        created_at:new Date()
    },
    {
        from:"rohan",
        to:"priya",
        msg:"hlw",
        created_at:new Date()
    },
    {
        from:"suryansh",
        to:"rishita",
        msg:"sister",
        created_at:new Date()
    },
    {
        from:"prakhar",
        to:"shikhar",
        msg:"brother",
        created_at:new Date()
    },
];
   Chat.insertMany(allChats);
   