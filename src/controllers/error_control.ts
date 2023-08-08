
function requestNotFound_control(res: any, rep: any) {
  return { error: "Page not found" };
}
export const not_found_fun = requestNotFound_control