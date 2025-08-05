import { useEffect } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router'
import routerConfig from '../../route/index'

export default function RouterGuard() {
  const location = useLocation()
  const authRoutes = getAuthRoutes(routerConfig)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (location.pathname === '/login' && token) {
      navigate('/', { replace: true })
    }

    // ['/home']
    if (authRoutes.includes(location.pathname)) {
      if (!token) {
        navigate('/login', { replace: true })
      }
    }
  }, [location])

  return useRoutes(routerConfig)
}

/**
 * 递归提取需要认证的路由路径
 * @param {Array} routes 路由配置数组
 * @returns {Array} 需要认证的路径列表
 */
function getAuthRoutes(routes) {
  const authPaths = []

  function traverse(routes, basePath = '') {
    routes.forEach((route) => {
      // 拼接完整路径
      const fullPath = basePath + (route.path || '')

      // 检查当前路由是否需要认证
      if (route.meta?.auth) {
        authPaths.push(fullPath)
      }

      // 递归处理子路由
      if (route.children) {
        // 对于嵌套路由，需要保留父路径
        const childBasePath = fullPath.endsWith('/') ? fullPath : `${fullPath}/`
        traverse(route.children, childBasePath)
      }
    })
  }

  traverse(routes)
  return authPaths
}
