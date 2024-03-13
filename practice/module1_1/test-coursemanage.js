class CourseManagement {
  constructor() {
    this.courses = [];
  }

  createCourse(courseId, courseTitle = 'untitled', courseTerm = '2-2565') {
        return this.courses.push({
            courseId: courseId,
            courseTitle: courseTitle,
            courseTerm: courseTerm,
            registerStudents: []
        });
  }

  registerCourseWithOneStudent(courseId, studentId) {
    const foundIndex = this.findCourseIndex(courseId)
    if( foundIndex === -1 ){ //not found
        return -1
    }
    return this.courses[foundIndex].registerStudents.push(studentId) //found
  }

  registerCourseWithStudents(courseId, studentIds) {
    const foundIndex = this.findCourseIndex(courseId)
    if( foundIndex === -1 ){ //not found
        return -1
    }
    return this.courses[foundIndex].registerStudents.push(...studentIds) //found
  }

  findCourseIndex(courseId) {
    return this.courses.findIndex( (course) => course.courseId === courseId )
  }

  removeCourse(courseId) {
    const foundIndex = this.findCourseIndex(courseId)
    if( foundIndex === -1 ) //not found
        return -1
    this.courses.splice(foundIndex,1)
    //this.courses.filter( (course) => course.courseId !== courseId ) //found
        return courseId
  }

  getCourses() {
    return this.courses;
  }
}

const cm = new CourseManagement();
console.log(cm.createCourse('INT201', 'Client Side I', '1-2565'));
console.log(cm.createCourse('INT203'));
console.log(cm.findCourseIndex('INT203')); //index: 1
console.log(cm.registerCourseWithOneStudent('INT201', 1001));
console.log(cm.registerCourseWithOneStudent('INT203', 1001));
console.log(cm.registerCourseWithOneStudent('INT203', 1002));
console.log(cm.registerCourseWithOneStudent('INT203', 1006));
console.log(cm.registerCourseWithOneStudent('INT202', 1002));
console.log(cm.registerCourseWithStudents('INT201', [1003, 1005]));
console.log(cm.registerCourseWithStudents('INT202', [1003, 1005]));
console.log(cm.removeCourse('INT202'));
console.log(cm.getCourses());
console.log(cm.removeCourse('INT203'));
//  console.log(cm);
