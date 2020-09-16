import Link from 'next/link';


const Navbar = () => (

    <div>
            <ul>
             <li><Link href = "/"><a>Home</a></Link></li>
             <li><Link href = "/about"><a>About</a></Link></li>
             <li><Link href = "/contact"><a>Contact us</a></Link></li>
            
            </ul>
                
            <style jsx>{
            `
            ul{
                background : #333;
                
                display : flex;
                list-style: none;
            }

            ul li{
                font-size: 19px;
                font-color: white;
                margin-right: 20px;
            }
    
            ul li a{
                color: white;
                text-decoration: none;
            }

            `
            }</style>        
            
    </div>

);

export default Navbar;