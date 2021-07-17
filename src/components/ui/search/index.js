import React, {useState} from 'react'
import { SearchBoxInput } from './SearchElements'

const Search = ({placeholder, getQuery}) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <div>
            <SearchBoxInput 
                type='text'
                placeholder={placeholder}
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autofocus
            />
            
        </div>
    )
}

export default Search
