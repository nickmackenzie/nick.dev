
import clientPromise from "../../lib/mongodb";
import axios from 'axios'
import { format } from 'date-fns'
export default async function visitor(req, res) {
    const client = await clientPromise;
    const db = client.db("portfolio");
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    switch (req.method) {
        case "POST":
            // console.log(req.body.visitorData)
            // let currentDate = format(new Date(), 'MMMM/dd/yyyy')
            // let currentTime = format(new Date(), 'h:mmbbbb')
            // let visitorObject = req.body.visitorData
            // visitorObject.currentDate = currentDate;
            // visitorObject.currentTime = currentTime;
            // let newVisitor = await db.collection("visitors").insertOne(visitorObject);
            let ip;
            let country;
            let city;
            let regionName
            await axios.get('https://api.ipify.org/?format=json').then(async function (response) {
                ip = response.data.ip
            })
            await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.GEO_API}&ip=${ip}`).then(async function (response) {
                country = response.data.country_name
                city = response.data.city
                regionName = response.data.organization
            })
            axios.post(`https://push.techulus.com/api/v1/notify/${process.env.PUSH_API}`,
                {     //body
                    "title": `${timezone}`,
                    "body": `${city}, ${country} in ${regionName}`
                })
                .then(async function (response) {
                    console.log(response)
                    res.json({ status: 200, data: newVisitor });
                })
                .catch(function (error) {
                    res.json({ status: 200, data: error });


                });
            break;
        case "GET":
            const posts = await db.collection("visitors").find({}).toArray();
            res.json({ status: 200, data: posts });
            break;
    }
}
