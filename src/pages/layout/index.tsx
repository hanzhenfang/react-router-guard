import { NavLink, Navigate, Outlet } from 'react-router'
import { useLocation } from 'react-router'

export default function Layout() {
  const location = useLocation()
  const token = localStorage.getItem('token')

  if (!token && location.pathname !== '/login') {
    console.log('location.pathname', location.pathname)
    const redirectPath = location.pathname.split('/')[1]
    console.log('redirectPath', redirectPath)
    return (
      <Navigate
        to={`/login?redirect=${redirectPath}`}
        replace
      />
    )
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NavLink to="home">首页</NavLink>
        <NavLink to="about">关于界面</NavLink>
        <NavLink to="new/10">新闻界面</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
