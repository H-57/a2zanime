import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Navbar() {
  return (
    <><nav>
     <ul>

<li><Link href="/">Home</Link></li>
<li><Link href="/p/pokemon/season1">Anime</Link></li>
<li><Link href="/p/Allseason">Sitemap</Link></li>
<li><Link href="/about">About</Link></li>
<li><Link href="/">Contact</Link></li>
</ul>
</nav>
<Image className='navimg' src="https://hacker57.netlify.com/src/navbar.gif" alt="navbar image"  width="50" height="50"/>
<style jsx>
{
`

nav{
  display: flex;
  
  
  flex-wrap: wrap;
  }
  nav ul{
  display: flex;
  flex-direction: row;
  margin: 2rem;
  flex-wrap: wrap;
  }
  nav ul li,.heading{
      display: block;
  margin-right :2rem;
  font-size :1.3rem;
  text-shadow: 0 0 3px #00ABFF, 0 0 5px #00CFFF;
  cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
nav{
  margin-bottom:50px;
  flex-wrap: no-wrap;
 
}
nav ul{
 margin:20px
}
nav ul li{
  margin-right:10px;
  font-size:1rem
}
  }

`

}

</style>
    </>
  )
}

export default Navbar