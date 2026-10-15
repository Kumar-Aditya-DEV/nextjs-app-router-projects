"use client"
import React, { useState } from 'react'

type StudentFilterProps = {
  onSearch: (search: string) => void;
    searchDepartment: (value: string) => void;
}

const StudentFilter = ({onSearch, searchDepartment}: StudentFilterProps) => {

    const [search, setSearch] = useState("");

  return (
    <div className='w-4xl flex justify-between p-1.5 border-white border-2'>
        <input placeholder='Search Student...' type="text" value={search} 
        onChange={(e) => {
            setSearch(e.target.value);
            onSearch(e.target.value)
        }}/>

        <select defaultValue='all' onChange={e => searchDepartment(e.target.value)}>
            <option value="all">All departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics Engineering">Electronics Engineering</option>
        </select>
    </div>
  )
}

export default StudentFilter;
