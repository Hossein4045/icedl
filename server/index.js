const express=require("express")
const app=express()
const dotenv=require("dotenv").config()
const _=require("lodash")
const { igdl } = require('btch-downloader')
const cors=require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
// https://www.instagram.com/p/DIKhWGDxEY8/?utm_source=ig_web_copy_link
// https://www.instagram.com/p/DId17NmCYQC/?utm_source=ig_web_copy_link
// https://www.instagram.com/p/DIZWFQiiwEM/?utm_source=ig_web_copy_link
// https://www.instagram.com/p/DHOD77ot1QE/?utm_source=ig_web_copy_link



app.post("/api/download", async (req, res) => {
    const { url } = req.body;
    try {
        
        const data = await igdl(url);
        const uniqueData = _.uniqWith(data, (a, b) => 
            a.thumbnail === b.thumbnail || a.url === b.url
          );
        
        console.log("دانلود موفق برای:", url);
        
        res.json({
            status: true,
            data: uniqueData,
            message: "دانلود با موفقیت انجام شد"
        });
        
    } catch (error) {
        console.error("خطا در پردازش درخواست:", error);

        res.status(500).json({
            status: false,
            message: "خطا در پردازش درخواست",
            error: error.message
        });
    }
});

// خطای 404 برای مسیرهای نامشخص
app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: "مسیر یافت نشد"
    });
});


const port=process.env.Port || 3000

app.listen(port,()=>{
    console.log("server connected to server port "+port);
})