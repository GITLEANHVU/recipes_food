import React from 'react'
export default function Pagination(props) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
       <ul className="pagination">
       {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => props.paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
      {/* <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => props.paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul> */}
    </nav>
  )
}
