import { AuthContext } from '../../Contexts/AuthContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
function Card(props) {
    const [auth, setAuth] = useContext(AuthContext);
    const item = props.recipe;
    return (
        <div className="col-12 col-md-3 col-sm-6 pizza-4" >
            <a href="#"><img src={item.img} alt="" className="trang" /></a>
            {
                auth.isAuth ? auth.user.id === item.userID &&
                    (<div className="from-btn"  >
                        <button className="delete" type="submit" onClick={() => (props.handleDelete(item.id))} >
                            <svg viewBox="0 0 384 384" width="14" height="16" >
                                <path d="M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z" />
                                <polygon points="266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333    " />

                            </svg>
                        </button>
                        <button className="update" type="submit">
                            <svg height="14px" viewBox="0 0 512 512" width="14px"><path d="m61.496094 279.609375c-.988282-8.234375-1.496094-16.414063-1.496094-23.609375 0-107.402344 88.597656-196 196-196 50.097656 0 97 20.199219 131.5 51.699219l-17.300781 17.601562c-3.898438 3.898438-5.398438 9.597657-3.898438 15 1.800781 5.097657 6 9 11.398438 10.199219 3.019531.605469 102.214843 32.570312 95.898437 31.300781 8.035156 2.675781 19.917969-5.894531 17.703125-17.699219-.609375-3.023437-22.570312-113.214843-21.300781-106.902343-1.199219-5.398438-5.101562-9.898438-10.5-11.398438-5.097656-1.5-10.800781 0-14.699219 3.898438l-14.699219 14.398437c-45.300781-42.296875-107.503906-68.097656-174.101562-68.097656-140.699219 0-256 115.300781-256 256v.597656c0 8.457032.386719 14.992188.835938 19.992188.597656 6.625 5.480468 12.050781 12.003906 13.359375l30.816406 6.160156c10.03125 2.007813 19.050781-6.402344 17.839844-16.5zm0 0" /><path d="m499.25 222.027344-30.90625-6.296875c-10.042969-2.046875-19.125 6.371093-17.890625 16.515625 1.070313 8.753906 1.546875 17.265625 1.546875 23.753906 0 107.398438-88.597656 196-196 196-50.097656 0-97-20.199219-131.5-52l17.300781-17.300781c3.898438-3.898438 5.398438-9.597657 3.898438-15-1.800781-5.101563-6-9-11.398438-10.199219-3.019531-.609375-102.214843-32.570312-95.898437-31.300781-5.101563-.898438-10.203125.601562-13.5 4.199219-3.601563 3.300781-5.101563 8.699218-4.203125 13.5.609375 3.019531 22.574219 112.210937 21.304687 105.898437 1.195313 5.402344 5.097656 9.902344 10.496094 11.398437 6.261719 1.570313 11.488281-.328124 14.699219-3.898437l14.402343-14.398437c45.296876 42.300781 107.5 69.101562 174.398438 69.101562 140.699219 0 256-115.300781 256-256v-.902344c0-6.648437-.242188-13.175781-.796875-19.664062-.570313-6.628906-5.433594-12.074219-11.953125-13.40625zm0 0" /></svg>
                        </button>
                    </div>
                    )
                    : ""
            }
            <div className="pizza-name"><a className="pizza-bccf">{item.name}</a></div>
            <div className="program">{item.description}</div>
            <div className="downloads">
                <Link className="demobutton button" to={`detail-recipe/${item.id}`} rel="nofollow noopener"> Detail</Link>

            </div>
        </div>
    )

}
export default Card