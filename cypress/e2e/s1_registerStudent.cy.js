import StudentFormPage from "../pages/studentFormPage";
import { ENV } from "../core/env";

const studentFormPage = new StudentFormPage();

describe("Scenario 1: Register student with required fields", () => {
  beforeEach(() => {
    cy.fixture("registerStudentData").then((data) => {
      cy.visit(ENV.urls.studentFormURL);
    });
  });


it("Register a student successfully with required fields", () => {
    cy.fixture("registerStudentData").then((data) => {
        studentFormPage.inputFirstName(data.firstName); 
        studentFormPage.inputLastName(data.lastName);
        studentFormPage.inputMobile(data.mobile);
        studentFormPage.selectGender(data.gender);
        studentFormPage.submitForm();
        studentFormPage.verifySuccessRequiredFields();
    });
});

it("Register a student successfully with all fields", () => {
    cy.fixture("registerStudentData").then((data) => {
        studentFormPage.inputFirstName(data.firstName); 
        studentFormPage.inputLastName(data.lastName);
        studentFormPage.inputEmail(data.email);
        studentFormPage.inputMobile(data.mobile);
        studentFormPage.selectGender(data.gender);
        studentFormPage.inputDOB(data.dateOfBirth);
        studentFormPage.selectSubjects(data.subjects[0]);
        studentFormPage.selectHobbies(data.hobbies);
        studentFormPage.uploadPicture(data.picture);
        studentFormPage.inputCurrentAddress(data.currentAddress);
        studentFormPage.inputState(data.state);
        studentFormPage.inputCity(data.city);
        studentFormPage.submitForm();
        studentFormPage.verifySuccessRequiredAllFields();
    });    
});
});