/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
      teacher!: Teacher; // tells TypeScript this will be assigned later
  
      setTeacher(teacher: Teacher): void {
        this.teacher = teacher;
      }
    }
  }
  
