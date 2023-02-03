import React, { useState } from "react";
import "./SearchBar.css"
import Search from "@material-ui/icons/Search";
import Close from '@material-ui/icons/Close';

function SearchBar({placeholder, data}){
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [filterInputValue, setFilterInputValue] = useState("");

    const handleFilter = (event) => {
        const filterInputValue = event.target.value;
        setFilterInputValue(filterInputValue);
        const filterData = data.filter((value) => {
            return value.title.toLowerCase().includes(filterInputValue.toLowerCase())
        })
        if(filterInputValue === ""){
            setFilteredBooks([])
        } else {
        setFilteredBooks(filterData)
    }
}

const clearInput = () => {
    setFilteredBooks([]);
    setFilterInputValue("")
}

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={filterInputValue} onChange={handleFilter}/>
                <div className="searchIcon">
                 {filteredBooks.length === 0 ? (
                    <button><Search /></button>
                    ) : ( 
                    <button id="clearBtn" onClick={clearInput}><Close /></button>
                    )}
                    </div>
                    </div>
                    {filteredBooks.length != 0 && (
                    <div className="searchResult">
                        {filteredBooks.map((value) => {
                            return (
                            <a className="searchItem" href={value.thumbnailUrl} target="_blank">
                                <p>{value.title}</p>
                            </a>
                            )
                        })}
                        </div>
                    )}
            </div>
        )
}

export default SearchBar