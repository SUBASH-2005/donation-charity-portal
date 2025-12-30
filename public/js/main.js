async function donate() {
  const data = {
    user: "demoUser",
    campaign: "Food Relief",
    amount: 500
  };

  await fetch("/api/donations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Donation Successful");
}
