var dest = "./app";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src],
      open: "external",
      port: 8080
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  less: {
    src: src + "/less/*.less",
    files: src + "/less/**/**",
    dest: dest + "/css",
    plugins: [],
    settings: {
    }
  },
  jade: {
    src: src + "/jade/*.jade",
    files: [src + "/jade/**/**", src + "/assets/data.json"],
    data: src + "/assets/data.json",
    dest: dest
  },
  images: {
    src: src + "/img/**",
    dest: dest + "/img"
  },
  // markup: {
  //   src: src + "/htdocs/**",
  //   dest: dest
  // },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    //extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/app.js',
      dest: dest + '/js',
      outputName: 'app.js'
    }]
  },
  assets: {
    files: src + '/assets/**',
    bundleConfigs: [{
      src: src + '/assets/fonts/**',
      dest: dest + '/fonts'
    }, {
      src: src + '/assets/js/validator.js',
      dest: dest + '/js'
    }, {
      src: src + '/js/module/gallery/jquery.photocradle-0.4.3.js',
      dest: dest + '/js'
    }]
  }
};