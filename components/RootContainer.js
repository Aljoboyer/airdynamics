import Footers from "./Footers/Footers";
import Navbars from "./Navbars/Navbars";


export default function RootContainer({children}) {
  return (
    <main className="">
        <Navbars/>
        {children}
        <Footers/>
    </main>
  )
}