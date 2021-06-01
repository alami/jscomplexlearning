const query = `
query {
Lift(id: "panorama") {
  name
  status
}
}
`;

const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
};

fetch(url, opts)
    .then(res => res.json())
    .then(outlog)
    .catch(console.error);