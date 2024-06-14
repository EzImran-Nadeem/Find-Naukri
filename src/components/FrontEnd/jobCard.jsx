import React from 'react'

const JobCard = () => {
    const skills = ["HTML", "CSS", "Javascript", "React-js"]

  return (
  <>
    <div className=" left-[280] text-md text-semibold">
        <div className="flex justify-center mt-4 gap-4 items-center ">
          <select className="w-54 py-3 pl-4 bg-zinc-200 font-semibold rounded-md ">
            <option value="" disabled hidden selected>Job Role</option>
            <option className="text-blue mt-5 w-54" value="Frontend Developer" ></option>
            <option value="Backend Developer" ></option>
            <option value="Full-Stack Developer" ></option>
          </select>
          <select className="w-54 py-3 pl-4 bg-zinc-200 font-semibold rounded-md ">
            <option value="" disabled hidden selected>Job Role</option>
            <option value="Frontend Developer" ></option>
            <option value="Backend Developer" ></option>
            <option value="Full-Stack Developer" ></option>
          </select>
          <select className="w-54 py-3 pl-4 bg-zinc-200 font-semibold rounded-md ">
            <option value="" disabled hidden selected>Year of Experience</option>
            <option value="(0-12) Months" >(0-12) Months</option>
            <option value="(1) Year" >(1) Year</option>
            <option value="(2+) Years" >(2+) Years</option>
          </select>
          <button className="w-54 text-md text-slate-300 font-bold py-3 px-4 bg-blue-600  rounded-md ">Search</button>
        </div>
      </div>
      <div className="mt-5 mx-40 mb-4 ">
        <div className="flex items-center px-6 py-4 justify-between rounded-md bg-zinc-300 font-semibold">
       <div className="flex flex-col items-start gap-2">
       <h1 className='text-lg font-semibold'> FrontEnd</h1>
          <h1>Abc.pvt</h1>
          <p> Fulltime. Experience. In-office</p>
          <div className=" flex justify-between items-center gap-3  rounded-md  shadow-md">
            <p> Skill are required </p>
            {skills.map((skills) => ( 
              <p key={skills} className="text-black-500 py-1 px-2 rounded-md border bg-zinc-200 border-black-200"> {skills}</p>
            ))}
            </div>   
          </div>
          <div className="gap-8 ">
            <h1> Posted On
            </h1>
            <button className=" px-2 py-1 m-1 bg-blue-700 rounded-md ">
              View Details
            </button>
          </div>
        </div>
      </div>
    
  </>
  )
}

export default JobCard