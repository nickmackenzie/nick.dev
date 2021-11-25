
import clientPromise from "../../lib/mongodb";
import axios from 'axios'
import { format } from 'date-fns'
export default async function visitor(req, res) {
    const client = await clientPromise;
    const db = client.db("portfolio");
    switch (req.method) {
        case "POST":
            axios.post(`https://ipinfo.io?token=${process.env.VISITORAPI}`)
                .then(async function (response) {
                    let currentDate = format(new Date(), 'MMMM/dd/yyyy')
                    let currentTime = format(new Date(), 'h:mmbbbb')
                    let visitorObject = response.data
                    visitorObject.currentDate = currentDate;
                    visitorObject.currentTime = currentTime;
                    let newVisitor = await db.collection("visitors").insertOne(visitorObject);
                    res.json({ status: 200, data: newVisitor });
                })
                .catch(function (error) {
                    console.log(error);

                });
            break;
        case "GET":
            const posts = await db.collection("visitors").find({}).toArray();
            res.json({ status: 200, data: posts });
            break;
    }
}
