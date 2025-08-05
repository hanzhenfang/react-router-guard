import { useLocation, useNavigate, useLoaderData } from 'react-router'

export default function Login() {
  const location = useLocation()
  const nav = useNavigate()

  const name = useLoaderData()
  console.log('name', name)

  const serchParmas = new URLSearchParams(location.search)
  const redirect = serchParmas.get('redirect')

  function login() {
    localStorage.setItem('token', 'key')
    console.log('redirect', redirect)
    nav(`/${redirect || ''}`)
  }

  return (
    <>
      <div>登录界面</div>
      <div onClick={login}>登录</div>
      <div>{name}</div>
    </>
  )
}
