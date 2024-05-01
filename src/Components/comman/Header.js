import Image from "next/image";
import Link from "next/link";
import Button from "./ButtonComponent/Index";
import Dropdown from "./Dropdown";
let dropList = [
  {
    id: "1",
    name: "Dashboard",
  },
  {
    id: "2",
    name: "SellrApp",
  },
  {
    id: "3",
    name: "Integrations",
  },
];

const Header = () => {
  return (
    <header className="bg-blue-900">
      <div class="container w-full">
        <div className=" flex py-8">
          <div className="w-[221px]">

          <Image src={'/logo.svg'} width={221} height={34} alt="logo"/>
          </div>
          <div className="ml-auto ">
            <ul className="flex items-center gap-6">
              <li>
                <Link href={'/'} className="text-white font-medium text-base">Home</Link>
              </li>
              <li>
                <Link href={'/'} className="inline-flex gap-1 text-white font-medium text-base">
                  <Dropdown text='Products' list={dropList}/>
                {/* <Image src={'/down-arrow.png'} width={20} height={20} alt="down-arrow"/> */}
                </Link>
              </li>
              <li>
                <Link href={'/'} className="text-white font-medium text-base">How it works</Link>
              </li>
              <li>
                <Link href={'/'} className=""> 
                <Button  data="Company" />
                </Link>
              </li>
              <li>
                <Link href={'/'} className=""> 
                <Button filled data="Log In"/>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
