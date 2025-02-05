const express=require("express");
const bodyparser=require("body-parser");
const mysql=require("mysql");


const app=express();
const port=8000;

app.use(express.static('Public'));
app.use(bodyparser.urlencoded({ extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/Public/Animation.html');
});

app.listen(port,()=>{
    console.log(`SERVER RUNNING AT http://localhost:${port}`);
});


const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"experiment"
})

con.connect((err)=>{
    if(err){
        console.log("THERE IS AN ERROR TO CONNECT THE DATABASE!!"+err);
    }else{
        console.log("THE CONNECTION HAS BEEN CREATED!!");
    }
})


app.post('/submit',(req,res)=>{
    const username=req.body.username;
    const useremail=req.body.useremail;
    const usermessage=req.body.usermessage;

    const query=`INSERT INTO users(name,email,Message) VALUES ('${username}','${useremail}','${usermessage}')`;

    con.query(query,(err)=>{
        if(err){
            console.log("THERE IS AN ERROR TO ENTER THE DATA!!"+err);
            res.status(500).send("Error inserting data into database.");
        }else{
            console.log("THE MESSAGE HAS BEEN SENT!!");
            res.status(200).send("Message successfully sent.");
        }
    })
})

// aapne fronted ma thi data ne leva mate aapne aapna form ma action="/submit" add kari devanu and e je pan add karie teno aapne route aapna node.js ni andar banai devano and than aapne je rite data lai ne sql through data ne add karie chie te karvanu che and biju e ke aapne aapna form ni andar enctype pan add kari devano teni value aapne application/x-www-form-urlencoded che je thi kari ne te data aapnu bodyparser lese and tene req ni body ma add kari dese and than aapne tene access kari sakisu....


// biju e ke aapne html ni file ne express through open karava mate ek route banavano '/' kari ne aani andar aapne ek method che res.sendFile() kari ne aani andar aapne aapna html file no path dai devano che but teni mate aapne pehla aapne aapni directory no path pan devo pade te thodu complex kam che mate aapne su karisu ke teni andar ek parameter che __dirname kari ne tene add kari daisu je thi kari ne aapne aapna directory ma aayi gaya pachi aapne teni pachal aapne aapna html file nu name jodvanu che but teni mate aapne string nu concetination karvu padse mate aapne __dirname pachi + muki ne aapni file jo subfolder ma hoy to te lakhi ne aapni html file nu name add kari devanu che....


// hvae aana thi html file to include thai jase but teni jode aapne js ke css ke image ke video hase te upload nai thay te karva mate aapne su karsu ke pehle thi ek method che use kari ne tene aapne aapna express nu je application che (app) teni jode lagavanu che like... app.use() have aani andar je folder ni css file ne embed karvani hoy te file nu name add karvanu che have teni mate pan ek method che express.static() aani andar aapne aapna folder nu name add kari devanu che ......

// aapne pehla final portfolio kri ne folder banavelu teni andar aapne aa server.js kari ne file banaveli than aapne animation valu page pehla batavu hatu and than aapne main portfolio chalu karvo hato mate aapne ek folder banavyu public kari ne jeni andar aapne aapna frontend vala folder ma ek subfolder hatu (1)Animation page kari ne teni andar jetli file hati tene aapne public folder ma openly paste kari didhi che than aapne frontend vala folder ma Main folder ni andar aapno main portfolio hato tene aapne public folder ni andar Main Portfolio kari ne che teni andar nakhi didhi che have aapne public ne as a static path didhel che je thi kari ne teni andar aavti badhi j css,js file badha j video and images infact teni andar rahela subfolder ni css file js file and images and video embed thai jay and bas simple aapna Portfolio.html vala page ma badhi j file na path set kari didhela che and animation.js ma pan aapne 2sec pachi main portfolio khule teni mate no path set kari didho che......