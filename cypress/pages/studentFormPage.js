import BasePage from "./basePage";
import { ENV } from "../core/env";
import { STUDENT_LOCATORS } from "./locators/locators";

class StudentFormPage extends BasePage {
  inputFirstName(firstName) {
    cy.get(STUDENT_LOCATORS.FIRST_NAME_LOCATOR)
      .should("be.visible")
      .clear()
      .type(firstName);
  }
  inputLastName(lastName) {
    cy.get(STUDENT_LOCATORS.LAST_NAME_LOCATOR)
      .should("be.visible")
      .clear()
      .type(lastName);
  }
  selectGender() {
    cy.get(STUDENT_LOCATORS.GENDER_LOCATOR).should("be.visible").click();
  }
  inputMobile(mobile) {
    cy.get(STUDENT_LOCATORS.MOBILE_LOCATOR)
      .should("be.visible")
      .clear()
      .type(mobile);
  }

  inputEmail(email) {
    cy.get(STUDENT_LOCATORS.EMAIL_LOCATOR)
      .should("be.visible")
      .clear()
      .type(email);
  }
  inputDOB(dob) {
    const date = new Date(dob);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__year-select").select(year.toString());
    cy.get(".react-datepicker__month-select").select(month);
    cy.get(`.react-datepicker__day--0${day}`)
      .not(".react-datepicker__day--outside-month")
      .click();
    cy.get("body").click(0, 0);
  }
  selectSubjects(subject) {
    cy.get(STUDENT_LOCATORS.SUBJECTS_LOCATOR).type(`${subject}{enter}`);
  }

  selectHobbies() {
    cy.get(STUDENT_LOCATORS.HOBBIES_SPORTS_LOCATOR).check();
  }

  uploadPicture() {
    cy.get(STUDENT_LOCATORS.PICTURE_UPLOAD_LOCATOR).selectFile(
      "cypress/fixtures/studentImage.jpg",
    );
  }
  inputCurrentAddress(address) {
    cy.get(STUDENT_LOCATORS.CURRENT_ADDRESS_LOCATOR)
      .should("be.visible")
      .clear()
      .type(address);
  }
  inputState(state) {
    cy.get(STUDENT_LOCATORS.STATE_DROPDOWN_LOCATOR)
      .should("be.visible")
      .click();
    cy.get(`div[id^="react-select-3-option-"]`).contains(state).click();
  }
  inputCity(city) {
    cy.get(STUDENT_LOCATORS.CITY_DROPDOWN_LOCATOR).should("be.visible").click();
    cy.get(`div[id^="react-select-4-option-"]`).contains(city).click();
  }

  submitForm() {
    cy.get(STUDENT_LOCATORS.SUBMIT_BUTTON_LOCATOR).should("be.visible").click();
  }

  verifySuccessRequiredFields() {
    cy.get("#example-modal-sizes-title-lg")
      .should("be.visible")
      .and("have.text", "Thanks for submitting the form");
    cy.get("td")
      .contains("Student Name")
      .next()
      .should("have.text", "Chi Nguyen");
    cy.get("td").contains("Gender").next().should("have.text", "Male");
    cy.get("td").contains("Mobile").next().should("have.text", "0123456789");
  }
  verifySuccessRequiredAllFields() {
    cy.get("#example-modal-sizes-title-lg")
      .should("be.visible")
      .and("have.text", "Thanks for submitting the form");
    cy.get("td")
      .contains("Student Name")
      .next()
      .should("have.text", "Chi Nguyen");
    cy.get("td")
      .contains("Date of Birth")
      .next()
      .should("have.text", "26 March,2026");
    cy.get("td").contains("Gender").next().should("have.text", "Male");
    cy.get("td").contains("Mobile").next().should("have.text", "0123456789");
    cy.get("td")
      .contains("Email")
      .next()
      .should("have.text", "chinguyen@gmail.com");
    cy.contains("td", "Subjects").next().should("have.text", "Maths");
    cy.get("td")
      .contains("Hobbies")
      .next()
      .should("have.text", "Sports");
    cy.get("td")
      .contains("Picture")
      .next()
      .should("have.text", "studentImage.jpg");
    cy.get("td")
      .contains("Address")
      .next()
      .should("have.text", "CT1A, Phu Dien, Hanoi");
    cy.get("td")
      .contains("State and City")
      .next()
      .should("have.text", "NCR Delhi");
  }
}

export default StudentFormPage;
