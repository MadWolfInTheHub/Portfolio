import Link from "next/link";

export default function PortfolioLink() {
  return (
    <Link href={`/`}>
      <div>
        <i className="fa-solid fa-diagram-project"></i>
        My Portoflio
      </div>
    </Link>
  )
}