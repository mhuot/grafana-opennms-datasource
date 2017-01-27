module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({

    clean: ["dist"],

    copy: {
      src_to_dist: {
        cwd: 'src',
        expand: true,
        src: ['**/*', '!**/*.js', '!**/*.scss'],
        dest: 'dist'
      },
      pluginDef: {
        expand: true,
        src: [ 'plugin.json', 'README.md', 'img/*' ],
        dest: 'dist'
      },
      deploy: {
        src: ['**/*'],
        dest: '/var/lib/grafana/plugins/opennms-datasource/'
      }
    },

    watch: {
      rebuild_all: {
        files: ['src/**/*', 'plugin.json'],
        tasks: ['default'],
        options: {spawn: false}
      },
      deploy: {
        files: ['src/**/*', 'plugin.json'],
        tasks: ['default', 'copy:deploy'],
        options: {spawn: false}
      }
    },

    babel: {
      options: {
        sourceMap: true,
        presets:  ["es2015"]
      },
      dist: {
        options: {
          plugins: ['transform-es2015-modules-systemjs', 'transform-es2015-for-of']
        },
        files: [{
          cwd: 'src',
          expand: true,
          src: ['**/*.js'],
          dest: 'dist',
          ext:'.js'
        }]
      },
      distTestNoSystemJs: {
        files: [{
          cwd: 'src',
          expand: true,
          src: ['**/*.js'],
          dest: 'dist/test',
          ext:'.js'
        }]
      },
      distTestsSpecsNoSystemJs: {
        files: [{
          expand: true,
          cwd: 'spec',
          src: ['**/*.js'],
          dest: 'dist/test/spec',
          ext:'.js'
        }]
      }
    },

    jshint: {
      source: {
        files: {
          src: ['src/**/*.js']
        }
      },
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish'),
        ignores: [
          'node_modules/*',
          'dist/*'
        ]
      }
    },

    jscs: {
      src: ['src/**/*.js', 'spec/**/*.js'],
      options: {
        config: ".jscs.json"
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "dist/css/opennms.dark.css": "src/sass/opennms.dark.scss",
          "dist/css/opennms.light.css": "src/sass/opennms.light.scss"
        }
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['dist/test/spec/test-main.js', 'dist/test/spec/*_spec.js']
      }
    }
  });

  grunt.registerTask('default', [
    'clean',
    'sass',
    'copy:src_to_dist',
    'copy:pluginDef',
    'babel',
    'jshint',
    'jscs',
    'mochaTest'
  ]);

  grunt.registerTask('test', ['default']);
};
