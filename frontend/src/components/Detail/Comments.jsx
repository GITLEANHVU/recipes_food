import React, { useContext, useEffect, useState } from 'react';
import { API_LINK_COMMENT_CREATE, API_LINK_SORT_COMMENT, REACT_APP_UPLOADS_USER } from '../../api_link';
import { AuthContext } from '../../Contexts/AuthContext';
import Comment from './Comment'

export default function CommentRecipe(props) {
    const recipe_id = props.recipe_id;
    const [auth] = useContext(AuthContext);
    const [content, setContent] = useState('');
    var account_id = auth.user.id;
    const comments = props.comments
    const apiComment = API_LINK_COMMENT_CREATE;

    // điều kiện để bình luận
    const loginStatus = () => {
        if (auth.isAuth === false) {
            alert("Bạn cần đăng nhập!")
        }
    }

    //get date
    function getDate() {
        var currentdate = new Date();
        var datetime = currentdate.getFullYear() + "-" + ('0' + (currentdate.getMonth() + 1)).slice(-2)
            + "-" + ('0' + currentdate.getDate()).slice(-2) + " "
            + ('0' + currentdate.getHours()).slice(-2) + ":"
            + ('0' + currentdate.getMinutes()).slice(-2) + ":" + ('0' + currentdate.getSeconds()).slice(-2);
        return datetime;
    }

    //add comment
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (content.trim().length !== 0) {
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
                    //console.log("message: ", message);
                })

        }
    }
    const [sortComment, setSortComment] = useState([]);
    //sắp xếp bình luận theo thứ tự mới -> cũ
    const sortLatest = () => {
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

        fetchListCommentByCreatedAt(API_LINK_SORT_COMMENT, recipe_id)
            .then(result => {
                setSortComment(result)
                console.log("A", sortComment);
                props.setComments(sortComment);

            })

    }

    //check lenght comment > or = 0
    function checkComment() {
        if (comments.length > 0) {
            return (
                comments.length
            )
        }
        else {
            return 0;
        }
    }

    //
    const mouseHover = (e) => {

        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', `${x}px`);
        e.target.style.setProperty('--y', `${y}px`);

    };
    return (
        <div className="commentRecipe">
            <div className="container">
                <div className="bod">
                    <div className="comment">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        ({checkComment()}) Bình Luận
                    </div>
                </div>
                <div className="row g-2">
                    <div className="col-8">
                        <form className="form-comment" onSubmit={handleSubmitForm}>
                            <div className="avatar">
                                <img src={`${REACT_APP_UPLOADS_USER}/avatar.png`} width="50px" height="50px" alt="" />
                            </div>
                            <div className="cmt">
                                <div className="form-floating">

                                    <textarea className="form-control" onChange={(e) => setContent(e.target.value)} defaultValue={content} placeholder="Leave a comment here" onClick={loginStatus}></textarea>
                                    <label>Mời bạn để lại bình luận...</label>
                                </div>
                                <button type="submit" className="btn-post"><i className="fas fa-pen"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
                <button className="btnLatest" onClick={sortLatest} onMouseOver={mouseHover} onMouseOut={mouseHover}><span>Mới Nhất</span></button>
                <div className="row g-2">
                    <div className="col-12 col-md-5 dateRight">
                        {
                            comments.length > 0 &&
                            comments.map((comment, index) => <Comment key={index} comment={comment} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}