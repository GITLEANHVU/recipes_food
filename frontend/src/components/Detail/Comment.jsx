import React, { useState } from 'react';

export default function CommentRecipe() {

    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([
        { content: "", craeted_at: "", updated_at: "" }
    ]);
    const clickAddNewComment = () => {
        if (comment === '') return;
        setComments([...comments, { content: comment, craeted_at: String(formatDate()), updated_at: "" }]);
    }

    function formatDate() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var day = date.getDay();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = day + hours + ':' + minutes + ' ' + ampm;
        return ('0' + (date.getMonth() + 1)).slice(-2) + "/" + ('0' + date.getDate()).slice(-2) + "/" + date.getFullYear() + "  " + strTime;
    }
    return (
        <div className="commentRecipe">
            <div className="container">
                <div className="bod">
                    <div className="comment">Bình Luận</div>
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
                                <img src="https://image.cooky.vn/posproduct/g0/5075/s400x400/93644f58-2233-456c-b6f2-f670491e9f65.jpeg" width="50px" height="50px" alt="" />
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
                <div className="row g-2">
                    <div className="col-12 col-md-5 dateRight">
                        {
                            comments.map((comment_content, index) => {
                                if (comment_content.content !== "") {
                                    return (
                                        <div className="form-comment" key={index}>
                                            <div className="avatar">
                                                <img src="https://image.cooky.vn/posproduct/g0/5075/s400x400/93644f58-2233-456c-b6f2-f670491e9f65.jpeg" width="50px" height="50px" alt="" />
                                            </div>
                                            <div className="contentAcc">
                                                <div className="nameDate">
                                                    <p className="nameAcc">Name {console.log(index)}</p>
                                                    <p className="dateComment"><i className="far fa-clock"></i> {comment_content.craeted_at}</p>
                                                </div>
                                                <p className="content">{comment_content.content}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                return '';
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}