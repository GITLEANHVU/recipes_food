import React from 'react'
import { Link } from 'react-router-dom';

export default function A(props) {
  const content = props?.content;
  const btnTheme = props?.btnTheme;
  const linkTo = props?.linkTo;
  return (
    <Link
      to={linkTo}
      className={`${btnTheme}`}>
      {content}
    </Link>
  )
}
