import React from 'react'

export default function Pagination({ currentPage, setCurrentPage, totalNews, postPerPage}) {
    
    const totalPage = Math.ceil(totalNews / postPerPage)
    let pageNumber = []
    for (let i = 1; i <= totalPage; i++) {
        pageNumber.push(i)
    }

  return (
    <div>
        <ul className='pagination'>
            <li className={`page-item ${currentPage === 1 && `disabled`}`}>
                <button className='page-link' onClick={() => setCurrentPage(currentPage - 1)}>
                    &laquo;
                </button>
            </li>
            {pageNumber.map((page) => (
                <li key={page}
                className={`page-item ${page === currentPage && `active`}`} onClick={() => setCurrentPage(page)}>
                    <button className='page-link'>
                        {page}
                    </button>
                </li>
            ))}
            <li className={`page-item ${currentPage === totalPage && `disabled`}`}>
                <button className='page-link' onClick={() => setCurrentPage(currentPage + 1)}>
                    &raquo;
                </button>
            </li>
        </ul>
    </div>
  )
}
