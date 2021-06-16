import React, { useState, useEffect } from 'react';

export default function CommentRecipe() {

    // const [comments, setComments] = useState([
    //     { content: "", craeted_at: "", updated_at: "" }
    // ]);
    // const clickAddNewComment = () => {
    //     if (comment === '') return;
    //     setComments([...comments, { content: comment, craeted_at: String(formatDate()), updated_at: "" }]);
    // }

    // function formatDate() {
    //     var date = new Date();
    //     var hours = date.getHours();
    //     var minutes = date.getMinutes();
    //     var day = date.getDay();
    //     var ampm = hours >= 12 ? 'pm' : 'am';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12;
    //     minutes = minutes < 10 ? '0' + minutes : minutes;
    //     var strTime = day + hours + ':' + minutes + ' ' + ampm;
    //     return ('0' + (date.getMonth() + 1)).slice(-2) + "/" + ('0' + date.getDate()).slice(-2) + "/" + date.getFullYear() + "  " + strTime;
    // }
    const [comments, setComments] = useState([]);
    const URL = `${process.env.REACT_APP_API_NNT_READ}`;
    useEffect(() => {
        async function fectlist() {
            const requesURL = URL;
            const response = await fetch(requesURL);
            const reponseJSON = await response.json();
            // console.log({ reponseJSON })

            const data = reponseJSON;
            setComments(data);
            //console.log(data);      
        }
        fectlist();
    }, [])
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
                                {/* onChange={(e) => setComment(e.target.value)} */}
                                    <textarea className="form-control"  placeholder="Leave a comment here"></textarea>
                                    <label>Mời bạn để lại bình luận...</label>
                                </div>
                                <button type="button" className="btn btn-dang">Đăng</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-2">
                    <div className="col-12 col-md-5 dateRight">
                        {comments.map((post) => {
                            // if (post.content !== "") {
                                return (
                                    <div className="form-comment" key={post.id}>
                                        <div className="avatar">
                                            <img src="https://image.cooky.vn/posproduct/g0/5075/s400x400/93644f58-2233-456c-b6f2-f670491e9f65.jpeg" width="50px" height="50px" alt="" />
                                        </div>
                                        <div className="contentAcc">
                                            <div className="nameDate">
                                                <p className="nameAcc">Name</p>
                                                <p className="dateComment"><i className="far fa-clock"></i> {post.created_at}</p>
                                            </div>
                                            <p className="content">{post.content}</p>
                                        </div>
                                    </div>
                                )
                            // }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}