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
function AddNewInterview() {
    const [openDailog,setOpenDailog]=useState(false)
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
         <DialogTitle><h2 className='font-bold text-2xl'>Tell us more about the job</h2>
         </DialogTitle>
           <DialogDescription>
             <div>
                <h2 className=''>Add details</h2>
             </div>
             <div className='mt-7 my-3'>
                <h2>Enter your Job Role/Job Position</h2>
                <Input placeholder="Example : Software Developer"></Input>
             </div>
                <div className='my-3'>
                <h2>Job Description</h2>
                <Textarea placeholder="Example : Requires SQL, React, Golang"></Textarea>
             </div>
                 <div className='my-3'>
                <h2>Years of Experience </h2>
                <Input placeholder="Example : 5" type="number"></Input>
             </div>
              
                <div className='flex gap-5 justify-end'>
                <button varient="ghost" onClick={()=>setOpenDailog(false)}>Cancel</button>
                <button>Start Interview</button>
                </div>
            </DialogDescription>
          </DialogHeader>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default AddNewInterview
