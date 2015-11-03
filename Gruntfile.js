module.exports = function(grunt) {
 
  // Add the grunt-mocha-test tasks. 
  //grunt.loadNpmTasks('grunt-mocha');
 
  grunt.initConfig({
// read dependancies from package.json

     pkg: grunt.file.readJSON('package.json'),

// Mocha-Test only
 mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'coverage/blanket',
          quiet: false, // Optionally suppress output to standard out (defaults to false) 
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
        },
        src: ['test/*.js']
      },
  	 coverage: {
        options: {
          reporter: 'html-cov',
          quiet:true,
         captureFile: 'Reports/coverage.html'

        },
        src: ['test/*.js']

    }
   
}


  });

//  grunt.loadNpmTasks('grunt-mocha'); 
 grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('default', 'mochaTest');
 // grunt.registerTask('default', ['mocha','mochaTest']);
 
};
