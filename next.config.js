module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    )
    return cfg;
  }  
}

const withTM = require('next-transpile-modules')(['file-saver', 'export-xlsx']); 

module.exports = withTM({});

