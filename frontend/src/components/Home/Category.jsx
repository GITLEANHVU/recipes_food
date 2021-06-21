import React, { useEffect, useState } from 'react';
import { API_LINK_CATEGORY_READ } from '../../api_link';

export default function Category(props) {
    const label_category = {
        paddingRight: "20px",
    }
    const input_category = {
        marginLeft: "10px"
    }

    const [radioName, setRadioName] = useState(false);
    const [radioCate, setRadioCate] = useState(false);
    const [categories, setCategories] = useState([]);

    // check name radiobutton
    const handleRadioChange = () => {
        if (radioName) {
            return 'name'
        }
        if (radioCate) {
            return 'category'
        }
    };

    useEffect(() => {

        async function fetchListCategories() {
            const response = await fetch(API_LINK_CATEGORY_READ);
            const result = await response.json();
            setCategories(result);
        }

        if (categories.length <= 0) {
            fetchListCategories();
        }

<<<<<<< HEAD
=======

>>>>>>> b49b4220f2aefd9a9b9dcf16e42818c5e87e0755
        if (radioName) {
            props.setSearchType("name");
        }
        if (radioCate) {
            props.setSearchType("category");
        }

    }, [radioCate, radioName]);

    return (
        <React.Fragment>
            <div className="row">
                <div className="from-cate-delete mt-4 mr-5">
                    <div className="from-category">
                        <label>
                            {handleRadioChange() === 'category' &&
                                (
                                    <select className="selectoption_from ml-4" onChange={e => props.setCategoryValue(e.target.value)} >
                                        {
                                            categories.map((category) =>
                                                <option value={category.id} key={category.id}>{category.name}</option>
                                            )
                                        }
                                    </select>
                                )
                            }
                        </label>
                        <label style={label_category}>
                            Tìm kiếm theo loại
                            <input style={input_category}
                                name="radiodelete" type="radio"
                                checked={radioCate}
                                onChange={() => {
                                    setRadioCate(true);
                                    setRadioName(false);
                                }} />
                        </label>

                        <label>
                            Tìm kiếm theo tên
                            <input style={input_category}
                                name="radiodelete" type="radio"
                                checked={radioName}
                                onChange={() => {
                                    setRadioCate(false);
                                    setRadioName(true);
                                }} />
                        </label>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
