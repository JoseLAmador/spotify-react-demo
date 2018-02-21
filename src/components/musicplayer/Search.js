import React from 'react';

const Search = ({search,handleText}) => {
    return (

        <div className="search">
            <form onSubmit={search}>
                <input type='text' onChange={handleText} /><button>Search track</button>
            </form>
        </div>

    )
};

export default Search;