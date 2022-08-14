import React, { useEffect, useState } from 'react'
import "../App.css"
import cloudIcon from "./cloudIcon.png";
const Wether = () => {
    const [city, setcity] = useState("pune")
    const [data, setdata] = useState("");

    console.log(data)
    useEffect(() => {
        const url = `http://api.weatherapi.com/v1/current.json?key=1dbc74a222ab44b8b2761843221008&q=${city}&aqi=no`;
        const api = async () => {
            const response = await fetch(url)
            const responseJson = await response.json();
            setdata(responseJson);
        }
        api();

    }, [city])

    return (
        <>
            <div className="wetherCon">
                <div className="wetherinnercon">
                    <span id='search'>
                        <input type="text" placeholder='Search..' onChange={(e) => setcity(e.target.value)} id="searchinput" />
                    </span>

                    <div className="temp">
                        <div className="showtemp">
                            {
                                data.current ? <h1>{data.current.temp_c}<sup>o</sup>C </h1> : null

                            }
                        </div>
                        <div className="cloudIcon">
                            {
                                data.current ? <img src={data.current.condition.icon} alt="" id='cloudIcon' /> : <img src={cloudIcon} alt="" id='cloudIcon' />
                            }
                            <br />
                            <span>
                                {
                                    data.current ? <p>{data.current.condition.text}</p> : null
                                }
                            </span>
                        </div>
                    </div>

                    {
                        data.location ? <h1 id='cityname'>{data.location.name}</h1> : null
                    }
                    {
                        data.location ? <p id='statename'>{data.location.region}</p> : null
                    }

                    <h4 id='wetherInfo'>Wether info</h4>
                    <div className="descri">
                        <div className="sunH">
                            <div>
                                <span><i className="fa-solid fa-sun sun"></i></span>

                                <span>6:50</span><br />
                                <span className='sun1'>sunset</span>

                            </div>
                            <div className="humidity">
                                <span><i class="fa-brands fa-drupal sun"></i></span>
                                {
                                    data.current ? <span>{data.current.humidity}</span> : null
                                } <br />
                                <span className='sun1'>Humidity</span>
                            </div>
                        </div>

                        {/* lover */}

                        <div className="lowerdesc">
                            <div>
                                <span><i class="fa-solid fa-water sun"></i></span>


                                {
                                    data.current ? <span >{data.current.wind_mph}</span> : null
                                }
                                <br />
                                <span className='sun1'>wind</span>
                            </div>

                            <div>
                                <span><i class="fa-solid fa-power-off sun"></i></span>

                                {
                                    data.current ? <span>{data.current.pressure_mb}</span> : null
                                }
                                <br />
                                <span className='sun1' >pressure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wether
