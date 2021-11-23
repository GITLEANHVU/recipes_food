import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_LINK_ACCOUNT_BY_ID } from '../../api_link';

export default function CommentItem(props) {
  const [account, setAccount] = useState({});
  const comment = props?.comment;
  const id = props?.id;

  async function getAccount() {
    const res = await axios.post(`${API_LINK_ACCOUNT_BY_ID}`, JSON.stringify({ id: id }));
    if (Array(res.data).length > 0) {
      setAccount(res.data[0]);
    }
  }

  useEffect(() => {
    getAccount();
  }, [comment]);

  return (
    <div className="col-sm-12 my-3">
      <div className="row mb-3">
        <div className="col-sm-12 d-flex">
          <span className="material-icons">account_circle</span>
          <strong>{account?.name}</strong>
        </div>
      </div>
      <span>{comment?.content || "Không nội dung"}</span>
    </div>
  )
}
