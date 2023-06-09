"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_service_1 = require("./student.service");
const common_1 = require("@nestjs/common");
const student_dto_1 = require("./dto/student.dto");
const course_dto_1 = require("./dto/course.dto");
const student_course_dto_1 = require("./dto/student-course.dto");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async createStudentDetails(studentDto) {
        const results = await this.studentService.createStudent(studentDto);
        return {
            status: true,
            message: 'Student created successfully',
            data: results
        };
    }
    async createCourseDetails(courseDto) {
        const results = await this.studentService.createCourse(courseDto);
        return {
            status: true,
            message: 'Course created successfully',
            data: results
        };
    }
    async createStudentCourse(studentCourseDto) {
        const { studentId, courseId } = studentCourseDto;
        const results = await this.studentService.createStudentCourse(studentId, courseId);
        return {
            status: true,
            message: 'Student Id and course Id created successfully',
            data: results
        };
    }
};
__decorate([
    (0, common_1.Post)('/newStudent'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_dto_1.StudentDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createStudentDetails", null);
__decorate([
    (0, common_1.Post)('/newCourse'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_dto_1.CourseDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createCourseDetails", null);
__decorate([
    (0, common_1.Post)('/studentCourse'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_course_dto_1.StudentCourseDto]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createStudentCourse", null);
StudentController = __decorate([
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map