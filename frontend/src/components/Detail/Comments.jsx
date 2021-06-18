import React from 'react';
import Comment from './Comment'

export default function CommentRecipe(props) {
    const comments = props.comments;
    console.log("Comment: ", comments);
    
    return (
        <div className="commentRecipe">
            <div className="container">
                <div className="bod">
                    <div className="comment">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        ({comments.length}) Bình Luận
                    </div>
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
                                <button type="button" className="btn-dang">Đăng</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-2">
                    <div className="col-12 col-md-5 dateRight">
                        {
                            comments.map((comment, index) => <Comment key={index} comment={comment} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}