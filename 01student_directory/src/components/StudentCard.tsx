import React from 'react'
import { Student } from '@/types/students/studentType'
import Link from "next/link";

type StudentCardProps = {
    student: Student
}


const StudentCard = ({student} : StudentCardProps) => {

    const letter = student.name.split(" ");
    const firstLetter = letter[0][0].toUpperCase();
    const lastLetter = letter[1][0].toUpperCase(); 

  return (
    <div className='w-80 shadow-xl flex flex-col gap-3 m-4 p-3 rounded-lg'>

      <div className='flex justify-between p-1'>
        <div className='bg-[#D5E3FC] text-[#0106A1] pl-2 pr-2 p-1 rounded-lg'>{firstLetter + lastLetter}</div>

        <div className='bg-[#EAEDFF] p-0.5 text-[#53555f]'>{student.id}</div>
      </div>

      <h2>{student.name}</h2>

      <div className='flex gap-3'>
        <p className='p-1 bg-[#F2F3FF] text-[#1c4dc7]'>{student.department}</p>
        <p> Year: {student.year}</p>
      </div>

      <hr />

      <div>
        <Link href={`/students/${student.id}`} className='text-[#092b81]'>View Profile →</Link>
      </div>
      

    </div>
  )
}

export default StudentCard;