
async function submitGenericVerification() {
  const input = document.getElementById("genericVerifyInput");
  const value = input.value.trim();

  if (!value) {
    input.focus();
    alert("Please enter some information first.");
    return;
  }

  try {
    const response = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ value: value })
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const result = await response.json();
    console.log("Server response:", result);

    closeGenericVerifyModal();
    input.value = "";

  } catch (error) {
    console.error("POST failed:", error);
    alert("Unable to submit. Please try again.");
  }
}
