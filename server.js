// app.use(express.static('./dist/<shop-recipe-app>'));

// app.get('/*', function(req, res) {
//     res.sendFile('index.html', {root: 'dist/<shop-recipe-app>/'}
//   );
// });

// app.listen(process.env.PORT || 8080);

const express = require('express');

const app = express();

app.use(express.static('./dist/shop-recipe-app'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/shop-recipe-app' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);