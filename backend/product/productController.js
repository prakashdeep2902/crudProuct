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

    console.log(name);
    console.log(age);
    res.send(`<h1> Name:${name}</h1>
        
        <h1> Age: ${age}</h1>
        `);
  } catch (error) {}
};
