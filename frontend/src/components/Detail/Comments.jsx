import React, { useContext, useEffect, useState } from 'react';
import { API_LINK_COMMENT_CREATE, API_LINK_SORT_COMMENT } from '../../api_link';
import { AuthContext } from '../../Contexts/AuthContext';
import Comment from './Comment'

export default function CommentRecipe(props) {
    const recipe_id = props.recipe_id;
    const [auth] = useContext(AuthContext);
    const [content, setContent] = useState('');
    const [sortComment, setSortComment] = useState([]);
    var account_id = auth.user.id;
    const comments = props.comments
    const apiComment = API_LINK_COMMENT_CREATE;

    //console.log(auth.user.id);
    const loginStatus = () => {
        if (auth.isAuth === false) {
            alert("Bạn cần đăng nhập!")
        }
    }
    function getDate() {
        var currentdate = new Date();
        var datetime = currentdate.getFullYear() + "-" + ('0' + (currentdate.getMonth()+1)).slice(-2)
            + "-" + ('0' + currentdate.getDate()).slice(-2) + " "
            + ('0' + currentdate.getHours()).slice(-2) + ":"
            + ('0' + currentdate.getMinutes()).slice(-2) + ":" + ('0' + currentdate.getSeconds()).slice(-2);
        return datetime;
    }
    //console.log();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (content.trim().length !== 0 && auth.isAuth === true) {
            // luu database
            const createComment = async (inputURL, inputData) => {
                const data = {
                    ...inputData
                }
                const response = await fetch(inputURL, {
                    method: "POST",
                    body: JSON.stringify(data),
                });
            return response.json();
            }

            //  2021-06-20 00:08:00
            const newComment = {
                content: content,
                account_id: account_id,
                recipe_id: recipe_id,
                created_at: getDate(),

            }

            createComment(apiComment, { ...newComment })
                .then(message => {
                    props.setComments([...comments, newComment])
                    console.log("message: ", message);
                })

        }
    }
    //sắp xếp bình luận theo thứ tự mới -> cũ
    function sortLatest(){
        const fetchListCommentByCreatedAt = async (url, recipe_id) => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Accept': 'application/json;charset=UTF-8'
                },
                body: JSON.stringify({ recipe_id: recipe_id }),
            });
            return response.json();
        }
        fetchListCommentByCreatedAt(API_LINK_SORT_COMMENT, recipe_id )
        .then(result => {
            setSortComment(result)
        })
    }        
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
                        <form className="form-comment" onSubmit={handleSubmitForm}>
                            <div className="avatar">
                                <img src="https://image.cooky.vn/posproduct/g0/5075/s400x400/93644f58-2233-456c-b6f2-f670491e9f65.jpeg" width="50px" height="50px" alt="" />
                            </div>
                            <div className="cmt">
                                <div className="form-floating">
                                    {/* onChange={(e) => setComment(e.target.value)} */}
                                    <textarea className="form-control" onChange={(e) => setContent(e.target.value)} defaultValue={content} placeholder="Leave a comment here" onClick={loginStatus}></textarea>
                                    <label>Mời bạn để lại bình luận...</label>
                                </div>
                                <button type="submit" className="btn-post"><i className="fas fa-pen"></i></button>
                            </div>
                        </form>
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