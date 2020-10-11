

export default async function Activity () {
    const res = await fetch(
      "https://api.staging.bsport.io/api/v1/meta-activity?compa&ompany=6"
    );
    return res.json();
  };
  