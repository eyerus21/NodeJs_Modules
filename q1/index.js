const express=require('events');
const path = require('path');

const app=express();

app.set('view engine', 'ejs');
app.set('view',paht.join(__dirname,'view'))

app.use('/css',express.static(path.join(__dirname,'css')));

app.get("/",(req,res)=>{
    const date=new Date();
    const hour=date.getHours;
    let css='night.css';
    if(hour>=6&&hour<=18){
        css='day.css';
    }
    
    res.render("index",{time:date.toTimeString,choosenStyle: css});
})



app.listen(3000,()=>{console.log("server connnected at 3000")})