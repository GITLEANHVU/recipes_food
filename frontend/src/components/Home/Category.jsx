import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import Listcate from './Listcate';

export default function Category() {

    const label_category = {
        paddingRight: "50px",
    }
    const input_category = {
        marginLeft: "10px"
    }

    //data

    const [listname, getname] = useState([]);

    const URL = `${process.env.REACT_APP_API_TTHT_READ}`;

    useEffect(() => {
        async function fectlist() {
            const requesURL = URL;
            const response = await fetch(requesURL);
            const reponseJSON = await response.json();
            // console.log({ reponseJSON })

            const data = reponseJSON;
            getname(data);
            // console.log(getname(data));
            
        }
        fectlist();
    }, []);



    function SelectOption() {
        return (
            <select className="selectoption_from " >
                {listname.map((post) => (
                    <option key={post.id}>{post.name}</option>
                ))}
            </select>
        );
    }

    const [radioName, setRadioName] = useState(true);
    const [radioCate, setRadioCate] = useState(false);

    // check name radiobutton
    const handleRadioChange = () => {
        if (radioName) {
            return 'name'
        }
        if (radioCate) {
            return 'category'
        }
    };

    return (
        <div className="container">
            <div className="row" style={{ marginTop: "0" }}>
                <div className="from-cate-delete">
                    <div className="from-category">

                        <label style={label_category}>
                            categories
                            <input style={input_category} name="radiodelete" type="radio" checked={radioCate} onChange={() => { setRadioCate(true); setRadioName(false); }} />
                        </label>

                        <label>
                            product name
                            <input style={input_category} name="radiodelete" type="radio" checked={radioName} onChange={() => { setRadioCate(false); setRadioName(true); }} />
                        </label>
                    </div>
                </div>
            </div>
            {handleRadioChange() === 'category' && <SelectOption />}
        </div>

    )
}
