import React from 'react'
import Layout from '../Admin/layout'
import { useState } from 'react'

const feed = props => {
  // const userFeed=[
  //   {
  //     userName:'user',
  //     postTime:'time',
  //     menusIcon:'icon',
  //     img:'images',
  //     like:'like',
  //     comment:'comment',
  //     share:'like',
  //   },
  //   {
  //     userName:'',
  //     postTime:'',
  //     menusIcon:'',
  //     img:'',
  //     like:'',
  //     comment:'',
  //     share:'',
  //   },
  // ]
  const [like ,setlike ]=useState(true)

  const handlelike=()=>{
   setlike(!like)
  }
  return (
    <Layout>
<div className="mt-5 border rounded-md     mx-60">
        <div className="gap-2 px-6 py-4 flex justify-between items-center rounded-md bg-zinc-300 font-semibold">
      <div className='flex item-center gap-1 bg-blue-700'>

       <img
className=' rounded-full gap-2 w-10 h-10'
src="./images/avt.avif " />
 <div className=''> 
        <h1>userName</h1>
<p>Posted date</p>
 </div>
</div>
<div className=' bg-green-700'>

          <h1>
          <i className="ri-menu-line"></i>icon</h1>
     
        </div>
 
</div>
<hr/>
<div className='  bg-rose-700'>

  <img 
  className=''
  src="./images/feedImage.jfif"    alt="news feed" />
</div>
<div   >
<div className='flex px-2 py-1 mx-1 items-center my-1 justify-between border rounder-md border-black'>

<button className='px-20 py-15 border-black '>
<i class="ri-heart-3-fill text-red-700"></i>
<i className="ri-heart-2-line "></i>Like

</button>


<button className='border-x px-20 py-15 border-black '>
<i className="ri-message-2-line"></i>Comments</button>
<button className=' border-black  px-20 py-15 '>
<i className="ri-share-forward-line"></i>Share</button>
</div>
</div>
</div>

 </Layout>
  )
}



export default feed