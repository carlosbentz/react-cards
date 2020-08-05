import React from 'react'

export default function Icon(props) {
    return (
        <div className={`icon fa ${props.children} fa-thumbs-o-up card__descriptionIcon`} />
    )
}
