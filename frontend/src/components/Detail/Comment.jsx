import React, { useState, useEffect } from 'react';
import { API_LINK_COMMENT_READ } from '../../api_link';

export default function CommentRecipe() {
    
    const [comments, setComments] = useState([]);
    const URL = API_LINK_COMMENT_READ;
    useEffect(() => {
        async function fetchList() {
            const response = await fetch(URL);
            const data = await response.json();
            setComments(data);
        }
        fetchList();
    }, []);

    return (
        <div className="commentRecipe">
            <div className="container">
                <div className="bod">
                    <div className="comment">(0) Bình Luận</div>
                    <div className="SortComment">
                        Sắp Xếp
                        <select className="selectSort">
                            <option className="commentLatest">Mới nhất</option>
                            <option className="commentOldest">Cũ nhất</option>
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
                                    <textarea className="form-control" placeholder="Leave a comment here"></textarea>
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