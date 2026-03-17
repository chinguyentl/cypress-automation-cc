export const CommonLocators = {
    linkByText: (linkText) => `//a[text()="${linkText}"]`,
    buttonByText: (buttonText) => `//button[text()="${buttonText}"]`,
   
}
export const LOGIN_PAGE_LOCATORS = {
    USER_NAME_LOCATOR: "#userName",
    PASSWORD_LOCATOR: "#password",
    LOGIN_BUTTON_LOCATOR: "#login"
}