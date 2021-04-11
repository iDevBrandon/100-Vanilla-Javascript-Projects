// The goal of this file is
// to contain a couple of functions that we reuse
export const getJSON = async function (url) {
  try {
    // 1) Loading recipe
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
