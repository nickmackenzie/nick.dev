import { NextResponse } from 'next/server'

import axios from 'axios'
import { format } from 'date-fns'

export default async function visitor(req, res) {
    // const client = await clientPromise;
    // const db = client.db("portfolio");
    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    switch (req.method) {
        case "POST":

            let ip;
            let country;
            let city;
            let regionName
            axios.post(`https://push.techulus.com/api/v1/notify/${process.env.PUSH_API}`,
                {     //body
                    "title": `${timezone}`,
                    "body": `A visitor arrived!`
                })
                .then(async function (response) {
                    console.log(response)
                    res.json({ status: 200 });
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
