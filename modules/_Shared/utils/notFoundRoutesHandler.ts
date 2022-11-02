export const NotFoundRoutesHandler = (response: any) => {
  return response.status.toString().startsWith("4") ? false : true;
};
