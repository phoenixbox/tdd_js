desc("Tester!");
task('tester', ["dependency"], function(){
  console.log("Tester Executed!");
});

task("dependency", function(){
  console.log("Dependency Executed!");
});