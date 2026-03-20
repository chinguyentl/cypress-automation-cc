export const CommonLocators = {
   SEARCH_BOX_LOCATOR: "#searchBox",
   GO_TO_BOOKS_PAGE_LOCATOR: "#gotoStore",
   DELETE_ICON_LOCATOR: (bookName) => `//td[text()="${bookName}"]/following-sibling::td//span[starts-with(@id, "delete-record-")]`,
   confirmDeleteButton: "#closeSmallModal-ok",
   OPEN_BOOK_LOCATOR: (bookName) => `a:contains("${bookName}")`,
   ADD_TO_COLLECTION_BUTTON_LOCATOR: 'button:contains("Add To Your Collection")',
   PROFILE_LOCATOR: `a:contains("Profile")`,
}
export const LOGIN_PAGE_LOCATORS = {
    USER_NAME_LOCATOR: "#userName",
    PASSWORD_LOCATOR: "#password",
    LOGIN_BUTTON_LOCATOR: "#login"
}

export const REGISTER_PAGE_LOCATORS = {
    FIRST_NAME_LOCATOR: "#firstname",
    LAST_NAME_LOCATOR: "#lastname",
    USER_NAME_LOCATOR: "#userName",
    PASSWORD_LOCATOR: "#password",
    REGISTER_BUTTON_LOCATOR: "#register"
}