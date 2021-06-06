import React from 'react';
import './DetailRecipe.css';
// import { FaHeart } from 'react-icons/fa';

function DetailRecipe() {
    return (
        <div className="detailRecipe">
            <div className="container">
                <div className="row g-2">
                    <div className="col-5 sm-3">
                        <div className="imgRecipe">
                            <img className="img-fluid" src="https://image.cooky.vn/posproduct/g0/5075/s400x400/93644f58-2233-456c-b6f2-f670491e9f65.jpeg"/>
                        </div>
                        <div className="status">
                            {/* <FaHeart className="heart" /> 0 */}
                            <a href="#" className="btn btn-primary">Sửa</a>
                            <a href="#" className="btn btn-danger">Xóa</a>
                        </div>
                    </div>
                    <div className="col-7 sm-9">
                        <div className="p-3 border bg-light">
                            <h3>Măng Tây Xào Tỏi</h3>
                            <p>Măng tây vốn dĩ là món ăn vô cùng dễ ăn và dễ ghiền, vì vậy mà chỉ cần măng tây xào tỏi thôi cũng đã khiến bữa cơm của bạn và gia đình đầy đủ phong phú rồi, nếu bạn muốn "đổi gió" cho bữa cơm tối, hãy đừng ngần ngại order ngay pack nguyên liệu Măng tây xào tỏi để trổ tài nấu nướng nhé!
                            </p>
                            <h5>Nguyên liệu</h5>
                            <ul className="list-ingredients ">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                                <li className="list-group-item">A fourth item</li>
                                <li className="list-group-item">And a fifth one</li>
                            </ul>
                        </div>
                    </div>
                    <span className="tutorial">Hướng dẫn chế biến</span>
                    <div className="row g-2 boderTutorial">
                        <div className="col-3">
                            <h5 className="step">Các bước thực hiện</h5>
                        </div>
                        <div className="col-9 ">
                            <div className="description">
                                <ul className="list-step">
                                    <li >Rửa sạch các nguyên liệu đã sơ chế để ráo nước. Băm nhuyễn tỏi, tỏi tép đập dập. Hành lá, ngò rí cắt khúc.</li>
                                    <li >Cho 500 ml nước lọc vào nồi đun sôi rồi cho măng tây vào luộc khoảng 1 phút rồi vớt ra trụng vào nước đá cho nguội, vớt ra để ráo.</li>
                                    <li >Bật bếp lên cho 2 thìa canh dầu ăn vào chảo đợi dầu nóng cho tỏi băm, tỏi tép vào phi thơm. Sau đó cho măng tây, thêm từ từ gói gia vị khô, nước mắm vào xào khoảng 5 phút trên lửa vừa, thêm hành lá, ngò rí đảo đều, nêm nếm lại cho vừa ăn rồi tắt bếp.</li>
                                    <li >Bày món ăn ra đĩa rắc tỏi phi lên mặt, trang trí tùy thích và thưởng thức. Ngon hơn khi ăn nóng cùng cơm trắng, chấm kèm với nước tương ớt.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bod">
                    <div className="comment">(0) Bình Luận</div>
                    <div className="SortComment">
                        Sắp Xếp
                    <select className="selectSort">
                            <option>Mới nhất</option>
                            <option>Cũ nhất</option>
                        </select>
                    </div>
                </div>

                <div className="form-comment">
                    <div className="avatar">
                        <img src="https://image.cooky.vn/posproduct/g0/5075/s400x400/93644f58-2233-456c-b6f2-f670491e9f65.jpeg" width="50px" height="50px" />
                    </div>
                    <div className="cmt">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here"></textarea>
                            <label for="floatingTextarea">Mời bạn để lại bình luận...</label>
                        </div>
                        <button type="button" className="btn btn-dang">Đăng</button>
                    </div>
                </div>
                <div className="form-comment">
                    <div className="avatar">
                        <img src="https://image.cooky.vn/posproduct/g0/5075/s400x400/93644f58-2233-456c-b6f2-f670491e9f65.jpeg" width="50px" height="50px" />
                    </div>
                    <div className="contentAcc">
                        <p className="nameAcc">Name</p>
                        <p className="content">nội dung bình luận</p>
                    </div>

                </div>
            </div>
            <p></p>
        </div>
    )
}
export default DetailRecipe;