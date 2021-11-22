import React from 'react'
import { REACT_APP_UPLOADS } from '../../api_link';
import useWindowSize from '../../hooks/useWindowSize';
import A from '../A';

export default function Card(props) {
  const imageLink = (props?.imageLink || "#!");
  const title = (props?.title || "").length > 0 ? (props?.title || "").slice(0, 20) : "";
  const description = (props?.description || "").length > 0 ? (props?.description || "").slice(0, 90) : "";
  const classes = props?.classes || "";

  const windowSize = useWindowSize();
  
  return (
    <div className={`col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 ${classes?.mt}`}>
      <div className="card">
        <img src={`${REACT_APP_UPLOADS}/${imageLink}`}
          className="card-img-top"
          alt={`${title}`}
          style={{
            width: '100%',
            // height: windowSize[0] < 768 ? "420px" : "240px"
            height: windowSize[0] < 768 ?
              (windowSize[0] < 480 ? (windowSize[0] < 360? "" : "300px") : "420px")
              : "240px"
          }} />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <A
            content={'Show'}
            btnTheme={`btn btn-primary`}
            linkTo={``}
          />
        </div>
      </div>
    </div>
  )
}
