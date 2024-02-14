// layout.js는 자동으로 생성되었다(by nextjs). 

import Navigation from "../Components/Navigation";
import "../styles/global.css";

export const metadata={
  
  description: "The best movie on the best framework",
}

 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      
      <body>
        <Navigation/>
        {children}
      </body>
       
    </html>
  )
}

