"use client"
import React, { useState } from 'react'
import { students } from '@/types/students/studentData'
import StudentCard from './StudentCard'
import StudentFilter from './StudentFilter';


const StudentGrid = () => {

    const [search, setSearch] = useState("");
    const [department, setDepartment] = useState("all");

    const filteredStudents = students.filter((student) => {
        const matchName = student.name.toLowerCase().includes(search.toLowerCase());
        const matchDepartment = department === "all" || student.department === department;

        return matchName && matchDepartment;
    })

  return (
    <div className='flex flex-col items-center' >

        <StudentFilter onSearch={setSearch} searchDepartment={setDepartment} />

        <div className='flex flex-wrap gap-6 justify-center'>
            {filteredStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
            ))}
        </div>
      
    </div>
  )
}

export default StudentGrid;
