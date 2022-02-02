import React, { useEffect, useState } from 'react';
import history from "../../history";
import styles from '../login/LoginForm.module.css'


const Home = () => {
    const [price, setPrice] = useState(0)
    const [priceTime, setPriceTime] = useState(null)


    useEffect(() => {
        const fetchDetails = () => {
            const ws = new WebSocket("wss://stream.tradingeconomics.com/?client=guest:guest");

            const apiCall = {
                topic: "subscribe",
                to: "EURUSD:CUR"
            };

            ws.onopen = (event) => {
                ws.send(JSON.stringify(apiCall));
            };

            ws.onmessage = function (event) {
                const feed = JSON.parse(event.data);

                    setPrice(feed.price) // getting price from feed
                    setPriceTime(new Date(feed.dt).toLocaleString()) // getting datetime and converting it into local datetime

            };
        }
        fetchDetails()
        const interval = setInterval(() => fetchDetails(), 10000)
        return () => {
            clearInterval(interval);
        }
    }, [])

      return (
        <div className={styles.loginform} style={{background: 'transparent'}}>
            <p style={{fontSize: '20px'}}> Price is   <b>{price ? price : 0 }</b> </p>
            <p style={{fontSize: '20px'}}> Date is   <b>{priceTime ? priceTime : new Date().toLocaleDateString()}</b> </p>

        </div>
    )
};


export default Home
