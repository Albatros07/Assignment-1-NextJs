// NAVBAR PAGE

import Link from "next/link"

export default function Navbar(){
    return(
        
        <div className="flex justify-evenly text-center font-serif text-2xl text-white bg-red-900 h-10">
            <Link href="/home">Home</Link><br />
            <Link href="/about">About</Link><br />
            <Link href="/skills">Skills</Link><br />
            <Link href="/Contact">Contact</Link><br/>
        
            


        </div>
        
    );
};