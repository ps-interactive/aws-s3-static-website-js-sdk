const fs = require('fs');

const message = (err, data) => {
  if (err) { console.log(`Error: ${err.message}`); }
  else if (data) {
    const json = JSON.stringify(data);
    if(Object.keys(data).length > 1) {
      fs.writeFileSync(`json/${Object.keys(data)[1]}.json`, json, 'utf-8');
    }
    console.log(`Success: ${json}`);
  }
};

const paths = (dir, container) => {
  const files = fs.readdirSync(dir)
  container = container || []
  files.forEach((file) => {
    if (fs.statSync(dir + "/" + file).isDirectory()) {
      container = paths(dir + "/" + file, container);
    } else {
      container.push(path.join(__dirname, dir, "/", file));
    }
  })
  return container;
}



module.exports = { message, paths };
