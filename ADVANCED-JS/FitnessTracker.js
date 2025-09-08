function createFitnessTracker() {
  let workouts = [];
  console.log("---Welcome to Dinesh's Fitness Tracker !!!---");
  console.log("Your New Tracker is Added");

  return {
    addWorkout(type, duration, calories) {
      workouts.push({ type: type, duration: duration, calories: calories });
      console.log("---Workout added---");
      console.log({ type: type, duration: duration, calories: calories });
      console.log("*****************************");
    },

    getTotalCalories() {
      total = workouts.reduce((sum, workout) => sum + workout.calories, 0);
      console.log("---Getting yout calories---");
      console.log("total calories:", total);
      console.log("********************************");
    },

    getWorkoutsByType(type) {
      const parType = workouts.filter((workout) => workout.type === type);
      console.log("Getting", type, "type of workouts");
      console.log(type, "type of workouts:", parType);
      console.log("*******************************");
    },
  };
}

const tracker = createFitnessTracker();
tracker.addWorkout("running", 30, 300);
tracker.addWorkout("cycling", 60, 500);
tracker.getTotalCalories();
tracker.getWorkoutsByType("running");
