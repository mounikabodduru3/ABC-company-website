window.onload = async () => {
  const res = await fetch('http://localhost:5000/api/heading');
  const data = await res.json();
  document.getElementById('dynamic-heading').innerText = data?.text || "Default Heading";
}
