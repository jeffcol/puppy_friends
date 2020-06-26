import React from 'react'

const SearchBox = ({updPuppy}) => {
    return (
        <div>
            <input type="search" className="pa2 b--orange" placeholder="Look for puppy" onChange={updPuppy}></input>
        </div>
    )
}

export default SearchBox
