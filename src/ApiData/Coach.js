

export default async function Coach() {
    const res = await fetch(
      "https://api.staging.bsport.io/api/v1/coach?company=6"
    );
    return res.json();
  };