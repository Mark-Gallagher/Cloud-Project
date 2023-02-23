import JoinNow from "../../components/JoinNow";

function JoinNowPage() {

  async function createAccountHandler() {
    const response = await fetch("/api/join-now", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe123@yahoo.com",
        password: "paw2ug1ras9hfT%^£!",
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return <JoinNow onCreate={createAccountHandler } />;
}
export default JoinNowPage;
