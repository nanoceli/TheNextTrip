import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getOrder } from '../../Store/Acions/Actions'
import style from './Orders.module.css'

export default function Orders() {
    const [ord, setOrd] = useState("asc")
    const [ordP, setOrdP] = useState("pobasc")
    const dispatch = useDispatch();

        function Order(e) {
            e.preventDefault();
            if (ord === "desc") {
                setOrd("asc");
                dispatch(getOrder(ord));
            }
            if (ord === "asc") {
                setOrd("desc");
                dispatch(getOrder(ord));
            }
        }

        function OrderP(e) {
            e.preventDefault();
            if (ordP === "pobdesc") {
                setOrdP("pobasc");
                dispatch(getOrder(ordP));
            }
            if (ordP === "pobasc") {
                setOrdP("pobdesc");
                dispatch(getOrder(ordP));
            }
        }

        return (
            <div className={style.order}>
                {ord==="asc"?<button className={style.button} onClick={e => Order(e)}>Z-A</button>:
                <button className={style.button} onClick={e => Order(e)}>A-Z</button>}
                {ordP==="pobasc"?<button className={style.button2} onClick={e => OrderP(e)}>↡ Population</button>:
                <button className={style.button2} onClick={e => OrderP(e)}>↟ Population</button>}
            </div>
        )
    }