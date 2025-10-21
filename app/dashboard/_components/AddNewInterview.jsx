"use client"
import React, {useState} from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { LoaderCircle } from 'lucide-react'
function AddNewInterview() {
    const [openDailog,setOpenDailog]=useState(false)
    const [jobPosition, setJobPosition]=useState();
    const [jobDescription, setJobDescription]=useState();
    const [jobExperience, setJobExperience]=useState();
    const [loading,setLoading]=useState(false);

    const onSubmit=async(e)=>{
      setLoading(true)
      e.preventDefault()
      console.log(jobPosition,jobExperience,jobDescription)
      
      const InputPrompt="job position: " + jobPosition+", Job description: "+jobDescription +",  years of experience: "+ jobExperience+" depends on this information give me" + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + "interview questions with answered in json format and give questions and answers as field in json"
      const result= await chatSession.sendMessage(InputPrompt)
      const MockJsonResp=(result.response.text().replace('```json','').replace('```',''))
      console.log(JSON.parse(MockJsonResp));
      setLoading(false);
    }
  return (
    <div>
       <div className='p-10 border rounded-lg bg-secondary hover:scale-105 shadow-md cursor-pointer transition-all'
          onClick={()=>setOpenDailog(true)}
        > 
        <h2 className=' text-lg text-center'>+ Add New</h2>
       </div>
       <Dialog open={openDailog}>
      <DialogContent className="max-w-2xl">
      <DialogHeader>
         <DialogTitle className='font-bold text-2xl'>Tell us more about the job </DialogTitle>
           <DialogDescription>
            <form onSubmit={onSubmit}>
             <div>
                <h2>Add details</h2>
             </div>
             <div className='mt-7 my-3'>
                <label>Enter your Job Role/Job Position</label>
                <Input placeholder="Example : Software Developer" required 
                onChange={(event)=>setJobPosition(event.target.value)}/>
             </div>
                <div className='my-3'>
                <label>Job Description</label>
                <Textarea placeholder="Example : Requires SQL, React, Golang" required 
                onChange={(event)=>setJobDescription(event.target.value)} />
             
             </div>
                 <div className='my-3'>
                <label>Years of Experience</label>
                <Input placeholder="Example : 5" type="number"  min="0" max="60" required 
                onChange={(event)=>setJobExperience(event.target.value)}/>
             </div>
              
                <div className='flex gap-5 justify-end'>
                <button type="button" varient="ghost" onClick={()=>setOpenDailog(false)}>Cancel</button>
                <button type="submit" disabled={loading}> {loading?<> <LoaderCircle className='animate-spin'/>'Generating from AI' </> : 'Start Interview'}
                Start Interview
                </button>
                </div>
                </form>
            </DialogDescription>
          </DialogHeader>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default AddNewInterview
