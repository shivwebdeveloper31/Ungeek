import React, { useEffect, useState } from "react";
import moment from "moment";

function Fetch() {
    const [user, setUser] = useState([]);

    

    const fetchData = () => {
        fetch("https://myqiblah.com/jibreel/web/blogs/",{
            method:'GET',
            headers:{
                Accept:'*/*',
                'Content-Type':'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    let newsApiDate = "2020-04-09T04:09:41Z"; // got from the Api
    
    let timestamp = new Date(newsApiDate).getTime();
    let Day = new Date(timestamp).getDate();
    let Month = new Date(timestamp).getMonth() + 1;
    let Year = new Date(timestamp).getFullYear();
    let OurNewDateFormat = `${Day}/${Month}/${Year}`;
    console.log(OurNewDateFormat)

    return (
        <div class="row" style={{ justifyContent: "space-around" }}>

            {user.map(data => (
                <div class="card" style={{ width: "400px", padding: "10px", margin: "10px" }}>
                    <img src={data.blog_image} style={{ width: "380px", height: "200px" }} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div class="date" style={{ border: "1px solid red" }}>{moment(data.created_on).format(
                            'llll',
                                )}</div>
                        <h5 class="card-title">{data.heading}</h5>
                        <p class="card-text">{data.blog_brief}</p>
                        <div class="card-footer text-muted">
                            Posted in: {data.categories[0].category} <br /> Tags: {data.tags[0].tag}
                        </div><br />
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Fetch;