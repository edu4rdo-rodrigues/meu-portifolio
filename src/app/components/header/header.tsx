import Image from "next/image";
import './header.scss'

export function Header() {
  return (
    <div className="header">

      <div>
        <h1>Hi, i´m Eduardo! 👋</h1>
        <h2>Developer Frontend</h2>
      </div>
      <Image
        src="/img.jpg"
        alt="minha foto"
        width={223}
        height={223}
        priority
      />
    </div>
  )
}