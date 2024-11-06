const AUTH_ROUTES = ["/api/auth/signin"];
const API_ROUTE_PREFIX = "/api";

export function isAuthRoute(pathname: string) {
  return AUTH_ROUTES.some(
    (route) => route === pathname || pathname.startsWith(route)
  );
}

export function isAPIRoute(pathname: string) {
  return AUTH_ROUTES.some(
    (route) => !isAuthRoute(pathname) && pathname.startsWith(API_ROUTE_PREFIX)
  );
}
