import Link from "next/link";
import LoginForm from "./pages/Login/page";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="demo">

      <Link href="/pages/Home"> Go to </Link>
      <LoginForm />




    </div>
  )
}
