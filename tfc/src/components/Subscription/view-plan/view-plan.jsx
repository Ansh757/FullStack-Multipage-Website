import React, {Component, useState, createContext, useEffect} from 'react';
import './view-plan.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useParams, Link} from "react-router-dom";
import moment from 'moment';



export default function ViewPlan() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [username, setUsername3] = useState("");
    const [Membership, setMembership] = useState("");
    const [amount, setAmount] = useState("");
    const [Card_info, setCardInfo] = useState("");
    const [isActiveMembership, setActiveMembership] = useState(Boolean);
    const [last_modified, setModified] = useState()
    const [Next_payment, setNext] = useState();
    const [page, setPage] = useState(1)
    const [page_count, setPageCount] = useState(1)

    const url = `http://127.0.0.1:8000/subscriptions/plans/view/${id}/?page=${page}`;

    useEffect(() => {
        if (!localStorage.getItem('SavedToken')) {
            navigate('/login');
        } 
    }, [localStorage.getItem('SavedToken')])

    useEffect(() => {
        axios({
            method: "get",
            url: url,
            headers: {
                Authorization: localStorage.getItem('SavedToken')
            }
        })

        .then(res => {handle(res.data)
            setPageCount(res.data.page_count)
            })

    }, [page])

    function handle(res) {
        setUsername3(res.results[0]["username"])
        setMembership(res.results[0]["Membership"])
        setAmount(res.results[0]['amount'])
        setCardInfo(res.results[0]['Card_info'])

        if (res.results[0]['IsActiveMembership'] === true){
            setActiveMembership("Active")}

        else {setActiveMembership("Inactive")}


        setNext(res.results[0]['Next_payment'])
        setModified(res.results[0]['last_modified'])

        // data.results.map(x => (
        //     console.log(data)
        // ))

    }

    let n = moment(last_modified).format('YYYY MM DD, h:mm:ss');



    // console.log(data)
    return(
        <div className='tableDiv'>
            <header>
            <div className="website-logo">
                    <img src="https://www.cs.toronto.edu/~kianoosh/courses/csc309/resources/images/tfc.png" alt="logo-tfc-picture"/>
                </div>
                <div className="navbar">
                    <nav>
                        <ul className="menuItems">
                            <li><a href='/main' data-item='Home'>Home</a></li>
                            <li><a href={'/' + id + '/classes/all'} data-item='Classes'>Classes</a></li>
                            <li><a href={'/' + id + '/studios'} data-item='Studios'>Studios</a></li>
                            <li><a href='/plans' data-item='Subscriptions'>Subscriptions</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="user-logo">
                <Link to={"/" + id + "/profile/"}>
                    <button className="user-btn">
                        <i className="fa-solid fa-user too"></i>
                    </button>
                </Link>
                <button id="icons" className="user-btn" onClick={() => {
                    localStorage.removeItem('SavedToken')
                    window.location.reload()
                }
                }>
                    <i id="icons" className="fa-solid fa-right-from-bracket too"></i>
                </button>
            </div>
        </header>
            <div className='main-title'>
                <span class="blue">{username}'s Subscription History</span>
            </div>

                    <table class="container">
                        <thead>
                            <tr>
                                <th><span className='col'>Username</span></th>
                                <th><span className='col' >Membership</span></th>
                                <th><span className='col'>Amount</span></th>
                                <th><span className='col'>Card Info</span></th>
                                <th><span className='col'>Status</span></th>
                                <th><span className='col'>Next Payment</span></th>
                                <th><span className='col'>Modified</span></th>
                            </tr>
                        </thead>
                        <tbody className='last-hope'>
                            <tr>
                                <td className='roww'>{username}</td>
                                <td className='roww'>{Membership}</td>
                                <td className='roww'>{amount}</td>
                                <td className='roww'>{Card_info}</td>
                                <td className='roww'>{isActiveMembership}</td>
                                <td className='roww'>{Next_payment}</td>
                                <td className='roww'>{n}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className='next-btn'>
                        { page > 1 ?<button className='bn' onClick={() => setPage(page - 1)}>Prev</button> : <></>}
                        { page < page_count ? <button className='bn' onClick={() => setPage(page + 1)}> Next </button>: <></>}
                    </div>
                    <footer>
                <h3>© Ansh, Armaan, Giancarlo </h3>
            </footer>
        </div>
    );
}