import express from 'npm:express';

const PORT = Deno.env.get('PORT') || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('This is the home route!');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});