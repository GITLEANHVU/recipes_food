import React, { useState } from 'react';
import './DetailRecipe.css';

export default function DetailRecipe() {
    const changeHeart = () => {
        document.querySelector('.fa-heart').style.color = 'red';
    }
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [step, setStep] = useState('');
    const [ingredient, setIngredient] = useState('');
    //
    const [ingredients, setIngredients] = useState(['Tỏi', 'Ớt', 'Măng Tây', 'Bột ngọt', 'Nước Mắm']);
    const [steps, setSteps] = useState([
        'Rửa sạch các nguyên liệu đã sơ chế để ráo nước. Băm nhuyễn tỏi, tỏi tép đập dập. Hành lá, ngò rí cắt khúc.',
        'Cho 500 ml nước lọc vào nồi đun sôi rồi cho măng tây vào luộc khoảng 1 phút rồi vớt ra trụng vào nước đá cho nguội, vớt ra để ráo.',
        'Bật bếp lên cho 2 thìa canh dầu ăn vào chảo đợi dầu nóng cho tỏi băm, tỏi tép vào phi thơm. Sau đó cho măng tây, thêm từ từ gói gia vị khô, nước mắm vào xào khoảng 5 phút trên lửa vừa, thêm hành lá, ngò rí đảo đều, nêm nếm lại cho vừa ăn rồi tắt bếp.',
        'Bày món ăn ra đĩa rắc tỏi phi lên mặt, trang trí tùy thích và thưởng thức. Ngon hơn khi ăn nóng cùng cơm trắng, chấm kèm với nước tương ớt.',
    ]);
    const clickAddNewComment = () => {
        if (comment === '') return;
        setComments([...comments, comment]);
    }
    //dang loi
    function dateComment() {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return time;
    };
    return (
        <div className="detailRecipe">
            <div className="container">
                <div className="row g-2 contentTop">
                    <div className="col-4 sm-3">
                        <div className="imgRecipe">
                            <img className="img-detail" src="https://image.cooky.vn/posproduct/g0/5075/s400x400/93644f58-2233-456c-b6f2-f670491e9f65.jpeg" />
                        </div>
                        <div className="status">
                            <a href="#" className="btn heart" onClick={changeHeart}><i className="fas fa-heart"></i></a>
                            <a href="#" className="btn editRecipe"><i className="far fa-edit"></i></a>
                            <a href="#" className="btn deleteRecipe"><i className="fas fa-trash"></i></a>

                        </div>
                    </div>
                    <div className="col-8 sm-9">
                        <div className="p-3 border bg-light2">
                            <h3>Măng Tây Xào Tỏi</h3>
                            <div className="chef">
                                <p className="nameChef"><i className="fas fa-user-edit"></i> Nguyên Văn An</p>
                                <p className="dateRecipe"><i className="fas fa-calendar-alt"></i> 06/06/2021</p>
                            </div>
                            <p className="descriptionRecipe">Măng tây vốn dĩ là món ăn vô cùng dễ ăn và dễ ghiền, vì vậy mà chỉ cần măng tây xào tỏi thôi cũng đã khiến bữa cơm của bạn và gia đình đầy đủ phong phú rồi, nếu bạn muốn "đổi gió" cho bữa cơm tối, hãy đừng ngần ngại order ngay pack nguyên liệu Măng tây xào tỏi để trổ tài nấu nướng nhé!
                            </p>
                            <h3>Nguyên liệu</h3>
                            <ol className="list-group list-group-numbered">
                                {ingredients.map((ingredient_content, index) => {
                                    return (<li key={index} className="list-group-item">{ingredient_content}</li>)
                                })}
                            </ol>

                        </div>
                    </div>
                    <span className="tutorial">Hướng dẫn chế biến</span>
                    <div className="row g-2 boderTutorial">
                        {/* <div className="col-3">
                            <h5 className="step">Các bước thực hiện</h5>
                        </div> */}
                        <div className="col-12 ">
                            <div className="description">
                                <ol className="list-step">
                                    {steps.map((ingredient_content, index) => {
                                        return (
                                            <li key={index}>{ingredient_content}</li>
                                        )
                                    })}
                                </ol>
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
                <div className="row g-2">
                    <div className="col-4">
                        <div className="form-comment">
                            <div className="avatar">
                                <img src="https://image.cooky.vn/posproduct/g0/5075/s400x400/93644f58-2233-456c-b6f2-f670491e9f65.jpeg" width="50px" height="50px" />
                            </div>
                            <div className="cmt">
                                <div className="form-floating">
                                    <textarea className="form-control" onChange={(e) => setComment(e.target.value)} placeholder="Leave a comment here"></textarea>
                                    <label>Mời bạn để lại bình luận...</label>
                                </div>
                                <button type="button" className="btn btn-dang" onClick={clickAddNewComment}>Đăng</button>
                            </div>
                        </div>
                    </div>
                </div>
                {comments.map((comment_content, index) => {
                    return (
                        <div className="form-comment" key={index}>
                            <div className="avatar">
                                <img src="https://image.cooky.vn/posproduct/g0/5075/s400x400/93644f58-2233-456c-b6f2-f670491e9f65.jpeg" width="50px" height="50px" />
                            </div>
                            <div className="contentAcc">
                                <p className="nameAcc">Name</p>
                                <p className="content">{comment_content}</p>
                                {/* Lỗi date chưa fix dc */}
                                <p className="dateComment">{dateComment()}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <p></p>
        </div>
    )
}