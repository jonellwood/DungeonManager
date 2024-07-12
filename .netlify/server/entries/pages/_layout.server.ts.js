const load = async (event) => {
  return {
    session: event.locals.session,
    user: event.locals.user
  };
};
export {
  load
};
