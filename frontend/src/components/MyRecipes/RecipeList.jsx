import React, { useState } from 'react'
import './MyRecipe.css';
/**
 * - giao diện chưa responesive, chưa có danh sách categories, chỗ tìm kiếm thì là radio thì phù hợp hơn,
 *          chỉ tìm theo cate hoặc name
 * - đưa data mẫu vào trong này rồi show ra ko phải copy paste nè, rồi danh sách cũng vậy nè,
 * thêm sự kiện cho các nút click search, lấy giá trị input, lấy giá trị radio  
 * - thêm nút chỉnh và xóa  vào, chức năng xóa 
 * - rồi nè làm đi, tạo hàm ra rồi xử lý he, au ke, mà từ từ
 * có cái lỗi này, k biết sao
 *xl, lg, md, sm,
 */
const Card = (props) => {
    return (
        <div className="card">
            <img src="https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="content">
                    <h5 className="card-title">Chicken Biryani |How to make chicken biryani</h5>
                    <p className="card-text">Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try</p>
                </div>
                <div className="btn-group">
                    <a href="#a" className="btn btn-primary btn-show">Show detail</a>
                    <div className="btn-handle">
                        <span className="icon-update">
                            <a href="#a" className="btn btn-warning"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '15px' }}>
                                <path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                            </svg></a>
                        </span>
                        <span className="icon-delete">
                            <a href="#a" className="btn btn-danger ">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '15px' }}>
                                    <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default function RecipeList() {
    const [initialData, setInitialData] = useState([
        { id: 0, title: "Chicken Biryani |How to make chicken biryani", description: "Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg` },
        { id: 1, title: "Chicken Biryani |How to make chicken biryani", description: "Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg` },
        { id: 2, title: "Chicken Biryani |How to make chicken biryani", description: "Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg` },
        { id: 3, title: "Chicken Biryani |How to make chicken biryani", description: "Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg` },
        { id: 4, title: "Chicken Biryani |How to make chicken biryani", description: "Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg` },
        { id: 5, title: "Chicken Biryani |How to make chicken biryani", description: "Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try", imageLink: `https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg` },
    ])
    const listCards = () => {
        const result = initialData.map((value, index) => <Card {...value} />)
        if (result.length !== 0) {
            return result
        }
        return [];
    }

    return (

        <div className="col-12 recipe-list">

            <div className="row">
                <div className="col-12">
                    <h2 className="recipe-title">RECIPE LIST</h2>
                    <div className="box-sort-by">
                        <span className="sort-by">Sort by:</span>
                        <ul className="sort-list">
                            <li className="sort-item">
                                <a href="/#" className="sort-link products-sort-order">
                                    <input type="checkbox" /> <span className="sort-name">Recipe name</span>
                                </a>
                            </li>
                            <li className="sort-item">
                                <a href="/#" className="sort-link products-sort-order">
                                    <input type="checkbox" /> <span className="sort-name">Recipe category</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row">
                {listCards()}
            </div>
            {/* LIST RECIPE ALL */}
            <div className="row all-product">
                {/* SP1 */}
                <div className="col-3">
                    <div className="card">
                        <img src="https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="content">
                                <h5 className="card-title">Chicken Biryani |How to make chicken biryani</h5>
                                <p className="card-text">Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try</p>
                            </div>
                            <div className="btn-group">
                                <a href="#" className="btn btn-primary btn-show">Show detail</a>
                                <div className="btn-handle">
                                    <span className="icon-update">
                                        <a href="#" className="btn btn-warning "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '15px' }}>
                                            <path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                                        </svg></a>
                                    </span>
                                    <span className="icon-delete">
                                        <a href="#" className="btn btn-danger ">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '15px' }}>
                                                <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* SP2 */}
                <div className="col-3">
                    <div className="card">
                        <img src="https://foodrecipebook.com/wp-content/uploads/2021/06/Jeera-rice-recipe-Cumin-Rice-Recipe-1-840x473.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="content">
                                <h5 className="card-title">Jeera rice recipe (Cumin Rice Recipe)</h5>
                                <p className="card-text">Jeera rice recipe is a one-pot dish is a flavored dish using with saute rice with ghee,cumin seed flavored are the main flavored in the whole spices,powder spices,meat,powder spices,meat</p>
                            </div>
                            <div className="btn-group">
                                <a href="#" className="btn btn-primary btn-show">Show detail</a>
                                <div className="btn-handle">
                                    <span className="icon-update">
                                        <a href="#" className="btn btn-warning "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '15px' }}>
                                            <path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                                        </svg></a>
                                    </span>
                                    <span className="icon-delete">
                                        <a href="#" className="btn btn-danger ">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '15px' }}>
                                                <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* SP3 */}
                <div className="col-3">
                    <div className="card">
                        <img src="https://foodrecipebook.com/wp-content/uploads/2021/03/WhatsApp-Image-2020-09-20-at-20.26.51-750x563.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="content">
                                <h5 className="card-title">Gujiya Recipe (Hyderabadi methi)</h5>
                                <p className="card-text">Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try</p>
                            </div>
                            <div className="btn-group">
                                <a href="#" className="btn btn-primary btn-show">Show detail</a>
                                <div className="btn-handle">
                                    <span className="icon-update">
                                        <a href="#" className="btn btn-warning "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '15px' }}>
                                            <path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                                        </svg></a>
                                    </span>
                                    <span className="icon-delete">
                                        <a href="#" className="btn btn-danger ">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '15px' }}>
                                                <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src="https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Chicken Biryani |How to make chicken biryani</h5>
                            <p className="card-text">Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try</p>
                            <div className="btn-group">
                                <a href="#" className="btn btn-primary btn-show">Show detail</a>
                                <div className="btn-handle">
                                    <span className="icon-update">
                                        <a href="#" className="btn btn-warning"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '15px' }}>
                                            <path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                                        </svg></a>
                                    </span>
                                    <span className="icon-delete">
                                        <a href="#" className="btn btn-danger">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '15px' }}>
                                                <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row all-product">
                {/* SP1 */}
                <div className="col-3">
                    <div className="card">
                        <img src="https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="content">
                                <h5 className="card-title">Chicken Biryani |How to make chicken biryani</h5>
                                <p className="card-text">Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try</p>
                            </div>
                            <div className="btn-group">
                                <a href="#" className="btn btn-primary btn-show">Show detail</a>
                                <div className="btn-handle">
                                    <span className="icon-update">
                                        <a href="#" className="btn btn-warning "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '15px' }}>
                                            <path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                                        </svg></a>
                                    </span>
                                    <span className="icon-delete">
                                        <a href="#" className="btn btn-danger ">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '15px' }}>
                                                <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* SP2 */}
                <div className="col-3">
                    <div className="card">
                        <img src="https://foodrecipebook.com/wp-content/uploads/2021/06/Jeera-rice-recipe-Cumin-Rice-Recipe-1-840x473.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="content">
                                <h5 className="card-title">Jeera rice recipe (Cumin Rice Recipe)</h5>
                                <p className="card-text">Jeera rice recipe is a one-pot dish is a flavored dish using with saute rice with ghee,cumin seed flavored are the main flavored in the whole spices,powder spices,meat,powder spices,meat</p>
                            </div>
                            <div className="btn-group">
                                <a href="#" className="btn btn-primary btn-show">Show detail</a>
                                <div className="btn-handle">
                                    <span className="icon-update">
                                        <a href="#" className="btn btn-warning "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '15px' }}>
                                            <path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                                        </svg></a>
                                    </span>
                                    <span className="icon-delete">
                                        <a href="#" className="btn btn-danger ">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '15px' }}>
                                                <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* SP3 */}
                <div className="col-3">
                    <div className="card">
                        <img src="https://foodrecipebook.com/wp-content/uploads/2021/03/WhatsApp-Image-2020-09-20-at-20.26.51-750x563.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="content">
                                <h5 className="card-title">Gujiya Recipe (Hyderabadi methi)</h5>
                                <p className="card-text">Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try</p>
                            </div>
                            <div className="btn-group">
                                <a href="#" className="btn btn-primary btn-show">Show detail</a>
                                <div className="btn-handle">
                                    <span className="icon-update">
                                        <a href="#" className="btn btn-warning "><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '15px' }}>
                                            <path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                                        </svg></a>
                                    </span>
                                    <span className="icon-delete">
                                        <a href="#" className="btn btn-danger ">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '15px' }}>
                                                <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src="https://foodrecipebook.com/wp-content/uploads/2021/05/Chicken-Spicy-Biryani-How-to-make-3-840x473.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Chicken Biryani |How to make chicken biryani</h5>
                            <p className="card-text">Traditional Chicken Biryani is made by layering cooked gravy and then layered with parboiled rice,and then topped with fried onion,herb and ghee. You can try</p>
                            <div className="btn-group">
                                <a href="#" className="btn btn-primary btn-show">Show detail</a>
                                <div className="btn-handle">
                                    <span className="icon-update">
                                        <a href="#" className="btn btn-warning"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{ width: '15px' }}>
                                            <path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                                        </svg></a>
                                    </span>
                                    <span className="icon-delete">
                                        <a href="#" className="btn btn-danger">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '15px' }}>
                                                <path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
