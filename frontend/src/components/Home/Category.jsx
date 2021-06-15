import React, { useState, useContext } from 'react'

export default function Category() {

    const label_category = {
        paddingRight: "50px",
    }
    const input_category = {
        marginLeft: "10px"
    }

    function SelectOption() {
        return (
            <select className="selectoption_from " defaultValue={1} aria-label="Default select example" >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>);
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
