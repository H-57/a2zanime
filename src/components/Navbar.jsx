import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Navbar() {
  return (
    <><nav>
     <ul>

<Link href="/"><li>Home</li></Link>
<Link href="/p/pokemon/season1"><li>Anime</li></Link>
<Link href="/p/Allseason"><li>Sitemap</li></Link>
<Link href="/about"><li>About</li></Link>
<Link href="/"><li>Contact</li></Link>
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
  

`

}

</style>
    </>
  )
}

export default Navbar