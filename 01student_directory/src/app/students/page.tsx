import StudentFilter from "@/components/StudentFilter"
import StudentGrid from "@/components/StudentGrid"



const StudentsPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl">Students</h1>
      <p>Browse students and view their profile</p>
      <StudentGrid  />
    </div>
  )
}

export default StudentsPage;
