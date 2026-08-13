async function register(event) {
  event.preventDefault();

  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim().toLowerCase();
  const password = document.getElementById("registerPassword").value;
  const type = document.getElementById("registerType").value;
  const skills = document.getElementById("registerSkills").value.trim();

  
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, type, skills })
  });

  const result = await response.json();
  showToast(result.message);

  if (response.ok) {
    document.querySelector("#registerModal form").reset();
    closeModal("registerModal");
  }
}
