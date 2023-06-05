export default async function getServerSidePropsasync(context) {
  const user = await (
    await fetch("http://localhost:5000/api/auth/user", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
  ).json();

  return {
    props: {
      user,
    },
  };
}
