import React from 'react'
import SponserCard from '../SponserCard'
import CompanyTile from './CompanyTile'
import ItAcademt from "../../assets/itacademy.jpg"
import Add2 from "../../assets/addsecond.jpg"
import Com1 from "../../assets/comp1.jpg"
import logo from "../../assets/deloitte_logo.jpg"

export const AdComponents = () => {
  return (
     <div  className="fixed flex-col right-2 px-2  md:w-0 h-[89vh]" id="default-sidebar-1" style={{width:"330px"}}>

          
          
            
         {/* <h4 className=" font-bold sticky top-50">Sponsers</h4> */}
         <SponserCard image={ItAcademt}
          name="Acetians IT Academy" description="At Acetians IT Academy, you won’t just attend classes—you’ll actively build, create, and solve real-world challenges" link="https://acetiansitacademy.com/"/>
          
        <SponserCard image={Add2}
          name="Acetians Technologies" description="Join our dynamic hashtag#team and help shape the hashtag#future of autonomous driving, hashtag#robotics, and #AI" link="/"/>
           
        <h4 className="p-1 mt-2 mb-2 font-bold">Pages as per your interest</h4>
        
        <CompanyTile  logo={Com1} name={"Concentrix"} industry="IT Industry" link="https://acetians.com"/>

        <CompanyTile  logo={logo} name={"Deloitte"} industry="Fintech Industry" link="https://acetians.com"/>
        
       
         
         </div>
  )
}
