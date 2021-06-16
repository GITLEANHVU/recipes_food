
import React, { useState, useEffect } from 'react';
import './DetailRecipe.css';
import CommentRecipe from './Comment.jsx'

export default function DetailRecipe() {

    const [colorHeart, setColorHeart] = useState('black');
    const [recipe, setRecipe] = useState({});

    // useEffect(() => {
    //     // lay du lieu tu db
    //     async function fetchRecipe(){
    //         const dataURL = apiURL;
    //         const response = await fetch(dataURL);
    //         const responseJS = await response.json();
    //         console.log(responseJS);

    //     }
    //     // set du lieu cho state
    //     fetchRecipe();
    // }, [])

    // mỗi thằng chứa 2 time riêng
    const [ingredients, setIngredients] = useState(['Tỏi', 'Ớt', 'Măng Tây', 'Bột ngọt', 'Nước Mắm']);
    const [steps, setSteps] = useState([
        'Rửa sạch các nguyên liệu đã sơ chế để ráo nước. Băm nhuyễn tỏi, tỏi tép đập dập. Hành lá, ngò rí cắt khúc.',
        'Cho 500 ml nước lọc vào nồi đun sôi rồi cho măng tây vào luộc khoảng 1 phút rồi vớt ra trụng vào nước đá cho nguội, vớt ra để ráo.',
        'Bật bếp lên cho 2 thìa canh dầu ăn vào chảo đợi dầu nóng cho tỏi băm, tỏi tép vào phi thơm. Sau đó cho măng tây, thêm từ từ gói gia vị khô, nước mắm vào xào khoảng 5 phút trên lửa vừa, thêm hành lá, ngò rí đảo đều, nêm nếm lại cho vừa ăn rồi tắt bếp.',
        'Bày món ăn ra đĩa rắc tỏi phi lên mặt, trang trí tùy thích và thưởng thức. Ngon hơn khi ăn nóng cùng cơm trắng, chấm kèm với nước tương ớt.',
    ]);
    return (
        <div className="detailRecipe">
            <div className="container">
                <div className="row g-2 contentTop">
                    <div className="col-4 sm-3">
                        <div className="imgRecipeBox">
                            <div className="imgRecipe">
                                <img className="img-detail" src="https://image.cooky.vn/posproduct/g0/5075/s400x400/93644f58-2233-456c-b6f2-f670491e9f65.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="status">
                            <button onClick={() => { setColorHeart("red") }} className="btn heart"><i className="fas fa-heart" style={{ color: colorHeart }}></i></button>
                            <button className="btn editRecipe"><i className="far fa-edit"></i></button>
                            <button className="btn deleteRecipe"><i className="fas fa-trash"></i></button>
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
                <CommentRecipe />
            </div>
        </div>
    )
}
