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
        // cais useEffect hoat dong ra sao biet chua ? kha kha, vay noi di no hoat dong ra sao
        // nó hoạt động khi sau khi return chạy, và nó chỉ chạy lần đầu,
        // trong trường hợp tham số thử 2 của useEffect có sự thay đổi thì sec được chạy lại lần nữa. 
        // giải thích:
        // b1: khi vào trang category, return sẽ được chạy mặc định ban đầu.
        // b2: các useState có sự thay đổi gì không ? không thì thôi, có thì return được chạy lần 2 
        // và vì là lần 2 nên không phải chạy useEffect.
        // b3: các tham số thứ 2 của hàm useEffct vừa đưa vào nếu thay đổi thì hàm useEffect được chạy.


        // chạy lần đầu thì categories.length <= 0 nên sẽ được load từ csdl, lầy sau thì không cần.
        if (categories.length <= 0) {
            // câu hỏi là: xóa cái if luôn được không? oki được, NHƯNG, tốn thời gian lấy dữ liệu.
            fetchListCategories();
        }


        // vì phần radioName, và radioCate là 2 tham số được truyền vào với tư cách là một mảng,
        // là một tham số thứ 2 của hàm useEffect, cho nên, hàm useEffect được chạy khi 1 trong 2 có sự thay đổi,

        if (radioName) {
            // nếu cái này check, thì thằng này được gán
            props.setSearchType("name");
        }
        if (radioCate) {
            // nếu cái này check, thì thằng này được gán
            props.setSearchType("category");
        }

        // lỗi lúc nãy, là do: khi cái setState bên Ccategory đã chạy, và vòng đời của Category được thực hiện
        // theo kiểu 1 stack, thì setState từ props lại can thiệp, thì lại có 2 vòng đời được sinh ra.
        // nên phát sinh lỗi về stack vòng đòi trong reactjs. hết. đọc không hiểu thì cũng ráng đọc ha.
        // sau này đụng độ thì có gì t nói sai quay lại chửi t @@ @@
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
                            Search by Category
                            <input style={input_category}
                                name="radiodelete" type="radio"
                                checked={radioCate}
                                onChange={() => {
                                    setRadioCate(true);
                                    setRadioName(false);
                                }} />
                        </label>

                        <label>
                            Search by Recipe name
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
