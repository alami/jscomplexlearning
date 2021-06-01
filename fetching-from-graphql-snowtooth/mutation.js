const mutation = `
  mutation {
    setLiftStatus(id: "panorama", status: CLOSED) {
      name
      status
    }
  }
`;

var opts2 = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: mutation })
};
fetch(url, opts2)
    .then(res => res.json())
    .then(outlog2)
    .catch(console.error);


