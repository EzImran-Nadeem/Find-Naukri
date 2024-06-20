    import React from 'react'
    import Layout from '../Admin/layout'
    import { useState } from 'react'

    const feed = () => {
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
      const [feedMenu ,setfeedMenu ]=useState(false)
      const [like ,setlike ]=useState(false)

      const handlelike=()=>{
      setlike(!like)

      }
      return (
        <Layout>
    <div className="mt-5 border rounded-m min-h-screen mx-60">
            <div className="gap-2 px-6 py-4 flex justify-between items-center rounded-md bg-zinc-300 font-semibold">
          <div className='flex item-centerjustify-center gap-1'>

          <img
    className='   rounded-full gap-2 w-10 h-10'
    src="./images/avt.avif " />
    <div className=''> 
            <h1 className='text-semibold text-lg '>userName</h1>
    <p className='text-gray-600 text-sm'>Posted date</p>
    </div>
    </div>  
    <div className='relative'>
              < button className="w-8 text-lg rounded-lg hover:bg-slate-600" onClick={() =>setfeedMenu( !feedMenu )}>
              <i className="ri-menu-line"></i></button>
            </div>
    { 
      feedMenu && 
      <div className='absolute mt-[109px] right-[285px] rounded-md  w-[130px] bg-white border p-2 shadow-lg'>
        <div className="gap-2 ">
        <button className="text-semibold my-1">Hide this post</button>
        <hr/>
        <button className="text-semibold">Report</button> </div> </div>
    } 
    
    </div>
    <hr/>
    <div className=''>

      <img 
      className=''
      src="./images/feedImage.jfif"    alt="news feed" />
    </div>
    <div className='flex px-2 py-1 mx-1 items-center my-1  justify-between border rounder-md border-black'>
    <button onClick={handlelike}
    className='px-20 py-15  border-black'>
    { like ? (
    <i className="ri-heart-3-fill text-red-700"></i>):(
    <i className="ri-heart-2-line "></i>)
    }
    like
    </button>
    <button className='border-x px-20 py-15 border-black '>
    <i className="ri-message-2-line"></i>Comments</button>
    <button className=' border-black  px-20 py-15 '>
    <i className="ri-share-forward-line"></i>Share</button>
    </div>
    </div>
    </Layout>
      )
    }



    export default feed