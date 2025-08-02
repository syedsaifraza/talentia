"use client"
import { PostType } from '@/types/PostType'
import React from 'react'
import OgImageLoader from './OgImageLoader'
import Post from './post'

function WatchScroll({posts}:{posts:PostType[]}) {
const handleScroll= (e:any)=>{
    alert("Scrolling")
}
  return (
    <>
    <ul onScroll={handleScroll}>
          

          {
            posts
              .filter((post) => post.fileURL && post.fileURL.includes(".mp4"))
              .map((post, id) => (
                <Post post={post} ogImageLoader={<OgImageLoader text={post.text} />} key={id} />
              ))}
        </ul>
    </>
  )
}

export default WatchScroll