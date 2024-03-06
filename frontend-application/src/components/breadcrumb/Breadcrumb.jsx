import React from 'react'
import './breadcrumb.scss';

export const Breadcrumb = ({ categories }) => {
  return (
    <div className='breadcrumbs-container'>
        <div className='breadcrumbs-items'>
            { categories && categories.length > 0 ? (categories.length > 1 ? categories.join(' > ') : categories) : '' }
        </div>
    </div>
  )
}
