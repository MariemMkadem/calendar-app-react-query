
export default async function  Offer() {
    const res = await fetch(
      "https://api.staging.bsport.io/api/v1/offer?compa&ompany=6"
    );
    return res.json();
  };
