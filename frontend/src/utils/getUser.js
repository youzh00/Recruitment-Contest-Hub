export default async function getServerSidePropsasync(context) {
  const user = await (
    await fetch("http://localhost:5000/api/auth/user")
  ).json();

  return {
    props: {
      user,
    },
  };
}
