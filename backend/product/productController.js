export const getProduct = (req, res) => {
  try {
    res.send("<h1>Get Products</h1>");
  } catch (error) {
    console.log(`This is Error ${err}`);
  }
};

export const CreatProduct = (req, res) => {
  try {
    const { name, age } = req.body;

    res.send(`<h1> Name:${name}</h1>
        
        <h1> Age: ${age}</h1>
        `);
  } catch (error) {}
};

export const getQuery = (req, res) => {
  try {
    res.json(req.params);
  } catch (error) {}
};
